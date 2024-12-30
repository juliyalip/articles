import React from 'react'
import styles from './Form.module.scss'

 interface IProps{
    onSubmit: ( e: React.FormEvent<HTMLFormElement>)=> void
    children: React.ReactNode
}

export default function Form({children, onSubmit}: IProps){
return(
    <form onSubmit={onSubmit} className={styles.formContainer}>
        {children}
    </form>
)
}