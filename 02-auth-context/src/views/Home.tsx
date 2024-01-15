import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Home = () => {
	const { isLoggedIn, email } = useContext(AuthContext);

	return !isLoggedIn ? (
		<Navigate to={'/login'} />
	) : (
		<div>{`Welcome ${email ? email : 'user'}!`}</div>
	);
};
