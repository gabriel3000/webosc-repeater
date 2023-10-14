import React, { useContext } from 'react';
import { ReactContext } from './context/ReactContextProvider';
import SynthModule from './components/SynthModule';

export default function App() {
    const { instrumentParams } = useContext(ReactContext);

    return (
        <div>
            <div className="modules">
                {instrumentParams.map((instrument, instrumentIndex:number) => {
                    return (
                        <SynthModule
                            knobs={instrument}
                            instrumentIndex={instrumentIndex}
                        />
                    )
                })}
            </div>
        </div>
    )
}