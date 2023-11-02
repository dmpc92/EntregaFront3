import React, { useState } from 'react';
import Card from './Card'; //  Card
import './index.css'; // estilos

const Formulario = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validaciones
      if (input1.trim().length < 3 || input1.trim()[0] === ' ' || input2.length < 6) {
        setError('Por favor chequea que la información sea correcta');
      } else {
    
        <Card input1={input1} input2={input2} />
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Primer Input:
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </label>
          <br />
          <label>
            Segundo Input:
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  };
  

export default Formulario;
