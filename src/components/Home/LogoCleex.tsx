import React, { ReactElement } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Logo from '../../UI/icons/Logo';

const useStyles = makeStyles(() => ({
	logoButton: {
		height: '100%',
		width: '200px',
		padding: '2px 0',
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
		padding: '20px 0'
	},
	logo: {
		height: 'calc(100% - 12px)'
	},
	logoSub: {
		height: '14px'
	}
}));

const LogoCleex = (): ReactElement => {

	const classes = useStyles();

	return (
		<Button className={classes.logoButton}>
			<Box className={classes.logoBox}>
				<Logo className={classes.logo} />
				<Typography className={classes.logoSub} variant='subtitle1' component='h1'>Современное решение для бизнеса</Typography>
			</Box>
		</Button>
	);
};

export default LogoCleex;