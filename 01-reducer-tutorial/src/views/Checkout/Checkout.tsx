import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Summary } from '../../components/Summary/Summary';
import data from '../../data/data.json';
import { useCartReducer } from '../../hooks/useCartReducer';
import './Checkout.css';

export const Checkout = () => {
	const { state, removeAllProducts, submitCart, ...actions } = useCartReducer();

	return (
		<main className='checkout__wrapper'>
			<ProductsList allProducts={data.items} actions={actions} />
			<Summary
				state={state}
				submitCart={submitCart}
				removeAllProducts={removeAllProducts}
			/>
		</main>
	);
};
