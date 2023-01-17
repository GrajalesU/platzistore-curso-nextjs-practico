import { useState } from "react";

export type ContextType = {
  cart: TProduct[],
  orderIsOpen: boolean,
  menuIsOpen: boolean
}

const initialState: ContextType = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState<ContextType>(initialState);

  const addToCart = (payload: TProduct) => {
    setState({
      ...state,
      cart: state.cart.includes(payload)
        ? state.cart
        : [...state.cart, payload],
    });
  };

  const removeFromCart = (payload: {id: number}) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
  };
};

export default useInitialState;
