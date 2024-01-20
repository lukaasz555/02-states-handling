import { CompoundContext } from '../../context/CompoundContext';
import { useCompound } from '../../hooks/useCompound';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import './Layout.css';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const { toggleVisibility, isSidebarVisible } = useCompound();

	return (
		<div className='layout__grid'>
			<CompoundContext.Provider value={{ isSidebarVisible, toggleVisibility }}>
				<Header />
				<main>{children}</main>
				<Sidebar />
			</CompoundContext.Provider>
		</div>
	);
};
