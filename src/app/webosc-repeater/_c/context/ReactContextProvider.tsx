"use client"
import React, { createContext, useState, useEffect, ReactNode } from "react";
import engine from '../engine';
import CONTROL_MODULE from '../settings/CONTROL_MODULE';
import { AllInstruments } from "../types";

const instruments = [
    CONTROL_MODULE,
    CONTROL_MODULE,
]

// create type for setInstrumentParams
export const ReactContext = createContext<any>({instruments, setInstrumentParams: () => {}});

interface ReactContextProviderProps {
    children: ReactNode;
}

export const ReactContextProvider = (props: ReactContextProviderProps) => {
    const { children } = props;

    const [instrumentParams, setInstrumentParams] = useState(instruments as AllInstruments);

    useEffect(() => {
        engine.setKnobData(instrumentParams);
    }, [instrumentParams]);

    return (
        <ReactContext.Provider value={{instrumentParams, setInstrumentParams}}>
            {children}
        </ReactContext.Provider>
    )
}