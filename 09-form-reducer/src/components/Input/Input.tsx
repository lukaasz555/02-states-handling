import './Input.css';

type InputProps = {
	value: string;
	name: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isDisabled?: boolean;
	type?: string;
	error?: string;
};

export const Input = ({
	value,
	name,
	label,
	onChange,
	isDisabled = false,
	type = 'text',
	error,
}: InputProps) => {
	return (
		<div className='input__wrapper'>
			<label className='input__label'>
				<p>{label}:</p>
				<input
					name={name}
					value={value}
					type={type}
					disabled={isDisabled}
					onChange={onChange}
				/>
			</label>
			<p className='input__error'>{error}</p>
		</div>
	);
};
