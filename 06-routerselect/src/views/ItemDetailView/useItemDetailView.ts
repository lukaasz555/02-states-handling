import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store/store';
import { getItemById } from '../../store/reducers/itemsReducer';

export const useItemDetailView = () => {
	const { id } = useParams();
	const item = useSelector((state: RootState) => state.items.currentItem);
	const dispatch = useDispatch();

	useEffect(() => {
		if (id) dispatch(getItemById(id));
	}, [dispatch, id]);

	return { item };
};
