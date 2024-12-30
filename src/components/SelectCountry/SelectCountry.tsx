import React, { useState } from 'react';
import Select, { components, ControlProps } from 'react-select';
import style from './Select.module.scss';
import { ICategory } from '../../interfaces/articles';


export interface ColourOption {
  readonly value: string;
  readonly label: string;
 }


 export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' }
]


const controlStyles = {
  border: '1px solid black',
  padding: '5px',
   color: 'green',
};

const ControlComponent = (props: ControlProps<ColourOption, false>) => (
  <div style={controlStyles}>
    <p>Custom Control</p>
    <components.Control {...props} />
  </div>
);




export default function SelectCountry() {
  return (
    <div>
  
    </div>
  );
}
