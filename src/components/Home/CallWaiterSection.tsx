import React, { ReactElement } from 'react';
import { Box, Container, makeStyles, Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '750px',
		marginTop: '24px',
		marginBottom: '24px',
		[theme.breakpoints.down(1024)]: {
			flexDirection: 'column'
		},
		[theme.breakpoints.down(500)]: {
			height: 'auto',
		}
	},
	imageWrapper: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down(1024)]: {
			width: '100%'
		}
	},
	imageBox: {
		width: '50%',
		display: 'flex',
		[theme.breakpoints.down(1024)]: {
			maxWidth: '200px',
			width: '100%',
			marginBottom: '10px'
		},
		[theme.breakpoints.down(768)]: {
			maxWidth: 'none',
			width: '40%',
		},
		[theme.breakpoints.down(350)]: {
			width: '100px',
		}
	},
	img: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'center',
	},
	title: {
		fontWeight: 'bold',
		maxWidth: '600px',
		marginBottom: '64px',
		[theme.breakpoints.down(1024)]: {
			alignSelf: 'center',
			maxWidth: 'none',
			fontSize: '28px',
			marginBottom: '16px',
		},
		[theme.breakpoints.down(789)]: {
			fontSize: '26px',
		},
		[theme.breakpoints.down(768)]: {
			textAlign: 'center',
			lineHeight: '1.3',
			fontSize: '20px',
			marginTop: '48px',
			marginBottom: '0'
		},
		[theme.breakpoints.down(500)]: {
			// fontSize: '18px',
			maxWidth: '280px'
		},
		[theme.breakpoints.down(400)]: {
			// fontSize: '14px',
			margin: '5px 0'
		},
	},
	info: {
		width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end',
		[theme.breakpoints.down(1024)]: {
			alignItems: 'flex-start',
			width: '100%'
		},
		[theme.breakpoints.down(500)]: {
			alignItems: 'center',
		}
	},
	text: {
		lineHeight: '1.25',
		marginBottom: '50px',
		maxWidth: '500px',
		[theme.breakpoints.down(1024)]: {
			fontSize: '20px',
			maxWidth: 'none',
			lineHeight: '1.25',
			margin: '10px 0',
			textAlign: 'left'
		},
		[theme.breakpoints.down(768)]: {
			fontSize: '16px',
			textAlign: 'left'
		},
		[theme.breakpoints.down(400)]: {
			fontSize: '14px',
			lineHeight: '1.5',
			margin: '5px 0'
		},
	},
	orientationRoot: {
		width: '100%',
		height: '100%',
	},
	orientatioImageWrapper: {
		width: '40%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	orientatioImageBox: {
		width: '50%',
		height: '100%',
		display: 'flex',
	},
	orientatioImg: {
		width: '80%',
		objectFit: 'contain',
		alignSelf: 'center',
	},
	orientatioInfo: {
		width: '60%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	orientatioTitle: {
		fontSize: '16px',
		lineHeight: '1.4',
		margin: '0',
		textAlign: 'left'
	},
	orientatioText: {
		fontSize: '14px',
		lineHeight: '1.3',
		margin: '0',
		textAlign: 'left'
	},
}));

const content = {
	title: 'Кнопка вызова официанта в телефоне гостя',
	text1: 'Когда гость готов сделать заказ, он нажимает на кнопку в телефоне «Вызов официанта»',
	text2: 'Официант получает PUSH-уведомление в реальном времени и подходит к столику тогда, когда в этом есть потребность.'
};

const CallWaiterSection = (): ReactElement => {

	const classes = useStyles();
	const matches = useMediaQuery('(max-height: 500px)');

	if (matches) {
		return (
			<Container className={classes.orientationRoot}>
				<Box className={classes.orientatioImageWrapper}>
					<Box className={classes.orientatioImageBox}>
						<img className={classes.orientatioImg} src={'./imgs/call_waiter.png'} />
					</Box>
				</Box>
				<Box className={classes.orientatioInfo}>
					<Typography className={classes.orientatioTitle} variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
					<Typography className={classes.orientatioText} variant='body1' align='right'>{content.text1}</Typography>
					<Typography className={classes.orientatioText} variant='body1' align='right'>{content.text2}</Typography>
				</Box>
			</Container>
		);
	}

	return (
		<Container className={classes.root}>
			<Box className={classes.imageWrapper}>
				<Box className={classes.imageBox}>
					<img className={classes.img} src={'./imgs/call_waiter.png'} />
				</Box>
			</Box>
			<Box className={classes.info}>
				<Typography className={classes.title} variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
				<Typography className={classes.text} variant='body1' align='right'>{content.text1}</Typography>
				<Typography className={classes.text} variant='body1' align='right'>{content.text2}</Typography>
			</Box>
		</Container>
	);
};

export default CallWaiterSection;