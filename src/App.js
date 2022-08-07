import React from 'react';

const App = () => {
  function handleScroll(e) {
    console.log(e);
  }
  window.addEventListener('scroll', handleScroll);

  function handleClick(event) {
    console.log(event);
  }
  return (
    <div style={{ height: '200vh' }}>
      <button onClick={handleClick}>Clique</button>
      <br />
      <br />
      <button onClick={(event) => alert(event.target.innerText)}>
        Compre Agora
      </button>
    </div>
  );
};

export default App;
