import DashboardPage from './views/Pages/DashboardPage';
// Components
import ReactTablePage from 'views/Components/ReactTablePage';
import IconsPage from 'views/Components/IconsPage';
import Typography from './views/Components/Typography';

// Pages
import LoginPage from './views/Pages/LoginPage';
import CarRentalContactPage from './views/Pages/CarRentalContactPage';

const breadcrumbRoutes = {
  '/': 'Home',
  // '/admin': 'Admin',
  // '/admin/typography': 'Typography',
  // '/admin/carrental': 'Car Rental Contact Mgnt'
};

const routes = [
  {
    path: "/login",
    layout: "/auth",
    name: "Login Page",
    mini: "LP",
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: DashboardPage,
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
    path: '/react-table',
    name: 'React Table',
    icon: 'pe-7s-news-paper',
    component: ReactTablePage,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'React Table',
    icon: 'pe-7s-news-paper',
    component: IconsPage,
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

export { routes, breadcrumbRoutes };
