import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
}));

const NotFound = (): ReactElement => {

	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Typography variant='h1'>404</Typography>
			<Button component={Link} to={'/'} variant='contained'>на главную</Button>
		</Container>
	);
};

export default NotFound;