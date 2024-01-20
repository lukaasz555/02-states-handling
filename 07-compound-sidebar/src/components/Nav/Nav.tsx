import { mainRoutes } from '../../data/routes';
import { Toggler } from '../Toggler/Toggler';
import './Nav.css';

export const Nav = () => {
	return (
		<nav>
			<ul>
				<Toggler />
				{mainRoutes.map(({ path, text }) => (
					<li>
						<a href={path}>{text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
