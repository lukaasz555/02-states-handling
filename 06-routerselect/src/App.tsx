import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemsListView } from './views/ItemsListView/ItemsListView';
import { ItemDetailView } from './views/ItemDetailView/ItemDetailView';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { setItems } from './store/reducers/itemsReducer';
import { useEffect } from 'react';
import mockData from './data/data.json';
import './App.css';

function App() {
	useEffect(() => {
		store.dispatch(setItems(mockData.items));
	}, []);

	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/items' element={<ItemsListView />} />
						<Route path='/items/:id' element={<ItemDetailView />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
