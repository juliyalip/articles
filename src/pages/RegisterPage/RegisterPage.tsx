import { useState } from 'react';
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button';
import SectionForm from '../../components/SectionForm/SectionForm';


export default function RegisterPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatePassword, setRepeatePassword] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatePassword(e.target.value);
  };
  return (
    <Form onSubmit={()=>{}}>
      <SectionForm
        name="name"
        type="text "
        value={name}
        setValue={handleName}
      />
      <SectionForm
        name="password"
        type="password"
        value={password}
        setValue={handlePassword}
      />
      <SectionForm
        name="repeatPassword"
        type="password"
        value={repeatePassword}
        setValue={handleRepeatePassword}
      />
      <Button >
        register
      </Button>
    </Form>
  );
}
