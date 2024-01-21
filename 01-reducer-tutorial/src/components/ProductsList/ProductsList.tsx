import { IProduct } from '../../interfaces/IProduct';
import { CartState } from '../../reducers/cartReducer';
import { ProductItem } from '../ProductItem/ProductItem';
import products from '../../data/data.json';
import './ProductsList.css';

interface ProductsListProps {
	state: CartState;
	actions: {
		addProduct: (arg: IProduct) => void;
		removeProduct: (arg: IProduct) => void;
		removeItem: (arg: IProduct) => void;
	};
}

export const ProductsList = ({ state, actions }: ProductsListProps) => {
	return (
		<div className='productslist__wrapper'>
			{products.items.map((p) => (
				<ProductItem key={p.id} state={state} product={p} actions={actions} />
			))}
		</div>
	);
};
