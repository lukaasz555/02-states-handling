import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Summary } from '../../components/Summary/Summary';
import { useCartReducer } from '../../hooks/useCartReducer';
import './Checkout.css';

export const Checkout = () => {
	const { state, removeAllProducts, submitCart, ...actions } = useCartReducer();

	return (
		<main className='checkout__wrapper'>
			<ProductsList state={state} actions={actions} />
			<Summary
				state={state}
				submitCart={submitCart}
				removeAllProducts={removeAllProducts}
			/>
		</main>
	);
};
