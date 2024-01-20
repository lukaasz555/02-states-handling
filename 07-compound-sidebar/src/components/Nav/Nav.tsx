import { mainRoutes } from '../../data/routes';
import './Nav.css';

export const Nav = () => {
	return (
		<nav>
			<ul>
				{mainRoutes.map(({ path, text }) => (
					<li>
						<a href={path}>{text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
