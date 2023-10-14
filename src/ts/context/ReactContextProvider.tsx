import React, { createContext, useState, useEffect } from "react";
import engine from '../engine';
import CONTROL_MODULE from '../settings/CONTROL_MODULE';
import CONTROL_MAIN from '../settings/CONTROL_MAIN';

const instruments = [
    CONTROL_MAIN,
    CONTROL_MODULE,
    CONTROL_MODULE,
]

export const ReactContext = createContext(instruments);

export const ReactContextProvider = (props) => {
    const { children } = props;

    const [instrumentParams, setInstrumentParams] = useState(instruments);

    useEffect(() => {
        console.log(instrumentParams);
        engine.setKnobData(instrumentParams);
    }, [instrumentParams]);

    return (
        <ReactContext.Provider value={{instrumentParams, setInstrumentParams}}>
            {children}
        </ReactContext.Provider>
    )
}