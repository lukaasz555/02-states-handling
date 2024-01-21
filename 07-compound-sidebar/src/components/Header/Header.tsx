import { Toggler } from '../Toggler/Toggler';
import './Header.css';

export const Header = () => {
	return (
		<header>
			<h1>Page header</h1>
			<div>
				<Toggler />
			</div>
		</header>
	);
};
