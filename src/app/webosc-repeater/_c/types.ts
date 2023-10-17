import { type } from "os";

export interface RadioOption {
    label: string;
    value: string;
}

export interface KnobBase {
    knob: string;
    type: string;
    labelContent: string;
    value: boolean | string | number;
}

export interface PowerKnob extends KnobBase {
    type: 'power';
    value: boolean;
}

export interface RadioKnob extends KnobBase {
    type: 'radio';
    value: string;
    radios: RadioOption[];
}

export interface SliderKnob extends KnobBase {
    type: 'slider';
    value: number;
    min: number;
    max: number;
    step: number;
}

export type Knob = PowerKnob | RadioKnob | SliderKnob;
export type InstrumentKnobs = Knob[];
export type AllInstruments = InstrumentKnobs[];
