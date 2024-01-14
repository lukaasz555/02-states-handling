import { IProduct } from '../../interfaces/IProduct';
import { ProductItem } from '../ProductItem/ProductItem';
import './ProductsList.css';

interface ProductsListProps {
	products: IProduct[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
	return (
		<div className='productslist__wrapper'>
			{products.map((p) => (
				<ProductItem key={p.id} product={p} />
			))}
		</div>
	);
};
