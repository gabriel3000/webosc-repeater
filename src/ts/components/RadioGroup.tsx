import React, { useContext } from 'react';
import { ReactContext } from '../context/ReactContextProvider';
import { cloneDeep } from 'lodash';

export default function RadioGroup({settings}) {
    const { id, defaultValue, knobIndex, instrumentIndex, radios, knob: k } = settings;
    const { instrumentParams, setInstrumentParams } = useContext(ReactContext);

    const handleChange = (e) => {
        const newInstrumentParams:any = JSON.parse(JSON.stringify(instrumentParams));;
        const obj = newInstrumentParams[instrumentIndex].find((knob) => {
            return knob.knob === k;
        });

        if(obj !== undefined) {
            obj.value = e.target.value;
        }
        setInstrumentParams(newInstrumentParams);
    }

    return (
        <div className={`radio-group radio-group-${knobIndex}`} key={knobIndex}>
            <div className="radio-group-options">
                {radios.map((radio, radioIndex) => {
                    const radioId = `radio-group-${id}-${radioIndex}-${knobIndex}-${instrumentIndex}`;
                    return (
                        <div className="radio-group-option" key={radioIndex}>
                            <input type="radio" name={id} id={radioId} value={radio.value} defaultChecked={radio.value === defaultValue} onChange={(e)=>{ handleChange(e) }}/>
                            <label htmlFor={radioId}>{radio.label}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}