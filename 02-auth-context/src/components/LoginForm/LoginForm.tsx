import { useState } from 'react';
import { Input } from '../Input/Input';
import './LoginForm.css';

export const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleFormUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<div className='form__wrapper'>
			<Input value={formData.email} name='email' onChange={handleFormUpdate} />
			<Input
				value={formData.password}
				name='password'
				onChange={handleFormUpdate}
			/>
		</div>
	);
};
