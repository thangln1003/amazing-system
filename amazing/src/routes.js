import Dashboard from './views/Dashboard';
import Typography from './views/Typography';

const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'pe-7s-graph',
		component: Dashboard,
		layout: '/admin',
	},
	{
		path: '/typography',
		name: 'Typography',
		icon: 'pe-7s-news-paper',
		component: Typography,
		layout: '/admin',
	},
];

export default routes;
