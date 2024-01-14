import { useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import { CartActionTypeEnum } from '../../reducers/cartReducer';
import './ProductItem.css';
import { useCartContext } from '../../context/CartContext';

interface ProductItemProps {
	product: IProduct;
	isAvailable: boolean;
}

export const ProductItem = ({ product, isAvailable }: ProductItemProps) => {
	const [error, setError] = useState('');
	const { dispatch } = useCartContext();
	const { price, name, id, quantity } = product;

	// console.log(price, name, id, quantity, setError);

	const onAddClick = () => {
		dispatch({
			type: CartActionTypeEnum.ADD,
			payload: {
				...product,
				quantity: 1,
			},
		});
	};

	const onRemoveItemClick = () => {
		// console.log('should remove one item of product with id ', id);
		dispatch({
			type: CartActionTypeEnum.REMOVE_ITEM,
			payload: {
				...product,
				quantity: 1,
			},
		});
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
					<button
						className='product__actions--btn'
						disabled={!isAvailable}
						onClick={onAddClick}>
						+
					</button>
				</div>
				<p className='product__actions--error'>{error}</p>
			</div>
		</div>
	);
};
