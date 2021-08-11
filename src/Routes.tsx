import React, { ReactElement } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import MainLayout from './layouts/MainLayout';
import { CssBaseline } from '@material-ui/core';
import ThemesProvider from './lib/context/ThemeCTX';
import { useAuth } from './lib/context/AuthCTX';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import TopkaLayout from './layouts/TopkaLayout';
import LeaveTips from './pages/LeaveTips';
import Menu from './pages/Menu';
import StageProvider from './lib/context/StageCTX';
import Account from './pages/Account';
import Tables from './pages/Tables';
import Settings from './pages/Settings';
import Payback from './pages/Payback';


const Routes = (): ReactElement => {
	const [isAuth] = useAuth();
	console.log(isAuth);
	return (
		<StageProvider>
			<ThemesProvider>
				<CssBaseline />
				<Router>
					<Switch>
						<Route exact path={['/', '/signin']}>
							<MainLayout>
								<Switch>
									<Route exact path='/' component={Home} />
									<Route exact path='/signin' component={SignIn} />
								</Switch>
							</MainLayout>
						</Route>
						<Route exact path={['/topka', '/topka/leavetips', '/topka/menu', '/topka/account', '/topka/account/tables', '/topka/account/settings', '/topka/account/payback']}>
							<TopkaLayout>
								<Switch>
									<Route exact path='/topka' component={Main} />
									<Route exact path='/topka/leavetips' component={LeaveTips} />
									<Route exact path='/topka/menu' component={Menu} />
									{isAuth ? (
										<>
											<Route exact path='/topka/account' component={Account}></Route>
											<Route exact path='/topka/account/tables' component={Tables} ></Route>
											<Route exact path='/topka/account/settings' component={Settings} ></Route>
											<Route exact path='/topka/account/payback' component={Payback} ></Route>
										</>
									) : (
										<Route component={SignIn} />
									)}
								</Switch>
							</TopkaLayout>
						</Route>
						<Route component={NotFound} />
					</Switch>
				</Router>
			</ThemesProvider>
		</StageProvider>
	);
};

export default Routes;