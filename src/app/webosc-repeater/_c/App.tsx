"use client"
import React, { useContext } from 'react';
import Image from 'next/image'
import { ReactContext } from './context/ReactContextProvider';
import SynthModule from './components/synthModule';
import TapeDelay from './components/tapeDelay';
import MainDestinationControls from './components/mainDestinationControls';
import styles from './app.module.css';
import commonStyles from './common/common.module.css';

export default function App() {
    const { instrumentParams } = useContext(ReactContext);
    return (
        <div className={styles.wrapper}>
            <MainDestinationControls />
            <div className={`${styles.modules} ${commonStyles.defaultPanelColoringWrapper}`}>
                {instrumentParams.map((instrument:any, instrumentIndex:number) => {
                    return (
                        <SynthModule
                            knobs={instrument}
                            instrumentIndex={instrumentIndex}
                            key={instrumentIndex}
                        />
                    )
                })}
                {/* <TapeDelay /> */}
            </div>
            <Image src={'/witch_mask.png'} width={200} height={250} alt="witch mask" className={styles.witchMask} />
        </div>
    )
}