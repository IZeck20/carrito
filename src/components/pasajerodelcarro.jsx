import React from 'react';

function Pasajero({ data, deleteoneToCarrito,deleteallToCarrito}) {
  const { id, nombre, precio,quantity} = data;

  console.log("Rendering Pasajero with data:", data);

  return (
    <div style={{ border: "thin solid black" }}>
      <h4>{nombre}</h4>
      <h4>${precio}.00  x {quantity} = ${precio*quantity}.00 </h4>
      <button onClick={() => deleteoneToCarrito(id)}>Quitar</button>
      <button onClick={() => deleteallToCarrito(id,true)}>Eliminar</button>
    </div>
  );
}

export default Pasajero;
