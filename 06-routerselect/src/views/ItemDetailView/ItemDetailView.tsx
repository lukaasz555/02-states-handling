import { useNavigate, useParams } from 'react-router-dom';
import { useItemDetailView } from './useItemDetailView';
import { useEffect } from 'react';

export const ItemDetailView = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { item, getItem } = useItemDetailView();

	useEffect(() => {
		console.log('mounted comp');
		getItem();
	}, [id]);

	return (
		<div>
			<header style={{ marginBottom: '3em' }}>
				<button onClick={() => navigate(-1)}>go back</button>
			</header>
			{!item ? (
				<>
					<main>no found</main>
				</>
			) : (
				<>
					<main>
						{item.name} @ {item.price}
					</main>
				</>
			)}
		</div>
	);
};
