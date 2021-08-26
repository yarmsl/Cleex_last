import React, { ReactElement } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Policy from '../components/Policy';
import { policiesTypes } from '../types/types';

const useStyles = makeStyles(() => ({
	root: {

	},
}));
 
const Policies = (): ReactElement => {
	const router = useLocation();
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Policy policy={router.pathname as policiesTypes}/>
		</Container>
	);
};

export default Policies;