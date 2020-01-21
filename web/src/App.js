import React, { useState } from 'react';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <>
      <Header title="header 01" />
      <Header title="header 02" />
      <Header title="header 04" />

      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
