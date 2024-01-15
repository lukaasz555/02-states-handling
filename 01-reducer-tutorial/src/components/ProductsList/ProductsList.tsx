import { IProduct } from '../../interfaces/IProduct';
import { ProductItem } from '../ProductItem/ProductItem';
import './ProductsList.css';

interface ProductsListProps {
	allProducts: IProduct[];
}

export const ProductsList = ({ allProducts }: ProductsListProps) => {
	return (
		<div className='productslist__wrapper'>
			{allProducts.map((p) => (
				<ProductItem key={p.id} product={p} />
			))}
		</div>
	);
};
