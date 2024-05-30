import React, { useReducer } from 'react';
import Producto from '../components/producto'; // Asegúrate de que el nombre del archivo coincida
import Pasajero from '../components/pasajerodelcarro'; // Asegúrate de que el nombre del archivo coincida
import { ShoppingReducer, carritoestadoinicial } from '../reducers/reducermercadona';
import { TYPES } from '../actions/comprandoAndo';

function Carritodelmercado() {
  const [state, dispatch] = useReducer(ShoppingReducer, carritoestadoinicial);

  const { products, cart } = state;

  const addToCarrito = (productId) => {
    console.log("Dispatching ADD_TO_CARRITO with payload:", productId);
    dispatch({ type: TYPES.ADD_TO_CARRITO, payload: productId });
  };

  const deleteToCarrito = (productId,all = false) => {
    console.log(productId,all);
    if(all){
        dispatch({ type: TYPES.REMOVE_ALL_CARRITO, payload: productId });
    }else{
        dispatch({ type: TYPES.REMOVE_ONE_CARRITO, payload: productId });
    }

    
  };

  const BanoDeCarrito = () => {
    console.log("Dispatching LIMPIEZA_CARRITO");
    dispatch({ type: TYPES.LIMPIEZA_CARRITO });
  };

  console.log("Current state:", state);

  return (
    <div>
      <h2>Carrito del Mercado</h2>
      <h3>Productos</h3>
      <article className='caja grid-responsive'>
        {products.map((product) => (
          <Producto key={product.id} data={product} addToCarrito={addToCarrito} />
        ))}
      </article>
      <h3>Carrito</h3>
      <button onClick={BanoDeCarrito}>Limpiar Carrito</button>
      <article className='caja grid-responsive'>
        {cart.map((item, index) => (
          <Pasajero key={index} data={item} deleteToCarrito={deleteToCarrito} />
        ))}
      </article>
    </div>
  );
}

export default Carritodelmercado;
