export default class TapeDelay {

    audioContext:AudioContext;
    delayTime:number;
    feedback:number;
    wetLevel:number;
    input:GainNode;
    output:GainNode;
    delay:DelayNode;
    feedbackNode:GainNode;
    wetLevelNode:GainNode;

    constructor(audioContext:AudioContext, delayTime:number, feedback:number, wetLevel:number) {
        this.audioContext = audioContext;
        this.delayTime = delayTime;
        this.feedback = feedback;
        this.wetLevel = wetLevel;
        this.input = this.audioContext.createGain();
        this.output = this.audioContext.createGain();
        this.delay = this.audioContext.createDelay();
        this.feedbackNode = this.audioContext.createGain();
        this.wetLevelNode = this.audioContext.createGain();
        this.input.connect(this.delay);
        this.input.connect(this.output);
        this.delay.connect(this.feedbackNode);
        this.delay.connect(this.wetLevelNode);
        this.feedbackNode.connect(this.delay);
        this.wetLevelNode.connect(this.output);
        this.delay.delayTime.value = this.delayTime;
        this.feedbackNode.gain.value = this.feedback;
        this.wetLevelNode.gain.value = this.wetLevel;
    }
}