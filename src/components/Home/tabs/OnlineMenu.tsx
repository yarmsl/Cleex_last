import React, { ReactElement } from 'react';
import { Box, makeStyles, Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	imageWrapper: {
		width: '50%',
		height: '100%',
		maxHeight: '700px',
		alignSelf: 'center',
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'space-around',
		[theme.breakpoints.down(1025)]: {
			maxHeight: '600px',
		},
		[theme.breakpoints.down(1024)]: {
			// marginTop: '100px',
			height: '70%',
		},
		[theme.breakpoints.down(960)]: {
			width: '50%',
			maxHeight: '400px',
		},
		[theme.breakpoints.down(768)]: {
			width: '100%',
			maxHeight: 'auto',
			height: '50%'
		},
		[theme.breakpoints.down(478)]: {
			// marginTop: '60px',
		},
	},
	imageBox: {
		width: '40%',
		height: '100%',
		display: 'flex',
		[theme.breakpoints.down(960)]: {
			width: '35%',
		},
		[theme.breakpoints.down(768)]: {
			width: '25%',
		},
		[theme.breakpoints.down(768)]: {
			width: '30%',
		},
		[theme.breakpoints.down(500)]: {
			width: '40%',
		}
	},
	img1: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-start',
		[theme.breakpoints.down(768)]: {
			// paddingTop: '100px'
			alignSelf: 'flex-end'
		}
	},
	img2: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-end',
		[theme.breakpoints.down(768)]: {
			paddingTop: '10px',
			alignSelf: 'flex-start',
		}
	},
	infoWrapper: {
		width: '50%',
		height: '100%',
		boxSizing: 'border-box',
		maxWidth: '40%',
		padding: '5%',
		[theme.breakpoints.down(768)]: {
			marginTop: '30px',
			width: '100%',
			height: '50%',
			maxWidth: '80%'
		},
		[theme.breakpoints.down(700)]: {
			marginTop: '0',
		},

	},
	info: {
		width: '100%',
		height: '100%',
		background: 'center center url(./imgs/book.svg) no-repeat',
		backgroundSize: 'contain',
		display: 'flex',
		alignItems: 'center',
		marginRight: '10px',
		position: 'relative',
		[theme.breakpoints.down(768)]: {
			justifyContent: 'flex-start',
		},
	},
	titel: {
		// textAlign: 'center',
		position: 'absolute',
		left: '-100px',
		fontWeight: 700,
		fontSize: '64px',
		width: '500px',
		[theme.breakpoints.down(1024)]: {
			fontSize: '36px',
			width: '500px',
			left: '-50px',
		},
	},
	orientationImageWrapper: {
		width: '50%',
		height: '100%',
		display: 'flex',
		justifyContent: 'space-around',
	},
	orientationImageBox: {
		width: '35%',
		height: '100%',
		display: 'flex',
	},
	orientationImg1: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-start'
	},
	orientationImg2: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-start'
	},
	orientationInfoWrapper: {
		width: '50%',
		height: '100%',
		boxSizing: 'border-box',
	},
	orientationInfo: {
		width: '100%',
		height: '50%',
		background: 'center center url(./imgs/book.svg) no-repeat',
		backgroundSize: 'contain',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '30px'
	},
	orientationTitel: {
		fontSize: '16px'
	}
}));

const OnlineMenu = (): ReactElement => {

	const classes = useStyles();
	const matches = useMediaQuery('(max-height: 500px)');


	if (matches) {
		return (
			<>
				<Box className={classes.orientationImageWrapper}>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg1} src={'./imgs/online_menu_1.png'} />
					</Box>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg2} src={'./imgs/online_menu_2.png'} />
					</Box>
				</Box>
				<Box className={classes.orientationInfoWrapper}>
					<Box className={classes.orientationInfo}>
						<Typography className={classes.orientationTitel} variant='h2' component='h2'>Онлайн меню</Typography>
					</Box>
				</Box>
			</>
		);
	}

	return (
		<>
			<Box className={classes.imageWrapper}>
				<Box className={classes.imageBox}>
					<img className={classes.img1} src={'./imgs/online_menu_2.png'} />
				</Box>
				<Box className={classes.imageBox}>
					<img className={classes.img2} src={'./imgs/online_menu_1.png'} />
				</Box>
			</Box>
			<Box className={classes.infoWrapper}>
				<Box className={classes.info}>
					<Typography className={classes.titel} variant='h2' component='h2'>Онлайн меню</Typography>
				</Box>
			</Box>
		</>
	);
};

export default OnlineMenu;