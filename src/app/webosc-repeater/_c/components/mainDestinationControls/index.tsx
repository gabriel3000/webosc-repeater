import React, { useEffect, useState } from 'react';
import styles from './mainDestinationControls.module.css';
import commonStyles from '../../common/common.module.css';
import Power from '../power';
import engine from '../../engine';
import { ReactContext } from '../../context/ReactContextProvider';

const MainDestinationControls = () => {
    const [power, setPower] = useState(false);
    const { instrumentParams, setInstrumentParams } = React.useContext(ReactContext);

    useEffect(()=>{
        let instrumentIsOn = false;
        instrumentParams.forEach((instrument:any) => {
            const obj = instrument.find((knob:any) => {
                return knob.knob === 'power';
            });
            if(obj.value) {
                instrumentIsOn = true;
            }
        });
        setPower(instrumentIsOn);

    }, [instrumentParams]);

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.killAll} ${commonStyles.defaultPanelColoring}`}>
                <span>Kill All</span>
                <Power settings={{
                    powerClickHandler: () => { 
                        setPower(!power)
                        if(power) {
                            engine.killAll()
                        }
                        const newInstrumentParams:any = JSON.parse(JSON.stringify(instrumentParams));
                        newInstrumentParams.forEach((instrument:any) => {
                            const obj = instrument.find((knob:any) => {
                                return knob.knob === 'power';
                            });
                            obj.value = false;
                        });
                        setInstrumentParams(newInstrumentParams);
                    },
                    power: power,
                }} />
            </div>
        </div>
    )
}
export default MainDestinationControls;