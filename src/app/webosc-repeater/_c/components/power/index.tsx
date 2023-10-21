"use client"
import React from 'react';
import classNames from 'classnames';
import style from './power.module.css';

interface PowerProps {
    settings: {
        powerClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
        power: boolean;
    };
}

export default function Power({ settings }: PowerProps) {
    const { powerClickHandler, power } = settings;
    const buttonClasses = classNames({
        [style.ON]: power,
        [style.power]: true,
    });
    return (
        <button className={buttonClasses} onClick={(e)=>{ powerClickHandler(e)}}>{power ? 'ON' : 'OFF'}</button>
    )
}