import React, { ReactElement } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Child } from '../types/types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import ScrollContext from '../lib/context/ScrollCTX';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
}));

const MainLayout = ({ children }: Child): ReactElement => {

	const router = useLocation();
	const classes = useStyles();

	return (
		<>
			<ScrollContext>
				<Header />
				<Box className={classes.root} component='main'>
					{children}
				</Box>
			</ScrollContext>
			{!(router.pathname === '/') && <Footer />}
		</>
	);
};

export default MainLayout;