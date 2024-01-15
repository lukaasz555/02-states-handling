import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Home } from './views/Home';
import { Login } from './views/Login';
import './App.css';

function App() {
	const [isLoggedIn, setLoggedIn] = useState(true);

	// check cookies for user data...

	return (
		<AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
			<>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</BrowserRouter>
			</>
		</AuthContext.Provider>
	);
}

export default App;
