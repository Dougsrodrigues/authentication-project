import React, { useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { ValidationError } from 'yup';
import { toast } from 'react-toastify';

import { Container, Content, FormContent } from './styles';
import loginValidateSchema from './SchemaValidation';
import Diamond from '../../assets/diamond.svg';
import Mail from '../../assets/mail.svg';
import PasswordIcon from '../../assets/password.svg';
import Input from '../../components/commom/Input';

export default function Login() {
  const formRef = useRef(null);

  const dispatchSignIn = useDispatch();
  const userInfo = useSelector((state) => state);

  const singIn = async (values) => {
    const { email, password } = values;

    const { data } = await api.post('/sessions', {
      email,
      password,
    });

    dispatchSignIn({ type: 'SIGN_IN', data });
  };

  const handleSubmit = useCallback(async (values) => {
    try {
      formRef.current.setErrors({});

      await loginValidateSchema.validate(values, {
        abortEarly: false,
      });

      await singIn(values);
    } catch (err) {
      if (err instanceof ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current.setErrors(errors);
        return;
      }
      toast.error(err.response.data.message);
    }
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <img src={Diamond}></img>
          <h1>SIGN IN</h1>
          <p>
            Hello there! Sign in and start managing your TrueDiamond account
          </p>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <FormContent>
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

              <span>
                New user? Click<Link to="/signup"> here!</Link>
              </span>

              <button type="submit">SIGN IN NOW</button>
            </FormContent>
          </Form>
        </div>
      </Content>
    </Container>
  );
}
