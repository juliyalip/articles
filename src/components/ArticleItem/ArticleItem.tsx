import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import { IArticle } from '../../interfaces/articles';
import Typography from '../Typography/Typography';
import styles from './ArticleItemContainer.module.scss';
import classNames from 'classnames';

type TWiev = "top" | "standart"

export function getSpoiler(text: string){
  const MAX_SPOILER_TEXT = 80;
  if (text.length <= MAX_SPOILER_TEXT) return text
   const spoilerSpaseIndex = text.indexOf(' ', MAX_SPOILER_TEXT)
   return `${text.substring(0, spoilerSpaseIndex)}...`
 }

interface IProp {
  item: IArticle;
  styleItem: TWiev
}

export default function ArticleItem({ item, styleItem }: IProp) {
  const { coverImg = '', title, description, _id, city, country} = item;

  const location = useLocation()

  const styleContainer = classNames([styles.baseItem], {
   [ styles.topItem]: styleItem ==="top",
   [styles.standartItem]: styleItem === "standart"
  })

const styleImg = classNames([styles.baseContainerImg], {
  [styles.standartContainerImg]: styleItem === "standart"
})

const styleContent = classNames([styles.content], {
  [styles.standartContent]: styleItem=== "standart"
})

const spoilerText  = getSpoiler(description)

  return (
    <li className={styleContainer}>

      <div className={styleImg}>
 <img src={coverImg} alt={title} className={styles.images}/>
 <div className={styles.country} > {country}</div>
      </div>

      <div className={styleContent}>
      <Link to={`${_id}`}>
      <Typography type="title">{title}</Typography>
      <span className={styles.city}>city: {city}</span>
      
      <Typography type='description'>{spoilerText}</Typography>
      </Link>
      </div>
     
    </li>
  );
}
