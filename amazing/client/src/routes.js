import Dashboard                  from './views/Dashboard';
import Typography                 from './views/Typography';
import ReactTablePage             from 'views/Pages/ReactTablePage';
import CarRentalContactPage       from './views/Pages/CarRentalContactPage';
import StdUI01                    from './views/MO/StdUI01';


const breadcrumbRoutes = {
  '/': 'Home',
  // '/admin': 'Admin',
  // '/admin/typography': 'Typography',
  // '/admin/carrental': 'Car Rental Contact Mgnt'
};

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
    path: '/react-table',
    name: 'React Table',
    icon: 'pe-7s-news-paper',
    component: ReactTablePage,
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
