"use client"
import React, { useContext } from 'react';
import { ReactContext } from './context/ReactContextProvider';
import SynthModule from './components/synthModule';
import styles from './app.module.css';

export default function App() {
    const { instrumentParams } = useContext(ReactContext);
    return (
        <div>
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