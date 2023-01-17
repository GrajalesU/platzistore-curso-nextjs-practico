import { ContextType } from '@hooks/useInitialState';
import React from 'react';

const AppContext = React.createContext({} as AppContextType);

export type AppContextType = {
  state: ContextType;
  toggleOrder: () => void;
  toggleMenu: () => void;
  removeFromCart: (payload: TProduct) => void;
  addToCart: (payload: TProduct) => void;
};

export default AppContext;
