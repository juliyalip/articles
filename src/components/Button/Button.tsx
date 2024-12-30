import React from 'react'
import styles from './Button.module.scss'

type TAtribute = "submit"| "button"


interface IProps{
    type?: TAtribute,
    children: React.ReactNode,
       onClick?: (e:any) => void
}

export default function Button({ type="submit", children, onClick}: IProps){

   
    return(
        <button type={type} onClick={onClick} className={styles.styleBtn}>
            {children}
        </button>
    )
}