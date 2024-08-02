import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const initialState = {
    cartItems: [],
  };

  function cartReducer(state, action) {
    switch (action.type) {
      case "Add-To-Cart":
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case "Update-Quantity":
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      case "Remove-From-Cart":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }

  const [cartState, cartdispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartState, cartdispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
