import { useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import { useCartReducer } from '../../hooks/useCartReducer';
import './ProductItem.css';

interface ProductItemProps {
	product: IProduct;
}

export const ProductItem = ({ product }: ProductItemProps) => {
	const [error, setError] = useState('');
	const { addProduct, removeItem } = useCartReducer();
	const { price, name, id, quantity } = product;

	console.log('st', setError.toString());

	const onAddClick = () => {
		addProduct(product);
	};

	const onRemoveItemClick = () => {
		removeItem(product);
	};

	return (
		<div className='product__wrapper'>
			<div className='product__details'>
				<h3>
					{name} - {price} zł
				</h3>
				<p>{id}</p>
			</div>
			<div className='product__actions'>
				<div>
					<button className='product__actions--btn' onClick={onRemoveItemClick}>
						-
					</button>
					<p className='product__actions--qty'>{quantity}</p>
					<button className='product__actions--btn' onClick={onAddClick}>
						+
					</button>
				</div>
				<p className='product__actions--error'>{error}</p>
			</div>
		</div>
	);
};
