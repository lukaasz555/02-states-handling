import { ProductsList } from '../../components/ProductsList/ProductsList';
import data from '../../data/data.json';
import './Checkout.css';

export const Checkout = () => {
	return (
		<main className='checkout__wrapper'>
			<ProductsList products={data.items} />
			<section>items goes here...</section>
			<aside>aside/details</aside>
		</main>
	);
};
