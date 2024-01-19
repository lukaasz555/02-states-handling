import { useParams } from 'react-router-dom';

export const ItemDetailView = () => {
	const { id } = useParams();

	return <div>ItemDetailView {id}</div>;
};
