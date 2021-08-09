import React, { ReactElement } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Logo from '../UI/icons/Logo';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	logoButton: {
		height: 'auto',
		width: '200px',
		boxSizing: 'border-box',
		borderRadius: '0',
		'&>*': {
			height: '100%',
		}
	},
	logoBox: {
		height: '100%',
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '4px 0 2px',
	},
	logo: {
		width: '80%',
		
	},
	logoSub: {
		fontSize: '9px'
	}
}));

const LogoCleex = (): ReactElement => {

	const classes = useStyles();

	return (
		<Button component={Link} to={'/'} className={classes.logoButton}>
			<Box className={classes.logoBox}>
				<Logo className={classes.logo} />
				<Typography className={classes.logoSub} variant='subtitle1' component='h1'>Современное решение для бизнеса</Typography>
			</Box>
		</Button>
	);
};

export default LogoCleex;