import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthHeader from '../@core/components/Header/AuthHeader';
import Footer from '../@core/components/Footer/Footer';

// dynamically create pages routes
import { routes } from '../routes/routeItems';

import bgImage from 'assets/img/full-screen-image-3.jpg';

const AuthLayout = (props) => {
  const { location } = props;

  const getPageClass = () => {
    let pageClass = '';
    switch (location.pathname) {
      case '/auth/login':
        pageClass = ' login-page';
        break;
      case '/auth/register':
        pageClass = ' register-page';
        break;
      case '/auth/lock-screen':
        pageClass = ' lock-page';
        break;
      case '/auth/forgot-password':
        pageClass = ' forgot-password-page';
        break;
      default:
        pageClass = '';
        break;
    }
    return pageClass;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === '/auth') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  return (
    <div className="wrapper wrapper-full-page">
      <div className={'full-page' + getPageClass()} data-color="black" data-image={bgImage}>
        <AuthHeader />
        <div className="content">
          <Switch>{getRoutes(routes)}</Switch>
        </div>
        <Footer transparent />
        <div className="full-page-background" style={{ backgroundImage: 'url(' + bgImage + ')' }} />
      </div>
    </div>
  );
};

export default AuthLayout;
