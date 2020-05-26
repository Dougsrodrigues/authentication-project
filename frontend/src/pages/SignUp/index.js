import React, { useState, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { Container, Content, FormContent } from './styles';
import loginValidateSchema from './SchemaValidation';
import Diamond from '../../assets/diamond.svg';
import UserIcon from '../../assets/user.svg';
import PasswordIcon from '../../assets/password.svg';
import Mail from '../../assets/mail.svg';
import Input from '../../components/commom/Input';

export default function SignUp() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (values) => {
    try {
      formRef.current.setErrors({});

      await loginValidateSchema.validate(values, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <img src={Diamond}></img>
          <h1>SIGN UP</h1>
          <p>
            Hello there! Sign up and start managing your TrueDiamond account
          </p>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <FormContent>
              <Input
                name="name"
                placeholder="Name"
                type="text"
                icon={UserIcon}
              />
              <Input
                name="email"
                placeholder="E-mail"
                type="email"
                icon={Mail}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                icon={PasswordIcon}
              />
              <button type="submit">REGISTER</button>
            </FormContent>
          </Form>
        </div>
      </Content>
    </Container>
  );
}
