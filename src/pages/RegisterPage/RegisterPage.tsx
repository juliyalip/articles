import { useState } from 'react';
import { useValidationBlur } from '../../hooks/useValidationBlur';
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button';
import SectionForm from '../../components/SectionForm/SectionForm';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import { isValidName, isValidEmail, isValidPassword } from '../../validate/validate';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorName, handlerBlurEmail] = useValidationBlur(isValidName)
  const [errorEmail, handleBlurEmail] = useValidationBlur(isValidEmail)
  const [errorPassword, handleBlurPassword] = useValidationBlur(isValidPassword)

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Form onSubmit={() => { }}>
      <SectionForm
        label="name"
        name="name"
        type="text"
        value={name}
        setValue={handleName}
        onBlur={handlerBlurEmail}
      />
      {errorName && <AlertMessage variant='error'>Must be at least 3 letters</AlertMessage>}
      <SectionForm
        label='email'
        name="email"
        type="text"
        value={email}
        setValue={handleEmail}
        onBlur={handleBlurEmail}
      />
      {errorEmail && <AlertMessage variant='error'>The e-mail is not correct</AlertMessage>}
      <SectionForm
        label="passwor"
        name="password"
        type="password"
        value={password}
        setValue={handlePassword}
        onBlur={handleBlurPassword}
      />
      {errorPassword && <AlertMessage variant='error'>The password must be more 4 letters</AlertMessage>}
      <Button>
        register
      </Button>
    </Form>
  );
}
