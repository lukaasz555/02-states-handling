import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import { CartState } from '../../reducers/cartReducer';
import './ProductItem.css';

interface ProductItemProps {
	product: IProduct;
	state: CartState;
	actions: {
		addProduct: (arg: IProduct) => void;
		removeProduct: (arg: IProduct) => void;
		removeItem: (arg: IProduct) => void;
	};
}

export const ProductItem = ({ product, actions, state }: ProductItemProps) => {
	const [error, setError] = useState('');
	const [isAddAvailable, setAddAvailable] = useState(true);
	const [isRemoveAvailable, setRemoveAvailable] = useState(false);
	const { addProduct, removeItem } = { ...actions };
	const { price, name, id, quantity } = product;

	const onAddClick = () => {
		addProduct(product);
	};

	const onRemoveItemClick = () => {
		removeItem(product);
	};

	const getItemQuantityInCart = () => {
		const product = state.products.find((p) => p.id === id);
		return product?.quantity || 0;
	};

	const handleButtonsDisabled = () => {
		const itemsInCart = getItemQuantityInCart();
		setError(itemsInCart < quantity ? '' : `No more ${name}s available`);
		setAddAvailable(itemsInCart < quantity ? true : false);
		setRemoveAvailable(itemsInCart > 0 ? true : false);
	};

	useEffect(() => {
		handleButtonsDisabled();
	}, [state.products]);

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
					<button
						className='product__actions--btn'
						disabled={!isRemoveAvailable}
						onClick={onRemoveItemClick}>
						-
					</button>
					<p className='product__actions--qty'>{getItemQuantityInCart()}</p>
					<button
						className='product__actions--btn'
						disabled={!isAddAvailable}
						onClick={onAddClick}>
						+
					</button>
				</div>
				<p className='product__actions--error'>{error}</p>
			</div>
		</div>
	);
};
