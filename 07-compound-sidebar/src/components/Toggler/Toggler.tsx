import { useContext } from 'react';
import { CompoundContext } from '../../context/CompoundContext';
export const Toggler = () => {
	const { isSidebarVisible, toggleVisibility } = useContext(CompoundContext);

	return (
		<button onClick={toggleVisibility}>
			{isSidebarVisible ? 'HIDE NAV' : 'SHOW NAV'}
		</button>
	);
};
