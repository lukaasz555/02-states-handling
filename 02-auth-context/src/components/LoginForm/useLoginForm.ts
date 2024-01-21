import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ApiRes, validateLogin } from '../helpers/validateLogin';
import Cookies from 'js-cookie';

const initCurrentState = {
	isLoading: false,
	isError: false,
	isSuccess: false,
	message: '',
};

export const useLoginForm = () => {
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

	return {
		handleFormUpdate,
		formState,
		formData,
		onLoginClick,
	};
};
