import React from 'react';
import Select, { components, ControlProps } from 'react-select';
import { useArticlesContext } from '../../context/articlesContext';
import styles from './Select.module.scss';
import { ICategory } from '../../interfaces/articles';

const ControlComponent = (props: ControlProps<ICategory, false>) => (

  <div className={styles.container}>
    <span className={styles.label}>country</span>
    <components.Control {...props}></components.Control>
  </div>
)

interface IProp {
  country: ICategory,
  onChooseCountry: (country: ICategory | null) => void
}

export default function SelectCountry({ country, onChooseCountry }: IProp) {
  const { categories } = useArticlesContext();

  const getOptionLabel = (e: ICategory) => e.title;
  const getOptionValue = (e: ICategory) => e._id;

  return (
    <Select
      options={categories}
      defaultValue={country}
      components={{ Control: ControlComponent }}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      onChange={onChooseCountry}
      value={country} styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          outline: "none",
          padding: "0 10px",
          borderColor: state.isFocused ? "#000000" : "#cccccc",
          boxShadow: state.isFocused ? "0 0 0 0.5px #000000" : "none",

        }),
        input: (baseStyles) => ({
          ...baseStyles,
          margin: "0",
          padding: "0",
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          padding: "0",
        }),
        indicatorsContainer: (baseStyles) => ({
          ...baseStyles,
          padding: "0",
        }),

      }}
    />
  );
}
