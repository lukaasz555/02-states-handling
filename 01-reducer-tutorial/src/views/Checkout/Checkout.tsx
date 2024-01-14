import { useState } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Summary } from '../../components/Summary/Summary';
import data from '../../data/data.json';
import { IProduct } from '../../interfaces/IProduct';
import './Checkout.css';

export const Checkout = () => {
	const [productsInCart, setProductsInCart] = useState<IProduct[]>([]);

	return (
		<main className='checkout__wrapper'>
			<ProductsList products={data.items} />
			<Summary productsInCart={productsInCart} />
		</main>
	);
};
