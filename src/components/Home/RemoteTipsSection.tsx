import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { ApplePayIcon, GPayIcon } from '../../UI/icons/BankIcons';

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
		padding: '12px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	imageBox: {
		width: '45%',
		height: '100%',
		display: 'flex',
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
		padding: '12px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	pay: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		'&>*': {
			width: '30%'
		}
	}
}));

const content = {
	title: 'Бесконтактные чаевые для работников',
	text1: 'При оплате заказа гостю предлагается поблагодарить сотрудника за сервис.Вознаграждение переводится с карты гостя на карту официанта. Транзакция проходит бесконтактно с помощью Apple Pay, Google Pay.',
	text2: 'Комиссия составляет 5% и по умолчанию взимается с суммы перевода. Гость может взять комиссию на себя, нажав кнопку «Оплатить комиссию». В этом случае комиссия будет начислена сверх платежа.'
};

const RemoteTipsSection = (): ReactElement => {
	
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Box className={classes.images}>
				<Box className={classes.imageBox}>
					<img className={classes.img1} src={'/imgs/tips_1.png'} />
				</Box>
				<Box className={classes.imageBox}>
					<img className={classes.img2} src={'/imgs/tips_2.png'} />
				</Box>
			</Box>
			<Box className={classes.info}>
				<Typography variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
				<Typography variant='body1' align='right'>{content.text1}</Typography>
				<Typography variant='body1' align='right'>{content.text2}</Typography>
				<Box className={classes.pay}>
					<GPayIcon />
					<ApplePayIcon/>
				</Box>
			</Box>
		</Container>
	);
};

export default RemoteTipsSection;