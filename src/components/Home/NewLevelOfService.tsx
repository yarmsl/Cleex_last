import React, { ReactElement } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { BarcodeIcon, AerialsIcon, FreeIcon, SmileIcon } from '../../UI/icons/ServicesIcons';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: '24px',
		marginBottom: '24px',
		flexDirection: 'column',
		alignItems: 'center',
		[theme.breakpoints.down(768)]: {
			marginTop: '0'
		}
	},
	titel: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: '24px',
		lineHeight: 1.25,
		[theme.breakpoints.down(500)]: {
			fontSize: '20px',
			maxWidth: '260px'
		},
	},
	services: {
		display: 'flex',
		margin: '24px 0',
		alignItems: 'center',
		justifyContent: 'space-around',
		// [theme.breakpoints.down(768)]: {
		// 	// display: 'none'
		// 	flexWrap: 'wrap'
		// },
		'& > *:last-child': {
			marginRight: '0px'
		},
		[theme.breakpoints.down(768)]: {
			flexDirection: 'column'
		}
	},
	benefit: {
		width: '20%',
		height: '150px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		[theme.breakpoints.down(1031)]: {
			width: '50%',
		},
		[theme.breakpoints.down(768)]: {
			width: '100%',
			marginRight: '10px',
		},
		[theme.breakpoints.down(500)]: {
			marginBottom: '10px',
			height: '140px',
		},
		[theme.breakpoints.down(375)]: {
			height: '120px',
		},
		[theme.breakpoints.down(350)]: {
			marginBottom: '10px'
		}

	},
	iconBox: {
		width: '85px',
		height: '85px',
		marginBottom: '17px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down(701)]: {
			width: '100px',
			height: '100px',
		},
		[theme.breakpoints.down(375)]: {
			width: '80px',
			height: '80px',
			// marginBottom: '10px',
		}
	},
	icon: {
		width: '100%',
	},
	desc: {
		[theme.breakpoints.down(1031)]: {
			fontSize: '16px',
		},
		[theme.breakpoints.down(801)]: {
			fontSize: '14px',
		},
		[theme.breakpoints.down(768)]: {
			fontSize: '14px',
			textAlign: 'center',
			maxWidth: '200px'
		},
		[theme.breakpoints.down(400)]: {
			maxWidth: '230px'
		},
		[theme.breakpoints.down(370)]: {
			fontSize: '14px',
		}
	}
}));

const NewLevelOfService = (): ReactElement => {

	const classes = useStyles();
	// const {palette} = useTheme();

	const benefits = [
		{ icon: <BarcodeIcon color={'#aa9b71'} className={classes.icon} />, title: 'Не требует установки' },
		{ icon: <AerialsIcon color={'#aa9b71'} />, title: 'Современная система оплаты – QR и NFC' },
		{ icon: <FreeIcon color={'#aa9b71'} />, title: 'Бесплатный сервис для заведения' },
		{ icon: <SmileIcon color={'#aa9b71'} />, title: 'Рейтинг и отзывы о персонале' }
	];

	return (
		<Container className={classes.root}>
			<Typography className={classes.titel} variant='h5' component='h3' >Новый уровень сервиса с CLEEX</Typography>
			<Box className={classes.services}>
				{benefits.map((item, i) => {
					return (
						<Box key={i} className={classes.benefit}>
							<Box className={classes.iconBox}>
								{item.icon}
							</Box>
							<Typography className={classes.desc} align='center' variant='body2'>{item.title}</Typography>
						</Box>
					);
				})}
			</Box>
		</Container>
	);
};

export default NewLevelOfService;