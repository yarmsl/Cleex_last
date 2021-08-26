import React, { ReactElement, useEffect, useRef } from 'react';
import { Box, Container, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useSpring, animated, to } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 4) / 20;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '750px',
		marginTop: '24px',
		marginBottom: '24px',
		position: 'relative',
		[theme.breakpoints.down(500)]: {
			flexDirection: 'column'
		}
	},
	imageWrapper: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		background: 'no-repeat url(./imgs/nfc.png), no-repeat url(./imgs/qr.png)',
		backgroundPosition: 'top 18% left 0px, bottom 15% right 5px',
		backgroundSize: '40%, 40%',
		[theme.breakpoints.down(1120)]: {
			maxHeight: '700px',
			backgroundPosition: 'top 30% left 0px, bottom 30% right 5px',
		},
		[theme.breakpoints.down(769)]: {
			justifyContent: 'flex-start',
			maxHeight: '700px',
			position: 'absolute',
			bottom: '-120px',
			width: '100%',
			paddingLeft: '80px',
			marginRight: '0',
			// backgroundSize: '260px, 260px',
			// backgroundSize: '40% 40%',
			backgroundPosition: 'top 25% left 0%, bottom 100px right 185px',
		},
		[theme.breakpoints.down(700)]: {
			bottom: '-90px',
			maxHeight: '650px',
			backgroundSize: '30%, 30%',
			paddingLeft: '20px',
			backgroundPosition: 'top 25% left 0%, bottom 100px right 205px',
		},
		[theme.breakpoints.down(640)]: {
			bottom: '-80px',
			backgroundSize: '25%, 25%',
			paddingLeft: '10px',
			backgroundPosition: 'top 155px left 0%, bottom 150px right 200px',
		},
		[theme.breakpoints.down(550)]: {
			bottom: '-70px',
			left: '0',
			backgroundSize: '22%, 22%',
			paddingLeft: '50px',
			backgroundPosition: 'top 33% left 0%, bottom 180px right 47%',
		},
		[theme.breakpoints.down(500)]: {
			position: 'static',
			justifyContent: 'center',
			maxHeight: '800px',
			paddingLeft: '0px',
			width: '100%',
			backgroundSize: '50% 55%, 50% 55%',
			backgroundPosition: 'top 0 left 0%, bottom 0px right 0%',
		},
		[theme.breakpoints.down(420)]: {
			backgroundSize: '40%, 40%',
			backgroundPosition: 'top 0% left 0%, bottom 10% right 0%',
		}
	},
	imageBox: {
		minWidth: '70%',
		display: 'flex',
		justifyContent: 'center',
		cursor: 'move',
		[theme.breakpoints.down(1024)]: {
			minWidth: 'auto'
		},
		[theme.breakpoints.down(550)]: {
			justifyContent: 'flex-start'
		},
		[theme.breakpoints.down(500)]: {
			justifyContent: 'center'
		},
	},
	img: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'center',
		[theme.breakpoints.down(1120)]: {
			width: '80%',
		},
		[theme.breakpoints.down(922)]: {
			width: '80%',
		},
		[theme.breakpoints.down(700)]: {
			width: '70%',
		},
		[theme.breakpoints.down(640)]: {
			width: '60%',
		},
		[theme.breakpoints.down(500)]: {
			width: '90%',
			maxWidth: '330px'
		}
	},
	title: {
		fontWeight: 'bold',
		[theme.breakpoints.down(1120)]: {
			fontSize: '30px'
		},
		[theme.breakpoints.down(942)]: {
			fontSize: '28px',
		},
		[theme.breakpoints.down(883)]: {
			fontSize: '26px',
		},
		[theme.breakpoints.down(824)]: {
			fontSize: '24px',
		},
		[theme.breakpoints.down(769)]: {
			// textAlign: 'center',
			fontSize: '24px',
		},
		[theme.breakpoints.down(500)]: {
			lineHeight: '1.25',
			textAlign: 'center'
		},
	},
	info: {
		width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		// justifyContent: 'space-around',
		[theme.breakpoints.down(1120)]: {
			justifyContent: 'center',
		},
		[theme.breakpoints.down(1024)]: {
			// width: 'auto',
			alignItems: 'flex-end'
		},
		[theme.breakpoints.down(769)]: {
			// width: 'auto',
			width: '100%'
		}
	},
	qrText: {
		margin: '30px 0',
		lineHeight: '1.3',
		[theme.breakpoints.down(1120)]: {
			fontSize: '18px',
			margin: '10px 0'
		},
		[theme.breakpoints.down(1024)]: {
			fontSize: '16px',
		},
		[theme.breakpoints.down(769)]: {
			// textAlign: 'left',
		},
		[theme.breakpoints.down(500)]: {
			fontSize: '14px',
			textAlign: 'left'
		},
		[theme.breakpoints.down(365)]: {
			margin: '5px 0',
			lineHeight: '1.5'
		},
	},
	textBlock: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		'& >h4': {
			maxWidth: '600px'
		},
		[theme.breakpoints.down(1120)]: {
			'& >h4': {
				maxWidth: '550px'
			}
		},
		[theme.breakpoints.down(942)]: {
			'& >h4': {
				maxWidth: 'none'
			}
		},
		[theme.breakpoints.down(769)]: {
			maxWidth: '400px',
			width: '100%',
			height: '100%',
		},
		[theme.breakpoints.down(500)]: {
			marginTop: '20px',
			alignItems: 'center',
			maxWidth: 'none',
			'& >h4': {
				maxWidth: '250px'
			}
		}
	},
	orientationRoot: {
		width: '100%',
		height: '100%',
		flexDirection: 'column-reverse'
	},
	orientationImageWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
	},
	orientationImageBox: {
		display: 'flex',
		marginTop: '5px',
		width: '30%'
	},
	orientationImg: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'center',
	},
	orientationInfo: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	orientationTextBlock: {
		width: '100%',
		maxWidth: 'none'
	},
	orientationTitle: {
		fontSize: '16px',
		lineHeight: '1.3',
		textAlign: 'left'
	},
	orientationQrText: {
		margin: '5px 0',
		lineHeight: '1.2',
		fontSize: '14px',
		textAlign: 'left',
		maxWidth: 'none'
	}
}));

const content = {
	title: 'Система взаимодействия по QR-кодам и NFC-меткам',
	text1: 'Для сканирования QR-кода нужно открыть камеру мобильного телефона и навести ее на QR-код. Перейти по ссылке. Далее – выбрать официанта, которому гость перечислит чаевые.',
	text2: 'Официант получает PUSH-уведомление в реальном времени и подходит к столику тогда, когда в этом есть потребность.',
	text3: 'В момент оплаты средства моментально зачисляются на банковскую карту обслуживающего персонала.',
	text4: 'NFC-наклейки и QR-коды, с помощью которых гости заведения будут переводить чаевые, мы предоставим.'
};

const QrNfcInteraction = (): ReactElement => {

	const classes = useStyles();
	useEffect(() => {
		const preventDefault = (e: Event) => e.preventDefault();
		document.addEventListener('gesturestart', preventDefault);
		document.addEventListener('gesturechange', preventDefault);

		return () => {
			document.removeEventListener('gesturestart', preventDefault);
			document.removeEventListener('gesturechange', preventDefault);
		};
	}, []);

	const domTarget = useRef(null);
	const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
		() => ({
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1,
			zoom: 0,
			x: 0,
			y: 0,
			config: { mass: 5, tension: 350, friction: 60 }
		})
	);

	useGesture(
		{
			onMove: ({ xy: [px, py], dragging }) =>
				!dragging &&
				api({
					rotateX: calcX(py, y.get()),
					rotateY: calcY(px, x.get()),
					scale: 1.2
				}),
			onHover: ({ hovering }) =>
				!hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
		},
		{ domTarget, eventOptions: { passive: false } }
	);

	const anim = {
		transform: 'perspective(600px)',
		x,
		y,
		scale: to([scale, zoom], (s, z) => s + z),
		rotateX,
		rotateY,
		rotateZ
	};

	const matches = useMediaQuery('(max-height: 500px)');
	const matchesSmall = useMediaQuery('(max-height: 374px');


	if (matches) {
		return (
			<Container className={classes.orientationRoot}>
				{matchesSmall ? null :
					<Box className={classes.orientationImageWrapper}>
						<animated.div style={anim} ref={domTarget} className={classes.orientationImageBox}>
							<img className={classes.orientationImg} src={'./imgs/vCard.png'} />
						</animated.div>
					</Box>}
				<Box className={classes.orientationInfo}>
					<Box className={classes.orientationTextBlock}>
						<Typography className={classes.orientationTitle} variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
						<Typography className={classes.orientationQrText} variant='body1' align='right'>{content.text1}</Typography>
						<Typography className={classes.orientationQrText} variant='body1' align='right'>{content.text2}</Typography>
						<Typography className={classes.orientationQrText} variant='body1' align='right'>{content.text3}</Typography>
						<Typography className={classes.orientationQrText} variant='body1' align='right'>{content.text4}</Typography>
					</Box>
				</Box>
			</Container>
		);
	}

	return (
		<Container className={classes.root}>
			<Box className={classes.imageWrapper}>
				<animated.div style={anim} ref={domTarget} className={classes.imageBox}>
					<img className={classes.img} src={'./imgs/vCard.png'} />
				</animated.div>
			</Box>
			<Box className={classes.info}>
				<Box className={classes.textBlock}>
					<Typography className={classes.title} variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
					<Typography className={classes.qrText} variant='body1' align='right'>{content.text1}</Typography>
					<Typography className={classes.qrText} variant='body1' align='right'>{content.text2}</Typography>
					<Typography className={classes.qrText} variant='body1' align='right'>{content.text3}</Typography>
					<Typography className={classes.qrText} variant='body1' align='right'>{content.text4}</Typography>
				</Box>
			</Box>
		</Container>
	);
};

export default QrNfcInteraction;