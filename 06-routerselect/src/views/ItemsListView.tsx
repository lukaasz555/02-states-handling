import { useEffect, useState } from 'react';
import { ItemCard } from '../components/ItemCard';
import data from '../data/data.json';
import { IProduct } from '../interfaces/IProduct';

export const ItemsListView = () => {
	const [items, setItems] = useState<IProduct[]>([]);

	useEffect(() => {
		setItems(data.items);
	}, []);

	//! TODO: receive items from itemsStore or sth instead of mock json

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
