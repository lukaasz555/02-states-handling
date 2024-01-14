import { IProduct } from '../../interfaces/IProduct';
import { ProductItem } from '../ProductItem/ProductItem';
import './ProductsList.css';

interface ProductsListProps {
	allProducts: IProduct[];
	productsInCart: IProduct[];
}

export const ProductsList = ({
	allProducts,
	productsInCart,
}: ProductsListProps) => {
	const isProductAvailable = (productId: string) => {
		const product = allProducts.find((p) => p.id == productId);
		const cartItem = productsInCart.find((p) => p.id == productId);

		if (product && cartItem) {
			return product.quantity - cartItem.quantity > 1;
		} else return true; //! CHANGE TO FALSE;
	};

	return (
		<div className='productslist__wrapper'>
			{allProducts.map((p) => (
				<ProductItem
					key={p.id}
					product={p}
					isAvailable={isProductAvailable(p.id)}
				/>
			))}
		</div>
	);
};
