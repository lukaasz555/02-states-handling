import './Input.css';

interface InputProps {
	value: string;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	isDisabled?: boolean;
	placeholder?: string;
}

export const Input = ({
	value,
	onChange,
	name,
	type = 'text',
	isDisabled = false,
	placeholder,
}: InputProps) => {
	return (
		<div className='input__wrapper'>
			<label>
				<p>{name.charAt(0).toUpperCase() + name.substring(1)}:</p>
				<input
					value={value}
					name={name}
					type={type}
					disabled={isDisabled}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</label>
		</div>
	);
};
