const CONTROL_MODULE = [
    {
        knob: 'power',
        type: 'power',
        labelContent: 'power',
        value: false,
    },
    {
        knob: 'wave',
        type: 'radio',
        labelContent: 'wave',
        value: 'sine',
        radios: [
            {
                label: 'sine',
                value: 'sine',
            },
            {
                label: 'square',
                value: 'square',
            },
            {
                label: 'sawtooth',
                value: 'sawtooth',
            },
            {
                label: 'triangle',
                value: 'triangle',
            },
        ],
    },
    {
        knob: 'interval',
        type: 'slider',
        labelContent: 'interval',
        value: 1000,
        min: 0,
        max: 3000,
        step: 1,
    },
    {
        knob: 'gain',
        type: 'slider',
        labelContent: 'gain',
        value: 0.2,
        min: 0,
        max: 1,
        step: 0.01,
    },
    {
        knob: 'freq1',
        type: 'slider',
        labelContent: 'freq1',
        value: 440,
        min: 0,
        max: 3000,
        step: 1,
    },
    {
        knob: 'freq2',
        type: 'slider',
        labelContent: 'freq2',
        value: 100,
        min: 0,
        max: 3000,
        step: 1,
    },
    {
        knob: 'freq3',
        type: 'slider',
        labelContent: 'freq3',
        value: 50,
        min: 0,
        max: 3000,
        step: 1,
    },
    {
        knob: 'lfoFrequency',
        type: 'slider',
        labelContent: 'lfo frequency',
        value: 440,
        min: 0,
        max: 3000,
        step: 1,
    },
    {
        knob: 'lfoGain',
        labelContent: 'lfo gain',
        type: 'slider',
        value: 0,
        min: 0,
        max: 1,
        step: 0.01,
    },
    {
        knob: 'attack',
        type: 'slider',
        labelContent: 'attack',
        value: 0,
        min: 0,
        max: 5,
        step: 0.01,
    },
    {
        knob: 'sustain',
        type: 'slider',
        labelContent: 'sustain',
        value: 0.3,
        min: 0,
        max: 5,
        step: 0.01,
    },
    {
        knob: 'decay',
        type: 'slider',
        labelContent: 'decay',
        value: 0.3,
        min: 0,
        max: 5,
        step: 0.01,
    },
]
export default CONTROL_MODULE;