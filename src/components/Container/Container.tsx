import React from 'react';
import styles from './Container.module.scss';

interface IProps {
  children: React.ReactNode;
  
}

export default function Container({ children}: IProps) {
  
  return <div className={styles.base}>{children}</div>;
}
