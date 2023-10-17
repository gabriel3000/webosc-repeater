"use client"
import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import style from './power.module.css';
import { ReactContext } from '../../context/ReactContextProvider';
import engine from '../../engine';
import { Knob } from '../../types';

interface PowerProps {
    settings: {
        instrumentIndex: number;
        knob: string;
    };
}

export default function Power({ settings }: PowerProps) {
    const { instrumentIndex, knob: k } = settings;
    const { instrumentParams, setInstrumentParams } = useContext(ReactContext);
    const [power, setPower] = useState(false);

    const buttonClasses = classNames({
        [style.ON]: power,
        [style.power]: true,
    });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newInstrumentParams:any = JSON.parse(JSON.stringify(instrumentParams));;
        e.preventDefault();
        setPower(!power);
        const obj = newInstrumentParams[instrumentIndex].find((knob:Knob) => {
            return knob.knob === k;
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

    return (
        <button className={buttonClasses} onClick={(e)=>{ handleClick(e)}}>{power ? 'ON' : 'OFF'}</button>
    )
}