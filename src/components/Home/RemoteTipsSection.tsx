import React, { ReactElement } from 'react';
import { Box, Container, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { ApplePayIcon, GPayIcon } from '../../UI/icons/BankIcons';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '750px',
		marginTop: '24px',
		marginBottom: '24px',
		[theme.breakpoints.down(1024)]: {
			flexDirection: 'column'
		},
	},
	images: {
		width: '50%',
		height: '100%',
		padding: '12px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		[theme.breakpoints.down(1024)]: {
			justifyContent: 'center',
			width: '100%',
			marginBottom: '30px'
		},
		[theme.breakpoints.down(768)]: {
			height: 'auto',
			marginBottom: '0px',
			'& > *:nth-of-type(2)': {
				paddingTop: '150px'
			}
		},
		[theme.breakpoints.down(500)]: {
			'& > *:nth-of-type(2)': {
				paddingTop: '130px'
			}
		},
		[theme.breakpoints.down(375)]: {
			'& > *:nth-of-type(1)': {
				// paddingTop: '0px'
			}
		},
	},
	imageBox: {
		width: '45%',
		height: '100%',
		display: 'flex',
		[theme.breakpoints.down(1024)]: {
			height: '80%',
			margin: '0 30px',
			width: '25%',
		},
		[theme.breakpoints.down(768)]: {
			height: 'auto',
			// width: '40%',
			margin: '0 10px',
			width: '40%',
		},
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
	title: {
		maxWidth: '500px',
		fontWeight: 'bold',
		marginBottom: '16px',
		[theme.breakpoints.down(1024)]: {
			textAlign: 'center',
			fontSize: '30px',
			maxWidth: 'none',
		},
		[theme.breakpoints.down(900)]: {
			fontSize: '28px'
		},
		[theme.breakpoints.down(768)]: {
			fontSize: '24px',
			lineHeight: '1.25',
		},
		[theme.breakpoints.down(500)]: {
			fontSize: '24px',
			maxWidth: '350px',
			lineHeight: '1.2'
		},
		[theme.breakpoints.down(381)]: {
			fontSize: '20px',
			maxWidth: '300px',
		},
		[theme.breakpoints.down(328)]: {
			fontSize: '18px',
			maxWidth: '300px',
		}
	},
	info: {
		width: '50%',
		height: '100%',
		padding: '12px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		[theme.breakpoints.down(1024)]: {
			width: '100%',
			alignItems: 'center',
		},
		[theme.breakpoints.down(500)]: {
			alignItems: 'center'
		},
	},
	pay: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		'&>*': {
			width: '30%',
			maxWidth: '106px'
		},
		[theme.breakpoints.down(1024)]: {
			justifyContent: 'flex-end',
			'&>*': {
				width: '100px',
				marginRight: '50px'
			},
			'&>*:nth-of-type(1)': {
				marginRight: '100px'
			}
		},
		[theme.breakpoints.down(768)]: {
			display: 'none',
			// '&>*': {
			// 	width: '20%',
			// 	marginRight: '0px'
			// },
			// '&>*:nth-of-type(1)': {
			// 	marginRight: '50px'
			// }
		},
	},
	text: {
		margin: '20px 0',
		lineHeight: 1.25,
		[theme.breakpoints.down(1024)]: {
			fontSize: '20px',
			textAlign: 'left',
			margin: '0 0 20px 0',
		},
		[theme.breakpoints.down(768)]: {
			fontSize: '16px',
		},
		[theme.breakpoints.down(400)]: {
			fontSize: '14px',
			lineHeight: '1.5'
		},
		[theme.breakpoints.down(375)]: {
			lineHeight: '1.2'
		}
	},
	orientationRoot: {
		width: '100%',
		height: '100%',
		// marginTop: '24px',
		// marginBottom: '24px',
	},
	orientationImages: {
		width: '40%',
		height: '80%',
		display: 'flex',
		alignItems: 'center',
		// justifyContent: 'space-around',
	},
	orientationImageBox: {
		width: '50%%',
		height: '100%',
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
	},
	orientationInfo: {
		width: '60%',
		height: '100%',
		padding: '12px',
		display: 'flex',
		flexDirection: 'column',
	},
	orientationTitle: {
		textAlign: 'center',
		fontSize: '16px',
		lineHeight: '1.2'

	},
	orientationText: {
		margin: '0',
		fontSize: '14px',
		lineHeight: '1.5',
		textAlign: 'left'

	},
	orientationPay: {
		width: '50%',
		display: 'flex',
		justifyContent: 'space-around',
		margin: '0',
		'&>*': {
			width: '30%',
			maxWidth: '130px'
		},
	}
}));

const content = {
	title: 'Бесконтактные чаевые для работников',
	text1: 'При оплате заказа гостю предлагается поблагодарить сотрудника за сервис. Вознаграждение переводится с карты гостя на карту официанта. Транзакция проходит бесконтактно с помощью Apple Pay, Google Pay.',
	text2: 'Комиссия составляет 5% и по умолчанию взимается с суммы перевода. Гость может взять комиссию на себя, нажав кнопку «Оплатить комиссию». В этом случае комиссия будет начислена сверх платежа.'
};

const RemoteTipsSection = (): ReactElement => {

	const classes = useStyles();
	const matches = useMediaQuery('(max-height: 500px)');

	if (matches) {
		return (
			<Container className={classes.orientationRoot}>
				<Box className={classes.orientationImages}>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg1} src={'./imgs/tips_1.png'} />
					</Box>
					<Box className={classes.orientationImageBox}>
						<img className={classes.orientationImg2} src={'./imgs/tips_2.png'} />
					</Box>
				</Box>
				<Box className={classes.orientationInfo}>
					<Typography className={classes.orientationTitle} variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
					<Typography className={classes.orientationText} variant='body1' align='right'>{content.text1}</Typography>
					<Typography className={classes.orientationText} variant='body1' align='right'>{content.text2}</Typography>
					<Box className={classes.orientationPay}>
						<GPayIcon />
						<ApplePayIcon />
					</Box>
				</Box>
			</Container>
		);
	}

	return (
		<Container className={classes.root}>
			<Box className={classes.images}>
				<Box className={classes.imageBox}>
					<img className={classes.img1} src={'./imgs/tips_1.png'} />
				</Box>
				<Box className={classes.imageBox}>
					<img className={classes.img2} src={'./imgs/tips_2.png'} />
				</Box>
			</Box>
			<Box className={classes.info}>
				<Typography className={classes.title} variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
				<Typography className={classes.text} variant='body1' align='right'>{content.text1}</Typography>
				<Typography className={classes.text} variant='body1' align='right'>{content.text2}</Typography>
				<Box className={classes.pay}>
					<GPayIcon />
					<ApplePayIcon />
				</Box>
			</Box>
		</Container>
	);
};

export default RemoteTipsSection;