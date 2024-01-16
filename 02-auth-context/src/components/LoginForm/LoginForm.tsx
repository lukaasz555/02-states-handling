import { useContext, useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { validateLogin } from '../helpers/validateLogin';
import { ApiRes } from '../helpers/validateLogin';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './LoginForm.css';
import { AuthContext } from '../../context/AuthContext';

const initCurrentState = {
	isLoading: false,
	isError: false,
	isSuccess: false,
	message: '',
};

export const LoginForm = () => {
	const [formState, setFormState] = useState(initCurrentState);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { setLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleFormUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleApiRespond = ({ isError, isSuccess, message }: ApiRes) => {
		setFormState(() => ({
			isError,
			isSuccess,
			message,
			isLoading: false,
		}));

		if (isSuccess) {
			Cookies.set('email', formData.email);
			setLoggedIn(true);
			setTimeout(() => {
				navigate('/');
			}, 999);
		}
	};

	const onLoginClick = async () => {
		setFormState({ ...initCurrentState, isLoading: true });
		await validateLogin(formData)
			.then((res) => handleApiRespond(res))
			.catch((err) => handleApiRespond(err));
	};

	return (
		<div className='form__wrapper'>
			<Input value={formData.email} name='email' onChange={handleFormUpdate} />
			<Input
				value={formData.password}
				name='password'
				type='password'
				onChange={handleFormUpdate}
			/>
			<Button
				buttonText='Login'
				isDisabled={formState.isLoading}
				onClick={onLoginClick}
			/>
			<div className='currentstate__container'>
				{!!formState.isLoading && <p>Loading</p>}
				{!!formState.isError && (
					<p style={{ color: 'red' }}>{formState.message}</p>
				)}
				{!!formState.isSuccess && (
					<p style={{ color: 'green' }}>{formState.message}</p>
				)}
			</div>
		</div>
	);
};
