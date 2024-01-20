import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import './Layout.css';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='layout__grid'>
			<Header />
			<main>{children}</main>
			<Sidebar />
		</div>
	);
};
