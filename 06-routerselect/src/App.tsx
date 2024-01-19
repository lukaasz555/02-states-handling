import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemsListView } from './views/ItemsListView';
import { ItemDetailView } from './views/ItemDetailView';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/items' element={<ItemsListView />} />
					<Route path='/items/:id' element={<ItemDetailView />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
