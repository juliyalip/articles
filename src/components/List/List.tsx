import { ReactNode } from "react";

interface IProps<T> {
 items: T[],
 getRender: (item: T) => ReactNode
  disp?: 'flex',
}
 //  @ts-ignore
export default function List({ items, getRender, disp }:  IProps<T>) {
  return (
    <ul style={{ display: disp === 'flex' ? 'flex' : 'blok' }}>
      {items.map(getRender)}
    </ul>
  );
}
