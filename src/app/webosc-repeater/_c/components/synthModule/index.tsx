"use client"
import React from 'react';
import Slider from '../slider';
import RadioGroup from '../radioGroup';
import Power from '../power';
import styles from './synthModule.module.css';
import { InstrumentKnobs } from '../../types';

interface SynthModuleSettings {
    knobs: InstrumentKnobs;
    instrumentIndex: number;
}

const SynthModule = ({knobs, instrumentIndex}:SynthModuleSettings) => {
    return (
        <div className={styles.module} id={`INSTRUMENT-${instrumentIndex}`} key={instrumentIndex}>
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
                            instrumentIndex: instrumentIndex
                        }} />
                        break;
                    default:
                        parsedKnob = null;
                }
                return (
                    <div className={`${styles.knob} knob-type-${knob.type}`} key={knobIndex}>
                        {parsedKnob}
                    </div>
                )
            })}
        </div>
    )
}

export default SynthModule;