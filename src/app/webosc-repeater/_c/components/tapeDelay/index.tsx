import React from 'react';
import classNames from 'classnames';
import style from './tapeDelay.module.css';
import defaultStyle from '../../common/common.module.css';
import Power from '../power';
import Slider from '../slider';

const TapeDelay = () => {
    const wrapperClasses = classNames({
        [style.wrapper]: true,
        [defaultStyle.defaultPanelColoring]: true,
    });
    return (
        <div className={wrapperClasses}>
            <h2>TapeDelay</h2>
            <Power settings={{
                powerClickHandler: () => { console.log('powerClickHandler') },
                power: true,
            }} />
            <Slider settings={{
                knob: 'delay-time',
                id: 'delay-time',
                labelContent: 'delay time',
                min: 0,
                max: 100,
                value: 0,
                step: 1,
                knobIndex: 0,
                instrumentIndex: 0,
                handleSliderChangeCallback: () => { console.log('handleSliderChangeCallback') },
            }} />
            <Slider settings={{
                knob: 'delay-wet',
                id: 'delay-wet',
                labelContent: 'wet',
                min: 0,
                max: 100,
                value: 0,
                step: 1,
                knobIndex: 0,
                instrumentIndex: 0,
                handleSliderChangeCallback: () => { console.log('handleSliderChangeCallback') },
            }} />
            <Slider settings={{
                knob: 'delay-feedback',
                id: 'delay-feedback',
                labelContent: 'feedback',
                min: 0,
                max: 100,
                value: 0,
                step: 1,
                knobIndex: 0,
                instrumentIndex: 0,
                handleSliderChangeCallback: () => { console.log('handleSliderChangeCallback') },
            }} />


        </div>
    )
}

export default TapeDelay;