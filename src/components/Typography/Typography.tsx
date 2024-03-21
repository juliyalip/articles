import React from 'react'
import style from './Typography.module.scss'

interface Props{
type: "title" | "description",
children: React.ReactNode
}

export default function Typography({type, children}: Props){
    return(
        <p className={style[type]}>
            {children}
        </p>
    )
}

