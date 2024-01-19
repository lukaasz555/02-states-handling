import { useNavigate, useParams } from 'react-router-dom';

export const ItemDetailView = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	// get itemById from itemsStore or sth

	return (
		<div>
			<header style={{ marginBottom: '3em' }}>
				<button onClick={() => navigate(-1)}>go back</button>
			</header>
			<main>ItemDetailView {id}</main>
		</div>
	);
};
