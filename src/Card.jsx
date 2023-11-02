import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div className="card">
      <h2>Información Ingresada</h2>
      <p>Primer Input: {input1}</p>
      <p>Segundo Input: {input2}</p>
    </div>
  );
};

export default Card;

