import React, { ReactElement } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '750px',
		marginTop: '24px',
		marginBottom: '24px'
	},
	images: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	imageBox: {
		width: '45%',
		height: '100%',
	},
	img1: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-start',
	},
	img2: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-end',
	},
	info: {
		width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
}));

const content = {
	title: 'Онлайн меню',
	text: 'Бесконтактное меню бара и кухни в телефоне гостя экономит время официантов.'
};

const OnlineMenuSection = (): ReactElement => {

	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Box className={classes.info}>
				<Typography variant='h4' color='textSecondary'>{content.title}</Typography>
				<Typography variant='body1'>{content.text}</Typography>
			</Box>
			<Box className={classes.images}>
				<Box className={classes.imageBox}>
					<img className={classes.img1} src={'/imgs/online_menu_1.png'} />
				</Box>
				<Box className={classes.imageBox}>
					<img className={classes.img2} src={'/imgs/online_menu_2.png'} />
				</Box>
			</Box>

		</Container>
	);
};

export default OnlineMenuSection;