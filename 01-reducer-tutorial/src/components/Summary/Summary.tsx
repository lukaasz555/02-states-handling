import { IProduct } from '../../interfaces/IProduct';
import './Summary.css';

interface SummaryProps {
	productsInCart: IProduct[];
}

export const Summary = ({ productsInCart }: SummaryProps) => {
	console.log(productsInCart);

	const onClearCart = () => console.log('clear cart');

	return (
		<section className='summary__wrapper'>
			<div className='summery__tools'>
				<button onClick={onClearCart}>Clear cart</button>
			</div>
			<div className='summary__content'>
				{!productsInCart.length ? (
					<div className='summary__content--empty'>
						<p>You have no items in your cart</p>
					</div>
				) : (
					<div className='summary__content--items'>
						<p>Some items should be shown here</p>
					</div>
				)}
			</div>
		</section>
	);
};
