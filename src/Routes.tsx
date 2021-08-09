import React, { ReactElement } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import MainLayout from './layouts/MainLayout';
import { CssBaseline } from '@material-ui/core';
import ThemesProvider from './lib/context/ThemeCTX';
import { useAuth } from './lib/context/AuthCTX';
import CompanyProvider from './lib/context/CompanyCTX';
import Topka from './pages/Topka/Topka';
import Login from './pages/Login';

const Routes = (): ReactElement => {
	const [isAuth] = useAuth();
	console.log(isAuth);
	return (
		<ThemesProvider>
			<CompanyProvider>
				<CssBaseline />
				<Router>
					<Switch>
						<Route exact path={['/', '/login']}>
							<MainLayout>
								<Switch>
									<Route exact path='/' component={Home} />
									<Route exact path='/login' component={Login} />
								</Switch>
							</MainLayout>
						</Route>
						<Route exact path='/topka' component={Topka} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</CompanyProvider>
		</ThemesProvider>
	);
};

export default Routes;