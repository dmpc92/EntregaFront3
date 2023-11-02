import React from 'react';
import Formulario from './Formulario'; // componente Formulario
import './index.css'; // estilos

const App = () => {
  return (
    <div className="App">
      <h1>Formulario</h1>
      <Formulario /> {/* renderizado */}
    </div>
  );
};

export default App;
