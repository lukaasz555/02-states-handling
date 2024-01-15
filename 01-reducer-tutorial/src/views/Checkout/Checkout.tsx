import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Summary } from '../../components/Summary/Summary';
import data from '../../data/data.json';
import './Checkout.css';

export const Checkout = () => {
	return (
		<main className='checkout__wrapper'>
			<ProductsList allProducts={data.items} />
			<Summary />
		</main>
	);
};
