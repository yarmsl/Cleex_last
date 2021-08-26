import React, { ReactElement } from 'react';
import { Box, Container, makeStyles, Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '750px',
		marginTop: '24px',
		marginBottom: '24px',
		[theme.breakpoints.down(768)]: {
			flexDirection: 'column-reverse',
			height: 'auto',
		}
	},
	images: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		[theme.breakpoints.down(1024)]: {
			flexGrow: 1,
			justifyContent: 'center',
		},
		[theme.breakpoints.down(900)]: {
			height: '75%',
		},
		[theme.breakpoints.down(768)]: {
			flexGrow: 0,
			marginBottom: '50px',
			width: '100%',
			height: 'auto',
			'& > *:nth-of-type(1)': {
				paddingTop: '100px'
			}
		},
		[theme.breakpoints.down(500)]: {
			marginBottom: '0px',
		}
	},
	imageBox: {
		width: '45%',
		height: '100%',
		display: 'flex',
		[theme.breakpoints.down(1024)]: {
			width: '40%',
			margin: '0 20px'
		},
		[theme.breakpoints.down(768)]: {
			width: '35%',
			height: 'auto',
		},
		[theme.breakpoints.down(550)]: {
			// height: '80%'
			width: '40%',
			margin: '0 10px'
		},
		[theme.breakpoints.down(500)]: {
			height: '350px'
		}

	},
	img1: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-end',
	},
	img2: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-start',
	},
	title: {
		fontWeight: 'bold',
		marginBottom: '64px',
		[theme.breakpoints.down(1024)]: {
			fontSize: '28px',
			marginBottom: '16px',
		},
		[theme.breakpoints.down(913)]: {
			fontSize: '26px',
		},
		[theme.breakpoints.down(768)]: {
			textAlign: 'center',
			fontSize: '24px',
			marginBottom: '0px',
		}
	},
	info: {
		width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down(1024)]: {
			// justifyContent: 'center',
			width: '250px',
			marginRight: '10px'
		},
		[theme.breakpoints.down(900)]: {
			height: '75%',
		},
		[theme.breakpoints.down(768)]: {
			width: '100%',
			height: 'auto',
			marginTop: '20px'
		}
	},
	text: {
		width: '500px',
		[theme.breakpoints.down(1024)]: {
			fontSize: '18px',
			maxWidth: '450px',
			// width: '100%'
		},
		[theme.breakpoints.down(913)]: {
			fontSize: '16px',
		},
		[theme.breakpoints.down(768)]: {
			maxWidth: 'none',
			width: '100%',
			lineHeight: '1.25'
		}
	},
	orientationRoot: {
		width: '100%',
		height: '750px',
	},
	orientationInfo: {
		width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	orientationTitle: {
		textAlign: 'center',
		fontSize: '16px',
		lineHeight: '1.3'
	},
	orientationText: {
		fontSize: '14px',
		lineHeight: '1.3'
	},
	orientationImages: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	orientationImageBox: {
		width: '45%',
		height: '80%',
		display: 'flex',
	},
	orientationImg1: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'center',

	},
	orientationImg2: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'center',

	}

}));

const content = {
	title: 'Онлайн меню',
	text: 'Бесконтактное меню бара и кухни в телефоне гостя экономит время официантов.'
};

const OnlineMenuSection = (): ReactElement => {

	const classes = useStyles();
	const matches = useMediaQuery('(max-height: 500px)');


	if (matches) {
		return (
			<Container className={classes.orientationRoot}>
				<Box className={classes.orientationInfo}>
					<Typography className={classes.orientationTitle} variant='h4' color='textSecondary'>{content.title}</Typography>
					<Typography className={classes.orientationText} variant='body1'>{content.text}</Typography>
				</Box>
				<Box className={classes.orientationImages}>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg1} src={'./imgs/online_menu_1.png'} />
					</Box>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg2} src={'./imgs/online_menu_2.png'} />
					</Box>
				</Box>
			</Container>
		);
	}

	return (
		<Container className={classes.root}>
			<Box className={classes.info}>
				<Typography className={classes.title} variant='h4' color='textSecondary'>{content.title}</Typography>
				<Typography className={classes.text} variant='body1'>{content.text}</Typography>
			</Box>
			<Box className={classes.images}>
				<Box className={classes.imageBox}>
					<img className={classes.img1} src={'./imgs/online_menu_1.png'} />
				</Box>
				<Box className={classes.imageBox}>
					<img className={classes.img2} src={'./imgs/online_menu_2.png'} />
				</Box>
			</Box>

		</Container>
	);
};

export default OnlineMenuSection;