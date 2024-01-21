import { useNavigate } from 'react-router-dom';
import { useItemDetailView } from './useItemDetailView';

export const ItemDetailView = () => {
	const navigate = useNavigate();
	const { item } = useItemDetailView();

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
