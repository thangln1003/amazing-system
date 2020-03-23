import Dashboard from './views/Dashboard';

const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'pe-7s-graph',
		component: Dashboard,
		layout: '/admin'
	}
];

export default routes;
