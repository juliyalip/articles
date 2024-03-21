import React from 'react';
import { IArticle } from '../../interfaces/articles';
import Typography from '../Typography/Typography';
import style from './ArticleItemContainer.module.scss';
import classNames from 'classnames';

type TWiev = "top" | "standart"

interface IProp {
  item: IArticle;
  styleTop: TWiev
}

export default function ArticleItem({ item, styleTop }: IProp) {
  const { url, title } = item;

  const styleContainer = classNames([style.baseContainer], {
   [ style.containerForTopList]: styleTop ==="top"
  })

  return (
    <li className={styleContainer}>
      <div className={style.containerImg}>
      <img src={url} alt={title} className={style.topImg}/>
      </div>
      <Typography type="title">title</Typography>
    </li>
  );
}
