import React from 'react';
import Slider from './Slider';
import RadioGroup from './RadioGroup';
import Power from './Power';
import ImageFilterVisualizer from './ImageFilterVisualizer';

const SynthModule = ({knobs, instrumentIndex}) => {
    return (
        <div className="module" id={`INSTRUMENT-${instrumentIndex}`} key={instrumentIndex}>
            {/* <ImageFilterVisualizer instrumentIndex={instrumentIndex} /> */}
            {knobs.map((knob, knobIndex) => {
                let parsedKnob;
                switch (knob.type) {
                    case 'slider':
                        parsedKnob = <Slider
                            settings={
                                {
                                    knob: knob.knob,
                                    id: `INSTRUMENT-${instrumentIndex}-KNOB-${knobIndex}`,
                                    labelContent: knob.labelContent,
                                    min: knob.min,
                                    max: knob.max,
                                    defaultValue: knob.value,
                                    step: knob.step,
                                    knobIndex: knobIndex,
                                    instrumentIndex: instrumentIndex,
                                }
                            }
                        />
                        break;
                    case 'radio':
                        parsedKnob = <RadioGroup
                            settings={
                                {
                                    knob: knob.knob,
                                    id: `INSTRUMENT-${instrumentIndex}-KNOB-${knobIndex}`,
                                    labelContent: knob.labelContent,
                                    radios: knob.radios,
                                    defaultValue: knob.value,
                                    knobIndex: knobIndex,
                                    instrumentIndex: instrumentIndex,
                                }
                            }
                        />
                        break;
                    case 'power':
                        parsedKnob = <Power settings={{
                            knob: knob.knob,
                            instrumentIndex: instrumentIndex,
                            knobIndex: knobIndex,
                        }} />
                        break;
                    default:
                        parsedKnob = null;
                }
                return (
                    <div className={`knob knob-type-${knob.type}`}>
                        {parsedKnob}
                    </div>
                )
            })}
        </div>
    )
}

export default SynthModule;