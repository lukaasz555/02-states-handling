import { IProduct } from '../interfaces/IProduct';

export enum CartActionTypeEnum {
	ADD = 'ADD_PRODUCT',
	DELETE = 'DELETE_PRODUCT',
	REMOVE_ITEM = 'REMOVE_ITEM',
	CALC = 'CALC',
	CLEAR_CART = 'CLEAR_CART',
}

export interface CartState {
	products: IProduct[];
	totalValue: number;
}

export interface CartAction {
	type: CartActionTypeEnum;
	payload: IProduct;
}

export const initCartState: CartState = {
	products: [],
	totalValue: 0,
};

export function cartReducer(state: CartState, action: CartAction): CartState {
	switch (action.type) {
		case CartActionTypeEnum.ADD:
			if (state.products.find((p) => p.id === action.payload.id)) {
				return {
					...state,
					products: state.products.map((p) =>
						p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
					),
				};
			}
			return {
				...state,
				products: [...state.products, { ...action.payload, quantity: 1 }],
			};
		case CartActionTypeEnum.DELETE:
			return {
				...state,
				products: state.products.filter((p) => p.id !== action.payload.id),
			};
		case CartActionTypeEnum.REMOVE_ITEM: {
			const updatedProds = state.products
				.map((p) =>
					p.id === action.payload.id
						? {
								...p,
								quantity: p.quantity - 1,
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  }
						: p
				)
				.filter((p) => p.quantity > 0);
			return {
				...state,
				products: updatedProds,
			};
		}
		case CartActionTypeEnum.CLEAR_CART:
			return {
				...state,
				products: [],
				totalValue: 0,
			};
		case CartActionTypeEnum.CALC:
			return {
				...state,
				totalValue: (state.totalValue = state.products.reduce(
					(acc, curr) => acc + curr.price,
					0
				)),
			};
		default:
			return state;
	}
}
