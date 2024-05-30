import { ADD_TO_CARRITO, LIMPIEZA_CARRITO, REMOVE_ALL_CARRITO, REMOVE_ONE_CARRITO } from "../tipo/type";

export const initialstate = {
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

export function ShoppingReducer(state = initialstate, action) {
  switch (action.type) {
    case ADD_TO_CARRITO: {
      let newItem = state.products.find((product) => product.id === action.payload);
      if (!newItem) return state; // Verificar si newItem es undefined
      
      let itemInCart = state.cart.find(item => item.id === newItem.id);
      return itemInCart 
        ? {
            ...state,
            cart: state.cart.map(item => 
              item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_CARRITO: {
      let itemToDelete = state.cart.find(item => item.id === action.payload);
      if (!itemToDelete) return state; // Verificar si itemToDelete es undefined

      return itemToDelete.quantity > 1 
        ? {
            ...state,
            cart: state.cart.map(item => 
              item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
            )
          }
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_CARRITO: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    }
    case LIMPIEZA_CARRITO: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
}
