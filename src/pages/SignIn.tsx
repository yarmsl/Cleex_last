import React, { ReactElement } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Login from '../components/Login';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%',
		marginTop: '48px',
		padding: '0px 12px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	container: {
		backgroundColor: theme.palette.background.default,
		boxShadow: theme.shadows[11],
		borderRadius: theme.shape.borderRadius,
		boxSizing: 'border-box',
		paddingTop: '8px',
		paddingBottom: '8px',
	}
}));

const SignIn = (): ReactElement => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Container maxWidth='xs' className={classes.container}>
				<Login/>
			</Container>
		</Box>
	);
};

export default SignIn;