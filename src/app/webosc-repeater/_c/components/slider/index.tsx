"use client"
import React, { useState, useContext } from 'react';
import style from './slider.module.css';
import { ReactContext } from '../../context/ReactContextProvider';
import { Knob } from '../../types';

interface SliderSettings {
    settings: {
        id: string;
        labelContent: string;
        min: number;
        max: number;
        step: number;
        defaultValue: number;
        knobIndex: number;
        instrumentIndex: number;
        knob: string;
    };
}


export default function Slider({settings}:SliderSettings) {
    const { instrumentParams, setInstrumentParams } = useContext(ReactContext);

    const {
        id,
        labelContent,
        min,
        max,
        step,
        defaultValue,
        knobIndex,
        instrumentIndex,
        knob: k
    } = settings;

    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newInstrumentParams:any = JSON.parse(JSON.stringify(instrumentParams));

        newInstrumentParams[instrumentIndex].find((knob:Knob) => {
            return knob.knob === k;
        }).value = parseFloat(e.target.value);

        setValue(parseFloat(e.target.value));
        setInstrumentParams(newInstrumentParams);
    };
    return (
        <div className={style.sliderWrap} key={knobIndex}>
            <label className={style.sliderLabel} htmlFor={`slider-${id}`}><span>{labelContent}</span><span>{value}</span></label>
            <input className={style.slider} type="range" max={max} min={min} step={step} value={value} onChange={handleChange} id={`slider-${id}`} />
        </div>
    )
}