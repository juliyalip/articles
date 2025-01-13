import React from 'react'
import classNames from 'classnames'
import styles from './AlertMessage.module.scss'

type Variant = "error" | "warning" | "success"

interface IProps{
    children: React.ReactNode,
    variant: Variant
}

export default function AlertMessage({children, variant}: IProps){
    const style = classNames(styles.base, {
        [styles.error]: variant === "error"
    });
return(
    <div className={style}>{children}</div>
)
}