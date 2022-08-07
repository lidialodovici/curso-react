import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form action="">
      <label htmlFor="nome">Nome:</label>
      <Input />
      <label htmlFor="email">Email:</label>
      <Input />
      <br />
      <Button />
    </form>
  );
};

export default Form;
