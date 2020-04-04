import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layouts/Layout';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/admin" render={props => <Layout {...props} />} />
				<Redirect from="/" to="/admin/dashboard" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
