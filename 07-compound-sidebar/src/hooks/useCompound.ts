import { useState } from 'react';

export const useCompound = () => {
	const [isSidebarVisible, setSidebarVisible] = useState(false);

	const toggleVisibility = () => setSidebarVisible(!isSidebarVisible);

	return { isSidebarVisible, toggleVisibility };
};
