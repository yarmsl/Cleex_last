import React, { ReactElement, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Button, ThemeProvider } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useCompany } from '../../lib/context/CompanyCTX';
import theme from '../../UI/topkaTheme';

const Topka = (): ReactElement => {

	useEffect(() => {
		switchCompany('topka');
	},[]);

	const {switchCompany} = useCompany();
	const router = useLocation();
	console.log(router.search);
	return (
		<ThemeProvider theme={theme}>
			<div>TOPKA</div>
		</ThemeProvider>
	);
};

export default Topka;