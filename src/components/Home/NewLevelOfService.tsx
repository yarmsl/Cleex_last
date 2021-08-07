import React, { ReactElement } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import {BarcodeIcon, AerialsIcon, FreeIcon, SmileIcon} from '../../UI/icons/ServicesIcons';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		marginTop: '24px',
		marginBottom: '24px',
		flexDirection: 'column',
		alignItems: 'center'
	},
	services: {
		display: 'flex',
		margin: '24px 0',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	benefit: {
		width: '20%',
		height: '150px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'

	},
	iconBox: {
		width: '85px',
		height: '85px',
		marginBottom: '17px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		width: '100%',
	},
}));

const NewLevelOfService = (): ReactElement => {
	
	const classes = useStyles();
	// const {palette} = useTheme();

	const benefits = [
		{icon: <BarcodeIcon color={'#aa9b71'} className={classes.icon}/>, title: 'Не требует установки'},
		{icon: <AerialsIcon color={'#aa9b71'}/>, title: 'Современная система оплаты – QR и NFC'},
		{icon: <FreeIcon color={'#aa9b71'}/>, title: 'Бесплатный сервис для заведения'},
		{icon: <SmileIcon color={'#aa9b71'}/>, title: 'Рейтинг и отзывы о персонале'}
	];

	return (
		<Container className={classes.root}>
			<Typography variant='h5' component='h3' >Новый уровень сервиса с CLEEX</Typography>
			<Box className={classes.services}>
				{benefits.map((item, i) => {
					return (
						<Box key={i} className={classes.benefit}>
							<Box className={classes.iconBox}>
								{item.icon}
							</Box>
							<Typography align='center' variant='body2'>{item.title}</Typography>
						</Box>
					);
				})}
			</Box>
		</Container>
	);
};

export default NewLevelOfService;