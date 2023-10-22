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
        value: number;
        knobIndex: number;
        instrumentIndex: number;
        knob: string;
        handleSliderChangeCallback: (value:number, knobName:string) => void;
    };
}

export default function Slider({settings}:SliderSettings) {
    const [ localValue, setLocalValue ] = useState(settings.value);
    const {
        id,
        labelContent,
        min,
        max,
        step,
        value,
        knobIndex,
        handleSliderChangeCallback
    } = settings;


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(Number(e.target.value));
        handleSliderChangeCallback(Number(e.target.value), settings.knob);
    }

    return (
        <div className={style.sliderWrap} key={knobIndex}>
            <label className={style.sliderLabel} htmlFor={`slider-${id}`}><span>{labelContent}</span><span>{localValue}</span></label>
            <input className={style.slider} type="range" max={max} min={min} step={step} value={localValue} onChange={handleChange} id={`slider-${id}`} />
        </div>
    )
}