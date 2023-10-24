import React, { useState } from 'react';
import classNames from 'classnames';
import style from './tapeDelay.module.css';
import defaultStyle from '../../common/common.module.css';
import Power from '../power';
import Slider from '../slider';
import engine from '../../engine';

const TapeDelay = () => {

    const [power, setPower] = useState(false);
    const powerClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPower(!power);
        engine?.tape?.power(!power);
    }


    const wrapperClasses = classNames({
        [style.wrapper]: true,
        [defaultStyle.defaultPanelColoring]: true,
    });

    return (
        <div className={wrapperClasses}>
            <div className={style.top}>
                <Power settings={{
                    powerClickHandler: powerClickHandler,
                    power: power,
                    powerCopy: [ 'tape delay: on', 'tape delay: off' ],
                }} />
            </div>
            <Slider settings={{
                knob: 'delay-time',
                id: 'delay-time',
                labelContent: 'delay time',
                min: 0,
                max: 2,
                value: 0.4,
                step: 0.01,
                handleSliderChangeCallback: (value) => {
                    engine.tape?.setDelayTime(value);
                },
            }} />
            <Slider settings={{
                knob: 'delay-wet',
                id: 'delay-wet',
                labelContent: 'wet',
                min: 0,
                max: 1,
                value: 0.4,
                step: 0.001,
                handleSliderChangeCallback: (value) => {
                    engine.tape?.setWet(value);
                },
            }} />
            <Slider settings={{
                knob: 'delay-feedback',
                id: 'delay-feedback',
                labelContent: 'feedback',
                min: 0,
                max: 1,
                value: 0.4,
                step: 0.001,
                handleSliderChangeCallback: (value) => {
                    engine.tape?.setFeedback(value);
                },
            }} />


        </div>
    )
}

export default TapeDelay;