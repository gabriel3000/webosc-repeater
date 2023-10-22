"use client"
import React, { useState, useContext, useEffect } from 'react';
import { ReactContext } from '../../context/ReactContextProvider';
import Slider from '../slider';
import RadioGroup from '../radioGroup';
import Power from '../power';
import styles from './synthModule.module.css';
import commonStyles from '../../common/common.module.css';
import { AllInstruments, InstrumentKnobs, Knob } from '../../types';
import engine from '../../engine';

interface SynthModuleSettings {
    knobs: InstrumentKnobs;
    instrumentIndex: number;
}

const SynthModule = ({knobs, instrumentIndex}:SynthModuleSettings) => {
    const { instrumentParams, setInstrumentParams } = useContext(ReactContext);
    const [power, setPower] = useState(false);
    const [sliderValue, setSliderValue] = useState<null | number>(null);

    const powerClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newInstrumentParams:any = JSON.parse(JSON.stringify(instrumentParams));
        e.preventDefault();
        setPower(!power);
        const obj = newInstrumentParams[instrumentIndex].find((knob:Knob) => {
            return knob.knob === 'power';
        });
        obj.value = !power;
        setInstrumentParams(newInstrumentParams);
        if(!power) {
            engine.play(instrumentIndex);
            engine.schedule(instrumentIndex);
        } else {
            engine.stop(instrumentIndex);
        }
    }

    const handleSliderChangeCallback = (value:number, knobName:string) => {
        const newInstrumentParams:AllInstruments = JSON.parse(JSON.stringify(instrumentParams));
        if(typeof newInstrumentParams === 'object') {
            const obj = newInstrumentParams[instrumentIndex].find((knob:Knob) => {
                return knob.knob === knobName;
            });
            if(obj !== undefined) {
                obj.value = value;
            }
            setInstrumentParams(newInstrumentParams);
            setSliderValue(value);
        }
    }

    useEffect(()=>{
        instrumentParams[instrumentIndex].forEach((knob:any) => {
            if(knob.knob === 'power') {
                if(!knob.value) {
                    setPower(false);
                    engine.stop(instrumentIndex);
                }
            }
        });
    },[instrumentParams]);
    
    return (
        <div className={`${styles.module} ${commonStyles.defaultPanelColoring}`} id={`INSTRUMENT-${instrumentIndex}`} key={instrumentIndex}>
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
                                    value: sliderValue || knob.value,
                                    step: knob.step,
                                    knobIndex: knobIndex,
                                    instrumentIndex: instrumentIndex,
                                    handleSliderChangeCallback: handleSliderChangeCallback,
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
                            powerClickHandler: powerClickHandler,
                            power: power,
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