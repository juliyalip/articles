import React from 'react'
import styles from './Typography.module.scss'

interface Props{
type: "title" | "description" | "subtitle",
children: React.ReactNode
}

export default function Typography({type, children}: Props){
    return(
        <div className={styles[type]}>
            {children}
        </div>
    )
}

