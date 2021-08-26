import React, { ReactElement, useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import CallWaiter from './tabs/CallWaiter';
import OnlineMenu from './tabs/OnlineMenu';
import RemoteTips from './tabs/RemoteTips';
import { useSpring, animated } from '@react-spring/web';
import { TabsProps } from '../../types/types';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		marginTop: '72px',
		[theme.breakpoints.down(768)]: {
			marginTop: '69px'
		},
		[theme.breakpoints.down(500)]: {
			marginTop: '45px'
		}
	},
	wrapper: {
		position: 'relative',
		width: '100%',
		height: '100%',
		paddingTop: '24px',
		paddingBottom: '24px',
		boxSizing: 'border-box',
		flexDirection: 'row',
		alignItems: 'center',
	},
	slide: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		cursor: 'pointer',
		[theme.breakpoints.down(768)]: {
			flexDirection: window.innerHeight > 500 ? 'column' : 'row',
			paddingRight: '24px',
			alignItems: 'center'
		}
	},
}));


const Tabs = ({ scrollTo, noParallax }: TabsProps): ReactElement => {

	const classes = useStyles();
	const [slide1, s1] = useSpring(() => ({ opacity: 1, top: '15px', display: 'flex' }));
	const [slide2, s2] = useSpring(() => ({ opacity: 0, top: '15px', display: 'none', justifyContent: 'space-between' }));
	const [slide3, s3] = useSpring(() => ({
		opacity: 0, top: '15px', display: 'none',
		justifyContent: 'space-between'
	}));
	const [animateStart, setAnimateStart] = useState<boolean>(false);
	s1.start({ opacity: 0 });

	const autoplay = (delay: number) => {
		if (animateStart) return 0;
		const slideHandler = () => {
			setTimeout(() => { s2.start({ opacity: 1, top: '0px', display: 'flex' }); s1.start({ opacity: 0, top: '15px', display: 'none' }); }, delay);
			setTimeout(() => { s3.start({ opacity: 1, top: '0px', display: 'flex' }); s2.start({ opacity: 0, top: '15px', display: 'none' }); }, delay * 2);
			setTimeout(() => { s1.start({ opacity: 1, top: '0px', display: 'flex' }); s3.start({ opacity: 0, top: '15px', display: 'none' }); }, delay * 3);
		};
		slideHandler();
		setInterval(slideHandler, delay * 3);
		setAnimateStart(!animateStart);
	};

	const scroll = (id: string): void => {
		document.querySelector(`#${id}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
	};

	autoplay(5000);

	return (
		<Box className={classes.root}>
			<Container className={classes.wrapper}>
				<animated.div onClick={() => noParallax ? scroll('call') : scrollTo(window.innerWidth >= 768 ? 3.3 : 4)} style={slide1} className={classes.slide}><CallWaiter /></animated.div>
				<animated.div onClick={() => noParallax ? scroll('menu') : scrollTo(window.innerWidth >= 768 ? 2.25 : 3)} style={slide2} className={classes.slide}><OnlineMenu /></animated.div>
				<animated.div onClick={() => noParallax ? scroll('tips') : scrollTo(window.innerWidth >= 768 ? 1.15 : 1.8)} style={slide3} className={classes.slide}><RemoteTips /></animated.div>
			</Container>
		</Box>
	);
};

export default Tabs;