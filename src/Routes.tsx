import React, { ReactElement } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import MainLayout from './layouts/MainLayout';
import { CssBaseline } from '@material-ui/core';
import ThemesProvider from './lib/context/ThemeCTX';
import { useAuth } from './lib/context/AuthCTX';
import Page1 from './pages/Page1';

const Routes = (): ReactElement => {
	console.log(useAuth());
	return (
		<ThemesProvider>
			<CssBaseline />
			<MainLayout>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/page' component={Page1} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</MainLayout>
		</ThemesProvider>
	);
};

export default Routes;
