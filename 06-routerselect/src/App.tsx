import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemsListView } from './views/ItemsListView/ItemsListView';
import { ItemDetailView } from './views/ItemDetailView/ItemDetailView';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';

function App() {
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
