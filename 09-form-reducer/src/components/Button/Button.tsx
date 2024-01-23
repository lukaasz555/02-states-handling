import './Button.css';

interface ButtonProps {
	buttonText: string;
	onClick: () => void;
	buttonAlign?: 'left' | 'center' | 'right' | undefined;
	isDisabled?: boolean;
}

export const Button = ({
	buttonText,
	onClick,
	buttonAlign,
	isDisabled = false,
}: ButtonProps) => {
	return (
		<div
			className='button__container'
			style={{ justifyContent: `${buttonAlign ? buttonAlign : 'center'}` }}>
			<button
				disabled={isDisabled}
				style={{ alignSelf: 'center' }}
				onClick={onClick}>
				{buttonText}
			</button>
		</div>
	);
};
