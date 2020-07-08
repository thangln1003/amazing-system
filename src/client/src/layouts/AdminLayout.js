import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '@core/components/Header/Header';
import Footer from '@core/components/Footer/Footer';
import Breadcrumbs from '@core/components/Breadcrumbs';
import Notification from '@core/components/Notification/Notification';
import Dialog from '@core/components/Dialog';

import { routes, breadcrumbRoutes } from '../routes/routeItems';

const AdminLayout = () => {
  const mainPanelRef = React.useRef();

  const handleNotificationClick = () => {};

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} handleClick={handleNotificationClick} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="wrapper">
      <div id="main-panel" className="main-panel" ref={mainPanelRef}>
        <Header />
        <Notification />
        <Dialog />
        <div className="main-content">
          <Breadcrumbs mappedRoutes={breadcrumbRoutes} />
          <Switch>{getRoutes(routes)}</Switch>
        </div>
        <Footer fluid />
      </div>
    </div>
  );
};

export default AdminLayout;
