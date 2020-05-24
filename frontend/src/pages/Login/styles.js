import styled from 'styled-components';

import UserIcon from '../../assets/user.svg';
import PasswordIcon from '../../assets/password.svg';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    #5e0af2 0%,
    #7a15f3 47%,
    #911df3 100%
  );
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  border-radius: 8px;
  width: 1020px;
  height: 600px;
  background: #273352;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 32px;
    }

    h1 {
      text-align: center;
      color: white;
      font-size: 32px;
      margin-bottom: 16px;
    }

    p {
      line-height: 19px;
      text-align: start;
      color: white;
      font-size: 16px;
      max-width: 300px;
    }
  }
`;

const Form = styled.form.attrs((props) => {})`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  label {
    opacity: 0.5;
    color: #ffffff;
  }

  button {
    padding: 12px;
    margin-top: 36px;
    border-radius: 15px;
    border: none;
    color: #273352;
  }
`;

const InputUser = styled.input`
  flex: 1;
  padding: 12px 24px;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid white;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;

  background-image: url(${UserIcon});
`;

const InputPassword = styled.input`
  flex: 1;
  padding: 12px 24px;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid white;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;

  background-image: url(${PasswordIcon});
`;

export { Container, Content, Form, InputUser, InputPassword };
