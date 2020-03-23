import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import routes from '../routes.js';

const Layout = () => {
	const mainPanelRef = React.useRef();

	const handleNotificationClick = () => {};

	const getRoutes = routes => {
		return routes.map((prop, key) => {
			if (prop.layout === '/admin') {
				return (
					<Route
						path={prop.layout + prop.path}
						render={props => <prop.component {...props} handleClick={handleNotificationClick} />}
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
				<Switch>{getRoutes(routes)}</Switch>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
