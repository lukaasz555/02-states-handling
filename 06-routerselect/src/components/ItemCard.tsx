import { useNavigate } from 'react-router-dom';

interface ItemCardProps {
	id: string;
	name: string;
	price: number;
}

export const ItemCard = ({ id, name, price }: ItemCardProps) => {
	const navigate = useNavigate();
	const pushToItemDetails = () => navigate(`/items/${id}`);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				background: 'rgba(255, 255, 255, 0.05)',
				borderRadius: '12px',
				padding: '0.25em 1.5em',
			}}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					columnGap: '1em',
				}}>
				<h3>{name ? name : 'name'}</h3>
				<p>{price ? price : 'price'}</p>
			</div>
			<div>
				<button onClick={pushToItemDetails}>see more</button>
			</div>
		</div>
	);
};
