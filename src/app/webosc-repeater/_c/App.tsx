"use client"
import React, { useContext } from 'react';
import { ReactContext } from './context/ReactContextProvider';
import SynthModule from './components/synthModule';
import MainDestinationControls from './components/mainDestinationControls';
import styles from './app.module.css';

export default function App() {
    const { instrumentParams } = useContext(ReactContext);
    return (
        <div className={styles.wrapper}>
            <MainDestinationControls />
            <div className={styles.modules}>
                {instrumentParams.map((instrument:any, instrumentIndex:number) => {
                    return (
                        <SynthModule
                            knobs={instrument}
                            instrumentIndex={instrumentIndex}
                            key={instrumentIndex}
                        />
                    )
                })}
            </div>
        </div>
    )
}