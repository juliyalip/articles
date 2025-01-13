import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { useValidationBlur } from '../../hooks/useValidationBlur';
import { isValidEmail, isValidPassword } from '../../validate/validate';
import Button from '../../components/Button/Button';
import SectionForm from '../../components/SectionForm/SectionForm';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import Form from '../../components/Form/Form';

import style from './LoginPage.module.scss'

export default function LoginPage() {

    const navigate = useNavigate()
    const { onLogin } = useUserContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorEmail, handleErrorEmail] = useValidationBlur(isValidEmail)
    const [errorPassword, handleErrorPassword] = useValidationBlur(isValidPassword)

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await onLogin(email, password);
            setEmail('');
            setPassword('')
            navigate("/create-article")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form onSubmit={onSubmit}>
            <SectionForm label="email" type="text" value={email} name="name" setValue={changeEmail} onBlur={handleErrorEmail} />
            {errorEmail && <AlertMessage variant='error'>The e-mail is not correct</AlertMessage>}
            <SectionForm label="password" onBlur={handleErrorPassword} type="password" value={password} name="password" setValue={changePassword} />
            {errorPassword && <AlertMessage variant='error'>The password must be more 4 letters</AlertMessage>}
            <Button >submit</Button>
            <div className={style.agreement}>If you don't have an acount, go to <Link to="/register">Register page</Link> </div>
        </Form>
    )
}