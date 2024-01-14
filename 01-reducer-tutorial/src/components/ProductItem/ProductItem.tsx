import { useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import './ProductItem.css';

interface ProductItemProps {
	product: IProduct;
}

export const ProductItem = ({ product }: ProductItemProps) => {
	const [error, setError] = useState('');
	const { price, name, id, quantity } = product;

	console.log(price, name, id, quantity, setError);

	const onAddClick = () => {
		// console.log('should add to cart item with id ', id);
	};

	const onRemoveItemClick = () => {
		// console.log('should remove one item of product with id ', id);
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
