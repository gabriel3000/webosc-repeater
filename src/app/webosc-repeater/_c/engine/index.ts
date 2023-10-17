import { makeDistortionCurve } from './makeDistortionCurve';
import { InstrumentKnobs, AllInstruments } from '../types';

class engine {
    AC!: AudioContext;
    limiter!: DynamicsCompressorNode;
    masterGain!: GainNode;
    distortion!: WaveShaperNode;
    knobData: AllInstruments | undefined;
    intervals!: any[];
    constructor() {
        if (typeof window === 'undefined') {
            return;
        } else {
            this.AC = new window.AudioContext() as AudioContext;
            this.limiter = this.AC.createDynamicsCompressor();
            this.masterGain = this.AC.createGain();
            this.distortion = this.AC.createWaveShaper();
            this.limiter.threshold.value = -6; // this is the pitfall, leave some headroom
            this.limiter.knee.value = 0.0; // brute force
            this.limiter.ratio.value = 20.0; // max compression
            this.limiter.attack.value = 0.005; // 5ms attack
            this.limiter.release.value = 0.050; // 50ms release
            this.distortion.curve = makeDistortionCurve(300);
            this.distortion.oversample = '4x';
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
            };

            const AC = this.AC;

            if(AC === null) return;

            const now = AC.currentTime
            const distortion = this.distortion;
            const limiter = this.limiter;
            const masterGain = this.masterGain;
        
            const envelope = AC.createGain();
            const gainNode = AC.createGain();
            const lfoGainNode = AC.createGain();
            const oscillator = AC.createOscillator();
            const oscillatorLfo = AC.createOscillator();
        
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
            lfoGainNode.connect(envelope);
        
            envelope.gain.setValueAtTime(0, now);
            envelope.gain.linearRampToValueAtTime(gain, now + attack);
            envelope.gain.linearRampToValueAtTime(gain, now + attack + sustain);
            envelope.gain.linearRampToValueAtTime(0, now + attack + sustain + decay);
        
            gainNode.connect(distortion);
            lfoGainNode.connect(distortion);
            distortion.connect(envelope);
            envelope.connect(limiter);
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
        const interval = instrument.find((knob) => { return knob.knob === 'interval' })?.value
        const numberInterval = parseInt(interval ? interval.toString() : '0');

        if(interval === undefined) return;

        this.intervals[i] = setTimeout(() => {
            this.play(i);
            this.schedule(i);
        }, numberInterval);
    }
    stop(i:number) {
        if(i === undefined) return;
        if(this.knobData === undefined) return;
        clearTimeout(this.intervals[i]);
    }
}
export default new engine();
