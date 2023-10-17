"use client"
import React, { useContext } from 'react';
import style from './radioGroup.module.css';
import { ReactContext } from '../../context/ReactContextProvider';
import { Knob } from '../../types';

interface RadioGroupSettings {
    settings: { 
        id: string;
        defaultValue: string;
        knobIndex: number;
        instrumentIndex: number;
        labelContent: string;
        radios: { value: string; label: string }[];
        knob: string;
    }
}


export default function RadioGroup({settings}: RadioGroupSettings) {
    const { id, defaultValue, knobIndex, instrumentIndex, radios, knob: k } = settings;
    const { instrumentParams, setInstrumentParams } = useContext(ReactContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newInstrumentParams:any = JSON.parse(JSON.stringify(instrumentParams));;
        const obj = newInstrumentParams[instrumentIndex].find((knob:Knob) => {
            return knob.knob === k;
        });

        if(obj !== undefined) {
            obj.value = e.target.value;
        }
        setInstrumentParams(newInstrumentParams);
    }

    return (
        <div className={`radio-group radio-group-${knobIndex}`} key={knobIndex}>
            <div className={style['radio-group-options']}>
                {radios.map((radio, radioIndex) => {
                    const radioId = `radio-group-${id}-${radioIndex}-${knobIndex}-${instrumentIndex}`;
                    return (
                        <div className={`${style['radio-group-option']}`} key={radioIndex}>
                            <input type="radio" name={id} id={radioId} value={radio.value} defaultChecked={defaultValue === radio.value} onChange={(e)=>{ handleChange(e) }}/>
                            <label htmlFor={radioId}>{radio.label}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}