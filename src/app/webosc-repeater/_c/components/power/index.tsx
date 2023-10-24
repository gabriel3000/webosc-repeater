"use client"
import React from 'react';
import classNames from 'classnames';
import style from './power.module.css';

interface PowerProps {
    settings: {
        powerClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
        power: boolean;
        powerCopy?: [ string, string ];
    };
}

export default function Power({ settings }: PowerProps) {
    const { powerClickHandler, power } = settings;
    const buttonClasses = classNames({
        [style.ON]: power,
        [style.power]: true,
    });

    const onOffCopy = settings.powerCopy ? settings.powerCopy : [ 'ON', 'OFF' ];

    return (
        <button className={buttonClasses} onClick={(e)=>{ powerClickHandler(e)}}>{power ? onOffCopy[0] : onOffCopy[1]}</button>
    )
}