import React, { useState } from 'react';
import { useArticlesContext } from '../../context/articlesContext';
import SectionForm from '../SectionForm/SectionForm';
import Button from '../Button/Button';
import SelectCountry from '../SelectCountry/SelectCountry';
import { ICategory } from '../../interfaces/articles';
import styles from './CreateFormArticle.module.scss';


export default function CreateFormArticle() {

  const { categories } = useArticlesContext()

  const [title, setTitle] = useState('')
  const [country, setCountry] = useState<ICategory>(categories[0])
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')

  const selectCountry = (selectedOption: ICategory | null) => {
    if (selectedOption) {
      setCountry(selectedOption);
    }
  };

  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }


  const handleSetCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleSetDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }
  return (<form onSubmit={() => { }} className={styles.container}>
    <div className={styles.sectionTopic}>
      <SectionForm name="title" label="title" value={title} setValue={handleSetTitle} type="text" />

      <SelectCountry country={country} onChooseCountry={selectCountry} />
      <SectionForm name="city" label="city" value={city} setValue={handleSetCity} type="text" />
    </div>
    <label htmlFor='description' className={styles.label}>description</label>
    <textarea name="description" id="description" value={description} className={styles.description} onChange={handleSetDescription}></textarea>
    <Button >create article</Button>
  </form>

  );
}
