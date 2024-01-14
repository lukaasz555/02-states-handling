import { useReducer } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Summary } from '../../components/Summary/Summary';
import { CartContext } from '../../context/CartContext';
import { cartReducer, initCartState } from '../../reducers/cartReducer';
import data from '../../data/data.json';
import './Checkout.css';

export const Checkout = () => {
	const [state, dispatch] = useReducer(cartReducer, initCartState);

	return (
		<main className='checkout__wrapper'>
			<CartContext.Provider value={{ state, dispatch }}>
				<ProductsList
					allProducts={data.items}
					productsInCart={state.products}
				/>
				<Summary productsInCart={state.products} />
			</CartContext.Provider>
		</main>
	);
};
