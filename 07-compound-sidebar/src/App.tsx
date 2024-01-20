import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Contact } from './views/Contact';
import { Settings } from './views/Settings';
import { Details } from './views/Details';
import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/details' element={<Details />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
