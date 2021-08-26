import React, { ReactElement } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	imageWrapper: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down(768)]: {
			height: '50%'
		},
	},
	imageBox: {
		width: '50%',
		display: 'flex',
		[theme.breakpoints.down(768)]: {
			width: '250px'
		},
	},
	image: {
		width: '100%',
		padding: '12px',
		objectFit: 'contain',
		alignSelf: 'center',
	},
	info: {
		width: '50%',
		height: '100%',
		background: 'center center url(./imgs/hand.svg) no-repeat',
		backgroundSize: 'contain',
		maxWidth: '30%',
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		// justifyContent: 'center',
		[theme.breakpoints.down(768)]: {
			width: '100%',
			maxWidth: '70%',
			height: '50%',
		},
	},
	titel: {
		fontSize: '64px',
		position: 'absolute',
		left: '-50px',
		width: '800px',
		// textAlign: 'center',
		marginRight: '20px',
		fontWeight: 700,
		[theme.breakpoints.down(1024)]: {
			fontSize: '36px',
			width: '500px',
		},
		[theme.breakpoints.down(768)]: {
			left: '10px',
		},
		[theme.breakpoints.down(670)]: {
			left: '-20px',
		},
		[theme.breakpoints.down(350)]: {
			left: '-30px',
		}
	},
	orientationWrapper: {
		width: '50%',
		height: '85%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

	},
	orientationImageBox: {
		height: '100%',
		display: 'flex',
	},
	orientationImage: {
		width: '100%',
		height: '100%',
		padding: '12px',
		objectFit: 'contain',
		alignSelf: 'center',
	},
	orientationInfo: {
		width: '50%',
		height: '100%',
		background: 'center center url(./imgs/hand.svg) no-repeat',
		backgroundSize: 'contain',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

	},
	orientationTitel: {
		fontSize: '20px',
	}
}));

const CallWaiter = (): ReactElement => {

	const classes = useStyles();
	const matches = useMediaQuery('(max-height: 500px)');


	if (matches) {
		return (
			<>
				<Box className={classes.orientationWrapper}>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImage} src={'./imgs/call_waiter.png'} />
					</Box>
				</Box>
				<Box className={classes.orientationInfo}>
					<Typography className={classes.orientationTitel} variant='h2' component='h2'>Кнопка вызова официанта</Typography>
				</Box>
			</>
		);
	}


	return (
		<>
			<Box className={classes.imageWrapper}>
				<Box className={classes.imageBox}>
					<img className={classes.image} src={'./imgs/call_waiter.png'} />
				</Box>
			</Box>
			<Box className={classes.info}>
				<Typography className={classes.titel} variant='h2' component='h2'>Кнопка вызова официанта</Typography>
			</Box>
		</>
	);
};

export default CallWaiter;