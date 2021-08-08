import React, { ReactElement } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Child } from '../types/types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
}));

const MainLayout = ({ children }: Child): ReactElement => {

	const classes = useStyles();

	return (
		<>
			<Header/>
			<Box className={classes.root} component='main'>
				{children}
			</Box>
			<Footer/>
		</>
	);
};

export default MainLayout;