import React from 'react';
 import './ProdInfo.css'
function ProdInfo({ product }) {
  return (
    <div className="prod-info">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProdInfo;