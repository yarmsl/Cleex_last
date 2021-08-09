import React, { ReactElement, useEffect, useRef } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { useSpring, animated, to } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 4) / 20;

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
		justifyContent: 'center',
		position: 'relative',
		background: 'no-repeat url(./imgs/nfc.png), no-repeat url(./imgs/qr.png)',
		backgroundPosition: 'top 25% left 20px, bottom 25% right 20px',
		backgroundSize: '35%, 32%',
	},
	imageBox: {
		minWidth: '70%',
		display: 'flex',
		cursor: 'move',
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
		justifyContent: 'space-around'
	},
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

	return (
		<Container className={classes.root}>
			<Box className={classes.imageWrapper}>
				<animated.div style={anim} ref={domTarget} className={classes.imageBox}>
					<img className={classes.img} src={'./imgs/vCard.png'} />
				</animated.div>
			</Box>
			<Box className={classes.info}>
				<Typography className={classes.title} variant='h4' align='right' color='textSecondary'>{content.title}</Typography>
				<Typography variant='body1' align='right'>{content.text1}</Typography>
				<Typography variant='body1' align='right'>{content.text2}</Typography>
				<Typography variant='body1' align='right'>{content.text3}</Typography>
				<Typography variant='body1' align='right'>{content.text4}</Typography>
			</Box>
		</Container>
	);
};

export default QrNfcInteraction;