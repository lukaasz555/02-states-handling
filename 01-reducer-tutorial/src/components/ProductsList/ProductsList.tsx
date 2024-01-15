import { IProduct } from '../../interfaces/IProduct';
import { ProductItem } from '../ProductItem/ProductItem';
import './ProductsList.css';

interface ProductsListProps {
	allProducts: IProduct[];
	actions: {
		addProduct: (arg: IProduct) => void;
		removeProduct: (arg: IProduct) => void;
		removeItem: (arg: IProduct) => void;
	};
}

export const ProductsList = ({ allProducts, actions }: ProductsListProps) => {
	return (
		<div className='productslist__wrapper'>
			{allProducts.map((p) => (
				<ProductItem key={p.id} product={p} actions={actions} />
			))}
		</div>
	);
};
