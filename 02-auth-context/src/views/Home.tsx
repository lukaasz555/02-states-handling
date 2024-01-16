import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button } from '../components/Button/Button';
import Cookies from 'js-cookie';

export const Home = () => {
	const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const onLogoutClick = () => {
		Cookies.remove('email');
		setLoggedIn(false);
		navigate('/login');
	};

	return !isLoggedIn ? (
		<Navigate to={'/login'} />
	) : (
		<div>
			<h1 style={{ fontSize: '26px', fontWeight: '400', margin: '5em 0 2em' }}>
				{'Welcome' +
					`${Cookies.get('email') ? `, ${Cookies.get('email')}!` : '!'}`}
			</h1>
			<Button buttonText='Logout' onClick={onLogoutClick} />
		</div>
	);
};
