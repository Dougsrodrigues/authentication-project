import styled from 'styled-components';

export const Input = styled.input`
  flex: 1;
  padding: 12px 24px;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid white;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
`;
