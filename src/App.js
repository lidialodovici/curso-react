import React, { Fragment } from 'react';
import Footer from './Footer.js';
import Form from './Form/Form.js';
import Header from './Header.js';

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Ativo</p>;
  } else {
    return null;
  }
};
const App = () => {
  return (
    <Fragment>
      <Header />
      <Teste />
      <Form />
      <br />
      <Footer />
    </Fragment>
  );
};

export default App;
