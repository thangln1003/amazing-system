import Dashboard from './views/Dashboard';
import Typography from './views/Typography';
import CarRentalContactPage from './views/Pages/CarRentalContactPage';

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
	{
		path: '/carrental',
		name: 'Card Rental Mgnt',
		icon: 'pe-7s-news-paper',
		component: CarRentalContactPage,
		layout: '/admin',
	},
];

export default routes;
