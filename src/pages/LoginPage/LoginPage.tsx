import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import SectionForm from '../../components/SectionForm/SectionForm';
import Form from '../../components/Form/Form';
import { useUserContext } from '../../context/userContext';
import style from './LoginPage.module.scss'

export default function LoginPage(){

    const navigate = useNavigate()
const [name, setName] = useState('')
const [password, setPassword] = useState('')


const {onLogin}= useUserContext()

const changeName =( e:  React.ChangeEvent<HTMLInputElement> )=>{
setName(e.target.value)
}

const changePassword = ( e:  React.ChangeEvent<HTMLInputElement> )=>{
    setPassword(e.target.value)
    }

const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
try{
    await onLogin(name, password);
    setName('');
    setPassword('')
    navigate("/create-article")
}catch(error){
    console.log(error)
}
}

    return (
        <Form onSubmit={onSubmit}>
          <SectionForm type="text "  value={name} name="name" setValue={changeName}/>
          <SectionForm type="password" value={password} name="password" setValue={changePassword} />
            <Button >submit</Button>
            <div className={style.agreement}>If you don't have an acount, go to <Link to="/register">Register page</Link> </div>
        </Form>
    )
}