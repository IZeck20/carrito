import { ADD_TO_CARRITO, LIMPIEZA_CARRITO, REMOVE_ALL_CARRITO, REMOVE_ONE_CARRITO } from "../tipo/type";

export const addTocart = (id) => ({
  type: ADD_TO_CARRITO,
  payload: id
});

export const delFromCart = (id, all = false) => (
  all ? { type: REMOVE_ALL_CARRITO, payload: id } : { type: REMOVE_ONE_CARRITO, payload: id }
);

export const clearCart = () => ({
  type: LIMPIEZA_CARRITO
});
