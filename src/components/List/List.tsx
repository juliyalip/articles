import { ReactNode } from "react";
import {IArticle} from '../../interfaces/articles'
import style from './list.module.scss'

interface IProps<T> {
 items: T[],
 getRender: (item: T) => ReactNode
  display?: 'flex'| 'block' | 'grid',
}

export default function List<T>({ items, getRender, display ="block" }:  IProps<T>) {
  return (
    <ul style={{ display }} className={style.list}>
      {items.map(getRender)}
    </ul>
  );
}
