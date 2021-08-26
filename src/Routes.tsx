import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import MainLayout from './layouts/MainLayout';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import cleexTheme from './UI/cleexTheme';
import { useAuth } from './lib/context/AuthCTX';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import TopkaLayout from './layouts/TopkaLayout';
import LeaveTips from './pages/LeaveTips';
import Menu from './pages/Menu/Menu';
import StageProvider from './lib/context/StageCTX';
import Account from './pages/Account';
import Tables from './pages/Tables';
import Settings from './pages/Settings';
import Payback from './pages/Payback';
import Policies from './pages/Policies';
import MenuContent from './pages/Menu/MenuContent';

console.log(process.env.REACT_APP_API_KEY);

const Routes = (): ReactElement => {
	const [isAuth] = useAuth();
	console.log(isAuth);
	return (
		<StageProvider>
			<ThemeProvider theme={cleexTheme}>
				<CssBaseline />
				<Router>
					<Switch>
						<Route exact path={['/', '/signin', '/useragreement', '/privacypolicy']}>
							<MainLayout>
								<Switch>
									<Route exact path='/' component={Home} />
									<Route exact path='/signin' component={SignIn} />
									<Route exact path='/useragreement' component={Policies} />
									<Route exact path='/privacypolicy' component={Policies} />
								</Switch>
							</MainLayout>
						</Route>
						<Route exact path={['/topka', '/topka/leavetips', '/topka/menu', '/topka/account', '/topka/menu/kitchen', '/topka/account/tables', '/topka/menu/bar', '/topka/menu/cocktails', '/topka/account/settings', '/topka/account/payback']}>
							<TopkaLayout>
								<Switch>
									<Route exact path='/topka' component={Main} />
									<Route exact path='/topka/leavetips' component={LeaveTips} />
									<Route exact path='/topka/menu' component={Menu} />
									<Route exact path='/topka/menu/kitchen' component={MenuContent} />
									<Route exact path='/topka/menu/bar' component={MenuContent} />
									<Route exact path='/topka/menu/cocktails' component={MenuContent} />
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
			</ThemeProvider>
		</StageProvider>
	);
};

export default Routes;