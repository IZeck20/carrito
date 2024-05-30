import React from 'react';

function Producto({ data, addToCarrito }) {
  const { id, nombre, descripcion, precio } = data;

  console.log("Rendering Producto with data:", data);

  return (
    <div style={{ border: "thin solid black" }}>
      <h4>{nombre}</h4>
      <h5>{descripcion}</h5>
      <h4>${precio}.00</h4>
      <button onClick={() => addToCarrito(id)}>Agregar al Carrito</button>
    </div>
  );
}

export default Producto;

