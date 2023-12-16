"use client"
import React, { useState } from 'react';
import style from './slider.module.css';

interface SliderSettings {
    settings: {
        id: string;
        labelContent: string;
        min: number;
        max: number;
        step: number;
        value: number;
        knob: string;
        key?: number;
        handleSliderChangeCallback: (value:number, knobName?:string) => void;
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
        key,
        handleSliderChangeCallback
    } = settings;


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(Number(e.target.value));
        handleSliderChangeCallback(Number(e.target.value), settings.knob);
    }

    return (
        <div className={style.sliderWrap} key={key}>
            <label className={style.sliderLabel} htmlFor={`slider-${id}`}><span>{labelContent}</span><input className={style.input} type="number" value={localValue} step={step} onChange={handleChange}/></label>
            <input className={style.slider} type="range" max={max} min={min} step={step} value={localValue} onChange={handleChange} id={`slider-${id}`} />
        </div>
    )
}