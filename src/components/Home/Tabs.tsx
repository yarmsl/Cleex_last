import React, { ReactElement } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import CallWaiter from './tabs/CallWaiter';
import OnlineMenu from './tabs/OnlineMenu';
import RemoteTips from './tabs/RemoteTips';
import { useSpring, animated } from '@react-spring/web';
import { TabsProps } from '../../types/types';

const useStyles = makeStyles(() => ({
	root: {
		height: '600px',
		marginTop: '72px'
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
	},
}));
const Tabs = ({scrollTo}: TabsProps): ReactElement => {

	const classes = useStyles();
	const [slide1, s1] = useSpring(() => ({ opacity: 1, top: '0px', display: 'flex' }));
	const [slide2, s2] = useSpring(() => ({ opacity: 0, top: '15px', display: 'none' }));
	const [slide3, s3] = useSpring(() => ({ opacity: 0, top: '15px', display: 'none' }));
	s1.start({ opacity: 0 });

	const autoplay = (delay: number) => {
		const slideHandler = () => {
			setTimeout(() => {s2.start({opacity: 1, top: '0px', display: 'flex'}); s1.start({opacity: 0, top: '15px', display: 'none'});}, delay);
			setTimeout(() => {s3.start({opacity: 1, top: '0px', display: 'flex'}); s2.start({opacity: 0, top: '15px', display: 'none'});}, delay * 2);
			setTimeout(() => {s1.start({opacity: 1, top: '0px', display: 'flex'}); s3.start({opacity: 0, top: '15px', display: 'none'});}, delay * 3);
		};
		slideHandler();
		setInterval(slideHandler, delay * 3);
	};

	autoplay(5000);
	
	return (
		<Box className={classes.root}>
			<Container className={classes.wrapper}>
				<animated.div onClick={() => scrollTo(3)} style={slide1} className={classes.slide}><CallWaiter/></animated.div>
				<animated.div onClick={() => scrollTo(2)} style={slide2} className={classes.slide}><OnlineMenu/></animated.div>
				<animated.div onClick={() => scrollTo(1)} style={slide3} className={classes.slide}><RemoteTips/></animated.div>
			</Container>
		</Box>
	);
};

export default Tabs;