import { LangChanger } from '../LangChanger/LangChanger';

export const Nav = () => {
	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<h1>some nav</h1>
			<LangChanger />
		</nav>
	);
};
