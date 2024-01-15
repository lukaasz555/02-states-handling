import { useReducer } from 'react';
import {
	CartActionTypeEnum,
	cartReducer,
	initCartState,
} from '../reducers/cartReducer';
import { IProduct } from '../interfaces/IProduct';

export const useCartReducer = () => {
	const [state, dispatch] = useReducer(cartReducer, initCartState);

	function addProduct(payload: IProduct) {
		dispatch({
			type: CartActionTypeEnum.ADD,
			payload,
		});
	}

	function removeProduct(payload: IProduct) {
		dispatch({
			type: CartActionTypeEnum.DELETE,
			payload,
		});
	}

	function removeItem(payload: IProduct) {
		dispatch({
			type: CartActionTypeEnum.REMOVE_ITEM,
			payload,
		});
	}

	function removeAllProducts() {
		dispatch({
			type: CartActionTypeEnum.CLEAR_CART,
			payload: { id: '', name: '', price: 0, quantity: 0 },
		});
	}

	function submitCart() {
		dispatch({
			type: CartActionTypeEnum.CALC,
			payload: { id: '', name: '', price: 0, quantity: 0 },
		});
	}

	return {
		state,
		addProduct,
		removeProduct,
		removeItem,
		removeAllProducts,
		submitCart,
	};
};
