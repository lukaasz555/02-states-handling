import { Nav } from '../Nav/Nav';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div
			style={{
				width: '100%',
				maxWidth: '960px',
				margin: '0 auto',
				border: '1px solid red',
			}}>
			<Nav />
			<main>{children}</main>
		</div>
	);
};
