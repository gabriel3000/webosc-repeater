import React, { useEffect, useState } from 'react';
import styles from './mainDestinationControls.module.css';
import commonStyles from '../../common/common.module.css';
import Power from '../power';
import TapeDelay from '../tapeDelay';
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
        <div className={`${styles.wrapper} ${!power && styles.off}`}>
            <div className={`${styles.killAll} ${commonStyles.defaultPanelColoring} ${power ? styles.instrumentIsOn : null}`}>
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
                    powerCopy: [ 'kill all', 'kill all: off' ],
                }} />
            </div>
        </div>
    )
}
export default MainDestinationControls;