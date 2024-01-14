import { createContext, useContext } from 'react';
import { CartPayload, CartState, initCartState } from '../reducers/cartReducer';

export type CartContextType = {
	state: CartState;
	dispatch: React.Dispatch<CartPayload>;
};

export const CartContext = createContext<CartContextType>({
	state: initCartState,
	dispatch: () => {},
});

export const useCartContext = () => useContext(CartContext);
