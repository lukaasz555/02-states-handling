import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';

interface ItemsState {
	items: IProduct[];
	currentItem: IProduct | undefined;
}

const initState = (): ItemsState => ({
	items: [],
	currentItem: undefined,
});

const itemsSlice = createSlice({
	name: 'items',
	initialState: initState,
	reducers: {
		setItems: (state: ItemsState, action: PayloadAction<IProduct[]>) => {
			state.items = action.payload;
		},
		getItemById: (state: ItemsState, action: PayloadAction<string>) => {
			state.currentItem = state.items.find((x) => x.id === action.payload);
		},
	},
});

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
