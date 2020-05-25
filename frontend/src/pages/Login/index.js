import React, { useState } from 'react';
import { Form } from '@unform/web';
import api from '../../services/api';

import { Container, Content, FormContent } from './styles';
import loginValidateSchema from './SchemaValidation';
import Diamond from '../../assets/diamond.svg';
import UserIcon from '../../assets/user.svg';
import PasswordIcon from '../../assets/password.svg';

import Input from '../../components/commom/Input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (values) => {
    console.log(values);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <Container>
      <Content>
        <div>
          <img src={Diamond}></img>
          <h1>SIGN IN</h1>
          <p>
            Hello there! Sign in and start managing your TrueDiamond account
          </p>
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <Input
                name="email"
                placeholder="E-mail"
                type="email"
                icon={UserIcon}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                icon={PasswordIcon}
              />
              <button type="submit">SIGN IN NOW</button>
            </FormContent>
          </Form>
        </div>
      </Content>
    </Container>
  );
}
