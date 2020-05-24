import React from 'react';

import { Formik } from 'formik';

import { Container, Content, Form, InputUser, InputPassword } from './styles';
import Diamond from '../../assets/diamond.svg';

export default function Login() {
  return (
    <Container>
      <Content>
        <div>
          <img src={Diamond}></img>
          <h1>SIGN IN</h1>
          <p>
            Hello there! Sign in and start managing your TrueDiamond account
          </p>

          <Formik
            initialValues={{}}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <InputUser
                  isPassword={false}
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                  placeholder="Username"
                />
                <InputPassword
                  isPassword={true}
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name="password"
                  placeholder="Password"
                />
                <button>SIGN IN NOW</button>
              </Form>
            )}
          </Formik>
        </div>
      </Content>
    </Container>
  );
}
