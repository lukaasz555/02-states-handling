import { ItemCard } from '../../components/ItemCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const ItemsListView = () => {
	const items = useSelector((state: RootState) => state.items.items);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				rowGap: '1em',
				maxWidth: '600px',
				margin: '0 auto',
			}}>
			{items.map(({ id, name, price }) => (
				<ItemCard key={id} id={id} name={name} price={price} />
			))}
		</div>
	);
};
