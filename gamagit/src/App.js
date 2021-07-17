import React, { useState } from "react";

function App(props) {
  const [ usuario, setUsuario ] = useState('Haddad');
  return (
    <>
      <h1>{ props.title }</h1>
      <p>{ usuario }</p>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
    </>
  );
}

export default App;

