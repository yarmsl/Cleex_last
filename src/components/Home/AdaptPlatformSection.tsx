import React,{ ReactElement } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '750px',
		marginTop: '24px',
		marginBottom: '24px'
	},
	imageWrapper: {
		width: '65%',
		height: '100%',
		display: 'flex',
		justifyContent: 'space-around'
	},
	imageBox: {
		width: '30%',
		height: '100%',
		display: 'flex',
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
		marginBottom: '16px'
	},
	info: {
		width: '35%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
}));

const content = {
	title: 'Адаптируем платформу',
	text1: 'Дизайн страниц в корпоративном стиле заведения.',
	text2: 'Личный профиль с фотографией для каждого сотрудника.'
};

const AdaptPlatformSection = (): ReactElement => {

	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Box className={classes.info}>
				<Typography className={classes.title} variant='h4' color='textSecondary'>{content.title}</Typography>
				<Typography variant='body1'>{content.text1}</Typography>
				<Typography variant='body1'>{content.text2}</Typography>
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