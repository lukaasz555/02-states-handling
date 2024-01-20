import { useContext } from 'react';
import { Nav } from '../Nav/Nav';
import { CompoundContext } from '../../context/CompoundContext';
import './Sidebar.css';

export const Sidebar = () => {
	const { isSidebarVisible } = useContext(CompoundContext);

	return (
		<aside className={isSidebarVisible ? 'active' : ''}>
			<Nav />
		</aside>
	);
};
