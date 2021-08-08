import React, { ReactElement } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import MainLayout from './layouts/MainLayout';
import { CssBaseline } from '@material-ui/core';
import ThemesProvider from './lib/context/ThemeCTX';
import { useAuth } from './lib/context/AuthCTX';
import CompanyProvider from './lib/context/CompanyCTX';
import Topka from './pages/Topka';

const Routes = (): ReactElement => {
	console.log(useAuth());
	return (
		<ThemesProvider>
			<CompanyProvider>
				<CssBaseline />
				<Router>
					<MainLayout>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/topka' component={Topka} />
							<Route component={NotFound} />
						</Switch>
					</MainLayout>
				</Router>
			</CompanyProvider>
		</ThemesProvider>
	);
};

export default Routes;