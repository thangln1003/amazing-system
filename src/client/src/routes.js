// Components
import Typography from './views/Components/Typography';
import IconsPage from './views/Components/IconsPage';
import AntTablePage from 'views/Components/AntTablePage';
import ReactTablePage from 'views/Components/ReactTablePage';

// Pages
import LoginPage from './views/Pages/LoginPage';
import RegisterPage from './views/Pages/RegisterPage';
import LockScreenPage from './views/Pages/LockScreenPage';
import DashboardPage from './views/Pages/DashboardPage';
import CarRentalContactPage from './views/Pages/CarRentalContactPage';
import ForgotPasswordPage from './views/Pages/ForgotPasswordPage';
import StdUI01 from './views/MO/StdUI01';
import RolesPage from './views/Pages/Roles/RolesPage';
import NewRolePage from './views/Pages/Roles/NewRolePage';

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
    icon: 'pe-7s-add-user',
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
    path: '/ant-table',
    name: 'Ant Table',
    icon: 'pe-7s-news-paper',
    component: AntTablePage,
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
  {
    layout: '/auth',
    icon: 'pe-7s-lock',
    name: 'Lock Screen',
    path: '/lock-screen',
    component: LockScreenPage,
  },
  {
    layout: '/auth',
    icon: 'pe-7s-lock',
    name: 'Forgot Password',
    path: '/forgot-password',
    component: ForgotPasswordPage,
  },
  {
    layout: '/admin',
    icon: 'pe-7s-lock',
    name: 'New Role',
    path: '/roles/new',
    component: NewRolePage,
  },
  {
    layout: '/admin',
    icon: 'pe-7s-lock',
    name: 'Role',
    path: '/roles',
    component: RolesPage,
  },
];

export { routes, breadcrumbRoutes };
