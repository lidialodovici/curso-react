import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{ border: '1px solid #000', margin: '20px 0px', padding: '20px' }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
