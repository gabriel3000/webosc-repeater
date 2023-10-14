import React, { useState, useContext } from 'react';
import { ReactContext } from '../context/ReactContextProvider';
import { cloneDeep } from 'lodash';
import engine from '../engine';

export default function Power({settings}) {
    const { instrumentIndex, knob: k } = settings;
    const { instrumentParams, setInstrumentParams } = useContext(ReactContext);
    const [power, setPower] = useState(false);

    const handleClick = (e) => {
        const newInstrumentParams:any = JSON.parse(JSON.stringify(instrumentParams));;
        e.preventDefault();
        setPower(!power);
        const obj = newInstrumentParams[instrumentIndex].find((knob) => {
            return knob.knob === k;
        });
        obj.value = !power;
        setInstrumentParams(newInstrumentParams);

        if(!power) {
            console.log(instrumentIndex)
            engine.schedule(parseFloat(instrumentIndex));
        } else {
            engine.stop(parseFloat(instrumentIndex));
        }

    }

    return (
        <div className={`power${power ? ' ON' : ''}`}>
            <button onClick={(e)=>{ handleClick(e)}}>{power ? 'ON' : 'OFF'}</button>
        </div>
    )
}