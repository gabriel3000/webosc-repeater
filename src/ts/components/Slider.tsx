import React, { useState, useEffect, useContext } from 'react';
import { ReactContext } from '../context/ReactContextProvider';
import { cloneDeep } from 'lodash';

export default function Slider({settings}) {
    const { instrumentParams, setInstrumentParams } = useContext(ReactContext);

    if (typeof settings === 'undefined') {
        return null;
    }

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

    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(defaultValue);
    }, []);

    const handleChange = (e) => {
        const newInstrumentParams:any = JSON.parse(JSON.stringify(instrumentParams));

        newInstrumentParams[instrumentIndex].find((knob) => {
            return knob.knob === k;
        }).value = parseFloat(e.target.value);

        setValue(e.target.value)
        setInstrumentParams(newInstrumentParams);
    };
    return (
        <div className={`slider slider-${knobIndex}`} key={knobIndex}>
            <label htmlFor={`slider-${id}`}>{labelContent}{value}</label>
            <input type="range" max={max} min={min} step={step} value={value} className="slider" onChange={handleChange} id={`slider-${id}`} />
        </div>
    )
}