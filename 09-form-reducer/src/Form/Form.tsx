import { useFormik } from 'formik';
import { Input } from '../components/Input/Input';
import * as Yup from 'yup';

export const formSchema = Yup.object({
	name: Yup.string()
		.min(3, 'Min length is 3')
		.max(32, 'Max length is 32')
		.required('Required field'),
	lastname: Yup.string()
		.min(3, 'Min length is 3')
		.max(32, 'Max length is 32')
		.required('Required field'),
	email: Yup.string().email('Invalid e-mail').required('Required field'),
	password: Yup.string()
		.min(8, 'Password should contain at least 8 chars')
		.max(32, 'Max password length is 32')
		.required('Required field'),
});

const initialValues = {
	name: '',
	lastname: '',
	email: '',
	password: '',
};

export const Form = () => {
	const formik = useFormik({
		initialValues,
		validationSchema: formSchema,
		validateOnChange: true,
		isInitialValid: false,
		onSubmit: (values: typeof initialValues) => {
			console.log('formik values: ', values);
		},
	});

	const onSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		formik.isValidating;
		console.log(formik.values);
	};

	return (
		<div>
			<form
				onSubmit={formik.handleSubmit}
				style={{ display: 'flex', flexDirection: 'column' }}>
				<Input
					name='name'
					label='Name'
					value={formik.values.name}
					error={formik.errors.name}
					onChange={formik.handleChange}
				/>
				<Input
					name='lastname'
					label='Last name'
					value={formik.values.lastname}
					error={formik.errors.lastname}
					onChange={formik.handleChange}
				/>
				<Input
					name='email'
					label='E-mail'
					value={formik.values.email}
					error={formik.errors.email}
					onChange={formik.handleChange}
				/>
				<Input
					name='password'
					type='password'
					label='Password'
					value={formik.values.password}
					error={formik.errors.password}
					onChange={formik.handleChange}
				/>
				<button
					type='submit'
					disabled={!formik.isValid}
					onClick={onSubmitClick}>
					submit
				</button>
			</form>
		</div>
	);
};
