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
			height: '800px',
			paddingTop: '20px',
			flexDirection: 'column-reverse'
		},
		[theme.breakpoints.down(400)]: {
			height: 'auto',
		}
	},
	imageWrapper: {
		width: '65%',
		height: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down(1024)]: {
			justifyContent: 'center',
			width: '100%',
		},
		[theme.breakpoints.down(500)]: {
			height: '60%',
			maxHeight: '468px'
		},
		[theme.breakpoints.down(400)]: {
			height: '450px',
		},
		[theme.breakpoints.down(370)]: {
			height: '400px',
		},
		[theme.breakpoints.down(350)]: {
			height: '350px',
		}
	},
	imageBox: {
		width: '30%',
		height: '100%',
		display: 'flex',
		[theme.breakpoints.down(1024)]: {
			width: '25%',
			margin: '0 20px',
		},
		[theme.breakpoints.down(550)]: {
			height: '80%',
			width: '30%',
			margin: '0 10px',
		},
		[theme.breakpoints.down(500)]: {
			height: '100%',
			margin: '0 4px',
		},
		// [theme.breakpoints.down(375)]: {
		// 	height: '80%',
		// }
	},
	img1: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-end',
	},
	img2: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'center',
	},
	img3: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-start',
	},
	title: {
		position: 'absolute',
		width: '600px',
		fontWeight: 'bold',
		marginBottom: '16px',
		[theme.breakpoints.down(1200)]: {
			fontSize: '25px'
		},
		[theme.breakpoints.down(1024)]: {
			position: 'static',
			width: 'auto',
			fontSize: '32px',
		},
		[theme.breakpoints.down(768)]: {
			fontSize: '24px',
			lineHeight: '1.3'
		},
		[theme.breakpoints.down(500)]: {
			textAlign: 'center',
			marginBottom: '0',
			fontSize: '24px'
		},
		[theme.breakpoints.down(376)]: {
			fontSize: '20px'
		},
	},
	info: {
		width: '35%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		// justifyContent: 'center',
		[theme.breakpoints.down(1024)]: {
			justifyContent: 'center',
			marginTop: '10px',
			width: '100%',
			height: '50%'
		},
		[theme.breakpoints.down(500)]: {
			marginTop: '30px',
			height: '30%',
			justifyContent: 'flex-start'
		},
		[theme.breakpoints.down(400)]: {
			marginTop: '30px',
		}
	},
	text: {
		marginBottom: '30px',
		[theme.breakpoints.down(1200)]: {
			fontSize: '20px',
		},
		[theme.breakpoints.down(500)]: {
			lineHeight: '1.3',
			marginBottom: '0px'
		},
		[theme.breakpoints.down(470)]: {
			fontSize: '16px',
		},
		[theme.breakpoints.down(375)]: {
			fontSize: '14px',
		},
		[theme.breakpoints.down(350)]: {
			lineHeight: '1.2'
		}
	},
	textBlock: {
		marginTop: '60px',
		[theme.breakpoints.down(1024)]: {
			marginTop: '0px',
			maxWidth: '350px',
			width: '100%'
		},
		[theme.breakpoints.down(500)]: {
			'& > p': {
				marginBottom: '10px'
			}
		}
	},
	orientationRoot: {
		width: '100%',
		height: '100%',
	},
	orientationInfo: {
		width: '45%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	orientationTitle: {
		fontSize: '16px',
		marginBottom: '0',
		textAlign: 'center',
		lineHeight: '1.4'
	},
	orientationTextBlock: {
		maxWidth: '350px',
		width: '100%'
	},
	orientationText: {
		fontSize: '14px',
		lineHeight: '1.3',
		textAlign: 'left'
	},
	orientationImageWrapper: {
		width: '55%',
		height: '100%',
		display: 'flex',

	},
	orientationImageBox: {
		width: '30%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		margin: '0 8px'
	},
	orientationImg1: {
		width: '100%',
		objectFit: 'contain',
	},
	orientationImg2: {
		width: '100%',
		objectFit: 'contain',
	},
	orientationImg3: {
		width: '100%',
		objectFit: 'contain',
	}
}));

const content = {
	title: 'Адаптируем платформу',
	text1: 'Дизайн страниц в корпоративном стиле заведения.',
	text2: 'Личный профиль с фотографией для каждого сотрудника.'
};

const AdaptPlatformSection = (): ReactElement => {

	const classes = useStyles();
	const matches = useMediaQuery('(max-height: 500px)');

	if (matches) {
		return (
			<Container className={classes.orientationRoot}>
				<Box className={classes.orientationInfo}>
					<Typography className={classes.orientationTitle} variant='h4' color='textSecondary'>{content.title}</Typography>
					<Box className={classes.orientationTextBlock}>
						<Typography className={classes.orientationText} variant='body1'>{content.text1}</Typography>
						<Typography className={classes.orientationText} variant='body1'>{content.text2}</Typography>
					</Box>
				</Box>
				<Box className={classes.orientationImageWrapper}>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg1} src={'./imgs/adapt_1.png'} />
					</Box>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg2} src={'./imgs/adapt_2.png'} />
					</Box>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg3} src={'./imgs/adapt_3.png'} />
					</Box>
				</Box>
			</Container>
		);
	}

	return (
		<Container className={classes.root}>
			<Box className={classes.info}>
				<Typography className={classes.title} variant='h4' color='textSecondary'>{content.title}</Typography>
				<Box className={classes.textBlock}>
					<Typography className={classes.text} variant='body1'>{content.text1}</Typography>
					<Typography className={classes.text} variant='body1'>{content.text2}</Typography>
				</Box>
			</Box>
			<Box className={classes.imageWrapper}>
				<Box className={classes.imageBox}>
					<img className={classes.img1} src={'./imgs/adapt_1.png'} />
				</Box>
				<Box className={classes.imageBox}>
					<img className={classes.img2} src={'./imgs/adapt_2.png'} />
				</Box>
				<Box className={classes.imageBox}>
					<img className={classes.img3} src={'./imgs/adapt_3.png'} />
				</Box>
			</Box>
		</Container>
	);
};

export default AdaptPlatformSection;