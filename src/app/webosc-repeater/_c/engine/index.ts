import { makeDistortionCurve } from './makeDistortionCurve';
import TapeDelay from './tapeDelayClass';
import { InstrumentKnobs, AllInstruments } from '../types';
import { makeResonanceCurve } from './makeResonanceCurve';

class engine {
    AC!: AudioContext;
    limiter!: DynamicsCompressorNode;
    masterGain!: GainNode;
    distortion!: WaveShaperNode;
    delay!: DelayNode;
    knobData: AllInstruments | undefined;
    intervals!: any[];
    tape: TapeDelay | undefined;
    crfilter: BiquadFilterNode | undefined;

    constructor() {
        if (typeof window === 'undefined') {
            return;
        } else {
            this.AC = new window.AudioContext() as AudioContext;
            this.limiter = this.AC.createDynamicsCompressor();
            this.masterGain = this.AC.createGain();
            this.distortion = this.AC.createWaveShaper();

            // this.crfilter = this.AC.createBiquadFilter();
            // this.crfilter.type = 'highpass'; // Use a low-pass filter for a brighter sound
            // this.crfilter.frequency.value = 1000; // Set the cutoff frequency of the filter (in Hz)
            // this.crfilter.gain.value = 1; // Set the gain of the filter (in dB)
            // this.crfilter.Q.value = 10; // Set the Q factor of the filter (unitless)

            this.limiter.threshold.value = -6; // this is the pitfall, leave some headroom
            this.limiter.knee.value = 0.0; // brute force
            this.limiter.ratio.value = 20.0; // max compression
            this.limiter.attack.value = 0.005; // 5ms attack
            this.limiter.release.value = 0.050; // 50ms release
            this.distortion.curve = makeDistortionCurve(400);
            this.distortion.oversample = '4x';
            this.tape = new TapeDelay(this.AC); // AC, delayTime:number, feedback:number, wetLevel:number
            this.intervals = [
                null,
                null,
                null,
            ];
        }
    }
    setKnobData(knobData:AllInstruments) {
        this.knobData = [...knobData];
    }
    play(i:number) {
        try {
            if(i === undefined) return;
            if(this.knobData === undefined) return;
            const instrument:InstrumentKnobs = this.knobData[i];
            const lookup:Record<string, number | boolean | string>  = {};
            for (const item of instrument) {
                if (item.knob) {
                    lookup[item.knob] = item.value;
                }
            }            
            const {
                lfoFrequency,
                lfoGain,
                wave,
                gain,
                attack,
                sustain,
                decay,
                freq1,
                freq2,
                freq3,
                cutoff,
                resonance
            } = lookup as {
                lfoFrequency: number;
                lfoGain: number;
                frequency: number;
                wave: OscillatorType;
                gain: number;
                attack: number;
                sustain: number;
                decay: number;
                freq1: number;
                freq2: number;
                freq3: number;
                resonance: number;
                cutoff: number;
            };

            const AC = this.AC;

            if(AC === null) return;

            const now = AC.currentTime
            // const distortion = this.distortion;
            const limiter = this.limiter;
            const masterGain = this.masterGain;
        
            const envelope = AC.createGain();
            const gainNode = AC.createGain();
            const lfoGainNode = AC.createGain();
            const oscillator = AC.createOscillator();
            const oscillatorLfo = AC.createOscillator();

            const saturate = AC.createWaveShaper();
            saturate.curve = makeResonanceCurve();
            saturate.oversample = 'none';
        
            oscillatorLfo.frequency.value = lfoFrequency;
            lfoGainNode.gain.value = lfoGain;

            oscillatorLfo.connect(lfoGainNode);
            lfoGainNode.connect(gainNode.gain);


            oscillator.connect(gainNode);

            // https://teropa.info/blog/2016/08/10/frequency-and-pitch <--- this is a good read
        
            // oscillator.frequency.value = freq1;
            oscillator.type = wave; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
            oscillator.detune.value = 0; // value in cents

            oscillator.frequency.setValueAtTime(freq1, AC.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(freq2, AC.currentTime + sustain);
            oscillator.frequency.exponentialRampToValueAtTime(freq3, (AC.currentTime + attack + sustain + decay));
        
            gainNode.connect(envelope);
        
            envelope.gain.setValueAtTime(0, now);
            envelope.gain.linearRampToValueAtTime(gain, now + attack);
            envelope.gain.linearRampToValueAtTime(gain, now + attack + sustain);
            envelope.gain.linearRampToValueAtTime(0, now + attack + sustain + decay);
            envelope.connect(limiter);

            /* tape delay - turn off */
            
            /**
             * 
             *     osc.connect(gain);
    gain.connect(filter);
    filter.connect(saturate);
    saturate.connect(dynamics);
    dynamics.connect(speaker);
             * 
             */
            // if(this.crfilter) {
            //     this.crfilter.frequency.value = cutoff;
            //     this.crfilter.Q.value = resonance;
            //     envelope.connect(this.crfilter);
            //     this.crfilter.connect(saturate);
            //     saturate.connect(limiter);
            // }

            if(this.tape?.on) {
                envelope.connect(this.tape.input);
                this.tape.output.connect(limiter);
            }


            limiter.connect(masterGain);
            masterGain.connect(AC.destination);

            oscillator.start(now);
            oscillatorLfo.start(now);
            oscillator.stop(AC.currentTime + attack + sustain + decay);
            oscillatorLfo.stop(AC.currentTime + attack + sustain + decay);
        
            oscillator.onended = () => {
                oscillator.disconnect();
                oscillatorLfo.disconnect();
                gainNode.disconnect();
                lfoGainNode.disconnect();
                envelope.disconnect();
            }
        } catch (e) {
            console.warn(`engine.play() error:${e}`);
            this.stop(i)
        }
    }
    schedule(i:number) {
        if(i === undefined) return;
        if(this.knobData === undefined) return;
        const instrument = this.knobData[i];
        const BPM = instrument.find((knob) => { return knob.knob === 'BPM' })?.value
        const numberBPM = parseInt(BPM ? BPM.toString() : '0');

        const BPMInterval = 60000 / numberBPM;

        if(BPMInterval === undefined) return;

        this.intervals[i] = setTimeout(() => {
            this.play(i);
            this.schedule(i);
        }, BPMInterval);
    }
    stop(i:number) {
        if(i === undefined) return;
        if(this.knobData === undefined) return;
        clearTimeout(this.intervals[i]);
    }
    killAll() {
        this.intervals.forEach((interval) => {
            clearTimeout(interval);
        });
        this.masterGain.disconnect();
    }
}
export default new engine();



/***
 * 
 * 
 * 
 * var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var speaker = context.destination;

var minVal= 50;
var maxVal = context.sampleRate/2;
var octaves = Math.log(maxVal/minVal)/Math.LN2;
var mult = Math.pow(2, octaves*($('#res').val() - 1.0));
var value = maxVal * mult;

var dynamics = context.createDynamicsCompressor();
dynamics.threshold.value = -85;
dynamics.knee.value = 40;
dynamics.ratio.value = 20;
dynamics.attack.value = 0;
dynamics.release.value = 0.3;

var saturate = context.createWaveShaper();
saturate.curve = curve();
saturate.oversample = 'none';


var gain = context.createGain();
gain.gain.value = 0.5;

var filter = context.createBiquadFilter();
filter.frequency.value = 100;

function curve() { 
      let n_samples = 8192,
          ws_table = new Float32Array(n_samples),
          i,
          x;
      for (i = 0; i < n_samples; i++) {
          x = i * 2 / n_samples - 1;
          if (x < -0.08905) {
              ws_table[i] = (-3 / 4) * (1 - (Math.pow((1 - (Math.abs(x) - 0.032857)), 12)) + (1 / 3) * (Math.abs(x) - 0.032847)) + 0.01;
          } else if (x >= -0.08905 && x < 0.320018) {
              ws_table[i] = (-6.153 * (x * x)) + 3.9375 * x;
          } else {
              ws_table[i] = 0.630035;
          }
      }
      return ws_table;
  }




var osc;
var isReal = false;
function create() {
  if(isReal){
    return
  }else {
    isReal = true;
    osc = context.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 111;
    osc.connect(gain);
    gain.connect(filter);
    filter.connect(saturate);
    saturate.connect(dynamics);
    dynamics.connect(speaker);
  }

}


$('#play').on('click', function(){
  create();
  osc.start(0);
});
$('#stop').on('click', function(){
  // osc.stop(0);
  osc.disconnect();
  isReal = false;
});

$('#cutoff').on('input',function(){
  var cut = $('#cutoff').val();
  filter.frequency.value = (cut);
  $('#cutoff-val').html(cut);
});

$('#res').on('input', function(){
			var res = $('#res').val();
			filter.Q.value = res;
			$('#res-id').html(res);
		});



 * 
 * 
 * 
 */