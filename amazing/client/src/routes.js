// Components
import Typography from './views/Components/Typography';
import IconsPage from './views/Components/IconsPage';
import ReactTablePage from 'views/Components/ReactTablePage';

// Pages
import LoginPage from './views/Pages/LoginPage';
import RegisterPage from './views/Pages/RegisterPage';
import DashboardPage from './views/Pages/DashboardPage';
import CarRentalContactPage from './views/Pages/CarRentalContactPage';
import StdUI01 from './views/MO/StdUI01';

const breadcrumbRoutes = {
  '/': 'Home',
  // '/admin': 'Admin',
  // '/admin/typography': 'Typography',
  // '/admin/carrental': 'Car Rental Contact Mgnt'
};

const routes = [
  {
    path: '/login',
    name: 'Login',
    icon: 'pe-7s-graph',
    component: LoginPage,
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'pe-7s-graph',
    component: RegisterPage,
    layout: '/auth',
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
    name: 'Icons',
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
  {
    layout: '/admin',
    icon: 'pe-7s-news-paper',
    name: 'Standard UI 01',
    path: '/StdUI01',
    component: StdUI01,
  },
];

export { routes, breadcrumbRoutes };
