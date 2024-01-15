// import { useEffect, useState } from 'react';
// import { useCartReducer } from '../../hooks/useCartReducer';
// import { IProduct } from '../../interfaces/IProduct';
import './Summary.css';
import { CartState } from '../../reducers/cartReducer';

interface SummaryProps {
	state: CartState;
	submitCart: () => void;
	removeAllProducts: () => void;
}

export const Summary = ({
	state,
	removeAllProducts,
	submitCart,
}: SummaryProps) => {
	// const [prods, setProds] = useState<IProduct[]>([]);

	// const { state, removeAllProducts, submitCart } = useCartReducer();

	// useEffect(() => {
	// 	console.log('prods state changed -> ', state.products);
	// 	setProds(state.products);
	// }, [state.products]);

	const onClearCart = () => {
		removeAllProducts();
	};

	return (
		<section className='summary__wrapper'>
			<div className='summery__tools'>
				<button onClick={onClearCart}>Clear cart</button>
			</div>
			<div className='summary__content'>
				{!state.products.length ? (
					<div className='summary__content--empty'>
						<p>You have no items in your cart</p>
					</div>
				) : (
					<div className='summary__content--items'>
						{state.products.map((p) => (
							<p key={p.id}>{p.name}</p>
						))}
						<div>
							<p>TOTAL: {state.totalValue} zł</p>
							<button onClick={submitCart}>SUBMIT</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};
