import { TYPES } from "../actions/comprandoAndo";

export const carritoestadoinicial = {
  products: [
    { id: 1, nombre: "The Legend of Zelda: Breath of the Wild", descripcion: "Excelente debe comprarlo", precio: 60 },
    { id: 2, nombre: "Super Mario Odyssey", descripcion: "Excelente debe comprarlo", precio: 50 },
    { id: 3, nombre: "Red Dead Redemption 2", descripcion: "Excelente debe comprarlo", precio: 70 },
    { id: 4, nombre: "God of War", descripcion: "Excelente debe comprarlo", precio: 40 },
    { id: 5, nombre: "The Witcher 3: Wild Hunt", descripcion: "Excelente debe comprarlo", precio: 45 },
    { id: 6, nombre: "Cyberpunk 2077", descripcion: "Excelente debe comprarlo", precio: 60 },
    { id: 7, nombre: "Minecraft", descripcion: "Excelente debe comprarlo", precio: 30 },
    { id: 8, nombre: "Fortnite", descripcion: "Excelente debe comprarlo", precio: 0 },
    { id: 9, nombre: "Call of Duty: Modern Warfare", descripcion: "Excelente debe comprarlo", precio: 50 },
  ],
  cart: [],
};

export function ShoppingReducer(state, action) {
  console.log("Reducer called with action:", action);
  switch (action.type) {
    case TYPES.ADD_TO_CARRITO: {
      let newItem = state.products.find((product) => product.id === action.payload);
      let iteminCart = state.cart.find(item => item.id === newItem.id);
      console.log("Adding newItem to cart:", newItem);
      return iteminCart 
        ? { ...state, cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item) }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case TYPES.REMOVE_ONE_CARRITO: {
      let itemtoDelete = state.cart.find(item => item.id === action.payload);
      return itemtoDelete.quantity > 1 
        ? { ...state, cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item) }
        : { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    }
    case TYPES.REMOVE_ALL_CARRITO:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case TYPES.LIMPIEZA_CARRITO:
      return { ...state, cart: [] };
    default:
      return state;
  }
}
