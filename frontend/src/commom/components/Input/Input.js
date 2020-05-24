import React from 'react';
import { Input } from './styles';

export default function Input(props) {
  const { label } = props;
  return (
    <>
      <Input>
        <label>label</label>
        <input
          type="text"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.name}
          name="name"
        />
      </Input>
    </>
  );
}
