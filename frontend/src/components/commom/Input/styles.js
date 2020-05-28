import styled from 'styled-components';

export const Input = styled.input`
  flex: 1;
  padding: 15px 10px;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid white;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
`;

export const Container = styled.div`
  flex: 1;
  background: transparent;
  border: none;

  > span {
    text-align: start;
    color: #f20f4b;
  }
`;
