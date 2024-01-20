interface MainRoute {
	path: string;
	text: string;
}

export const mainRoutes: MainRoute[] = [
	{
		path: '/',
		text: 'Home',
	},
	{
		path: '/settings',
		text: 'Settings',
	},
	{
		path: '/details',
		text: 'Details',
	},
	{
		path: '/contact',
		text: 'Contact',
	},
];
