import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useLoginForm } from './useLoginForm';
import './LoginForm.css';

export const LoginForm = () => {
	const { handleFormUpdate, formState, formData, onLoginClick } =
		useLoginForm();

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
