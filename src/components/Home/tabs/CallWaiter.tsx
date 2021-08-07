import React, { ReactElement } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	imageBox: {
		width: '50%',
		height: '100%',
		display: 'flex'
	},
	image: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-start',
	},
	info: {
		width: '50%',
		height: '100%',
		background: 'center center url(./imgs/hand.svg) no-repeat',
		backgroundSize: 'contain',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));

const CallWaiter = (): ReactElement => {

	const classes = useStyles();

	return (
		<>
			<Box className={classes.imageBox}>
				<img className={classes.image} src={'/imgs/call_waiter.png'} />
			</Box>
			<Box className={classes.info}>
				<Typography variant='h2' component='h2'>Кнопка вызова официанта</Typography>
			</Box>
		</>
	);
};

export default CallWaiter;