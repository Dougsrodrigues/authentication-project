import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Input } from './styles';

export default function InputComponent({ name, placeholder, type, icon }) {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Input
        icon={icon}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
      />
    </>
  );
}
