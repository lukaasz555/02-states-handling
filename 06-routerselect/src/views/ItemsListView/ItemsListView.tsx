import { ItemCard } from '../../components/ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setItems } from '../../store/reducers/itemsReducer';
import mockData from '../../data/data.json';
import { useEffect } from 'react';

export const ItemsListView = () => {
	const items = useSelector((state: RootState) => state.items.items);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setItems(mockData.items));
	}, [dispatch]);

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
