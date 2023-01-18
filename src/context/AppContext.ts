/* eslint-disable no-unused-vars */
import { ContextType } from '@hooks/useInitialState';
import React from 'react';
import { TProduct } from '../..';

const AppContext = React.createContext({} as AppContextType);

export type AppContextType = {
  state: ContextType;
  toggleOrder: () => void;
  toggleMenu: () => void;
  removeFromCart: (payload: TProduct) => void;
  addToCart: (payload: TProduct) => void;
};

export default AppContext;
