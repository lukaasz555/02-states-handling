import { LoginForm } from '../components/LoginForm/LoginForm';

export const Login = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
			}}>
			<LoginForm />
		</div>
	);
};
