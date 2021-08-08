import React, { ReactElement } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '750px',
		marginTop: '24px',
		marginBottom: '24px'
	},
	imageWrapper: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	imageBox: {
		width: '50%',
		display: 'flex'
	},
	img: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'center',
	},
	title: {
		marginBottom: '16px'
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
	title: 'Кнопка вызова официанта в телефоне гостя',
	text1: 'Когда гость готов сделать заказ, он нажимает на кнопку в телефоне «Вызов официанта»',
	text2: 'Официант получает PUSH-уведомление в реальном времени и подходит к столику тогда, когда в этом есть потребность.'
};

const CallWaiterSection = (): ReactElement => {
	
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Box className={classes.imageWrapper}>
				<Box className={classes.imageBox}>
					<img className={classes.img} src={'/imgs/call_waiter.png'} />
				</Box>
			</Box>
			<Box className={classes.info}>
				<Typography className={classes.title} variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
				<Typography variant='body1' align='right'>{content.text1}</Typography>
				<Typography variant='body1' align='right'>{content.text2}</Typography>
			</Box>
		</Container>
	);
};

export default CallWaiterSection;