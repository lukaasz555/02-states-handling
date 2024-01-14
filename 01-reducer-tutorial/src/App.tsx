import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Checkout } from './views/Checkout/Checkout';
import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Checkout />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
