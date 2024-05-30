import React from 'react';
import Producto from './producto'; 
import Pasajero from './pasajerodelcarro'; 
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, clearCart, delFromCart } from '../actions/accionesautomovilisticas';


function GameStore() {
  const { products, cart } = useSelector(state => state.shopping);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>GameStore</h2>
      <h3>Videojuegos</h3>
      <article className='caja grid-responsive'>
        {products.map((product) => (
          <Producto key={product.id} data={product} addToCarrito={() => dispatch(addTocart(product.id))} />
        ))}
      </article>
      <h3>Carrito de Compras</h3>
      <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
      <article className='caja grid-responsive'>
        {cart.map((item, index) => (
          <Pasajero 
            key={index} 
            data={item} 
            deleteoneToCarrito={() => dispatch(delFromCart(item.id))}
            deleteallToCarrito={() => dispatch(delFromCart(item.id, true))} 
          />
        ))}
      </article>
    </div>
  );
}

export default GameStore;
