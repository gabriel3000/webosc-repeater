export default class TapeDelay {
    audioContext:AudioContext;
    input:GainNode;
    output:GainNode;
    delay:DelayNode;
    feedbackNode:GainNode;
    wetLevelNode:GainNode;
    on: boolean;

    constructor(AC:AudioContext) {
        this.audioContext = AC;

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

        this.delay.delayTime.value = 0.04;
        this.feedbackNode.gain.value = 0.9;
        this.wetLevelNode.gain.value = 0.9;

        this.on = false;
    }

    power(bool:boolean) {
        this.on = bool;
    }

    setDelayTime(value:number) {
        this.delay.delayTime.value = value;
    }
    setFeedback(value:number) {
        this.feedbackNode.gain.value = value;
    }
    setWet(value:number) {
        this.wetLevelNode.gain.value = value;
    }
}

