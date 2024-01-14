import { IProduct } from '../../interfaces/IProduct';
import './ProductItem.css';

interface ProductItemProps {
	product: IProduct;
}

export const ProductItem = ({ product }: ProductItemProps) => {
	const { price, name, id, quantity } = product;
	console.log(price, name, id, quantity);

	return (
		<div className='product__wrapper'>
			<div className='product__details'>
				<h3>
					{name} - {price} zł
				</h3>
			</div>
			<div className='product__actions'>
				<button className='product__actions--btn'>-</button>
				<p className='product__actions--qty'>124</p>
				<button className='product__actions--btn'>+</button>
			</div>
		</div>
	);
};
