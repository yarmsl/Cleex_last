import React, { ReactElement, useRef } from 'react';
import AdaptPlatformSection from '../components/Home/AdaptPlatformSection';
import CallWaiterSection from '../components/Home/CallWaiterSection';
import NewLevelOfService from '../components/Home/NewLevelOfService';
import OnlineMenuSection from '../components/Home/OnlineMenuSection';
import RemoteTipsSection from '../components/Home/RemoteTipsSection';
import Tabs from '../components/Home/Tabs';
import HelmetLayout from '../layouts/HelmetLayout';
import { IParallax, Parallax, ParallaxLayer, } from '@react-spring/parallax';
import QrNfcInteraction from '../components/Home/QrNfcInteraction';
import BecomePartnerForm from '../components/BecomePartnerForm';
import { makeStyles } from '@material-ui/core';
import Footer from '../components/Footer';

const useStyles = makeStyles(() => ({
	center: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 11
	},
	bottom: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
		zIndex: 10
	},
}));

function Home(): ReactElement {
	
	const classes = useStyles();
	const paral = useRef({} as IParallax);

	const scrollToPage = (page: number): void => paral.current.scrollTo(page);

	return (
		<HelmetLayout title=''>

			<Parallax pages={7.49} ref={paral}>

				<ParallaxLayer offset={0} speed={1.5} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer offset={0} speed={0.5}>
					<Tabs scrollTo = {scrollToPage} />
					<NewLevelOfService />
				</ParallaxLayer>

				<ParallaxLayer className={classes.center} offset={1} speed={0.01}>
					<RemoteTipsSection />
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer className={classes.center} offset={2} speed={0.5}>
					<OnlineMenuSection />
				</ParallaxLayer>

				<ParallaxLayer className={classes.center} offset={3} speed={0.01}>
					<CallWaiterSection />
				</ParallaxLayer>

				<ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer className={classes.center} offset={4} speed={0.5}>
					<AdaptPlatformSection />
				</ParallaxLayer>

				<ParallaxLayer className={classes.center} offset={5} speed={0.01}>
					<QrNfcInteraction />
				</ParallaxLayer>

				<ParallaxLayer offset={6} speed={1} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer className={classes.center} offset={6} speed={0.5}>
					<BecomePartnerForm/>
				</ParallaxLayer>

				<ParallaxLayer className={classes.bottom} offset={6.5} speed={0.01}>
					<Footer />
				</ParallaxLayer>

			</Parallax>

		</HelmetLayout>
	);
}

export default Home;