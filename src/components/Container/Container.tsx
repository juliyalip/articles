import React from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

interface IProps {
  children: React.ReactNode;
  size: 'medium' | 'large';
}

export default function Container({ children, size }: IProps) {
  const style = classNames(styles.baseStyle, {
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
  });
  return <div className={style}>{children}</div>;
}
