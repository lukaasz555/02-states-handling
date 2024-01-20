import { createContext } from 'react';

export type CompoundContextType = {
	isSidebarVisible: boolean;
	toggleVisibility: () => void;
};

export const CompoundContext = createContext<CompoundContextType>({
	isSidebarVisible: false,
	toggleVisibility: () => {},
});
