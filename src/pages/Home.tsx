import React, { ReactElement, useEffect, useRef } from 'react';
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
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Footer from '../components/Footer';
import { useScrollCTX } from '../lib/context/ScrollCTX';

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
	mainBlock: {
		'& > *:first-child': {
			height: 'auto'
		}
	},
	main: {
		overflow: 'hidden',
		'& > *:nth-of-type(1)': {
			paddingTop: '40px',
			paddingBottom: '10px',
		},
		'& > *:nth-of-type(4)': {
			paddingBottom: '200px',
			marginBottom: '24px',
		},
		'& > *:nth-of-type(5)': {
			marginBottom: '126px',
		},
		'& > *:nth-of-type(6)': {
			paddingBottom: '10px',
			marginBottom: '150px'
		},
		'& > *:nth-of-type(7)': {
			marginBottom: '158px',
		},
		'& > *:nth-of-type(8)': {
			padding: '50px 0',
		}
	},
	mainBackground: {
		backgroundColor: '#F5F2ED'
	}
}));

function Home(): ReactElement {

	const classes = useStyles();
	const paral = useRef({} as IParallax);

	const scrollToPage = (page: number): void => paral.current.scrollTo(page);

	const { scrollCTX } = useScrollCTX();

	useEffect(() => {
		if (scrollCTX) scrollCTX(paral.current);
	}, []);

	const matches = useMediaQuery('(max-width: 767px)');

	const test = window.innerWidth >= 768 ? 8.0 : 8.4;

	if (!matches) {
		return (
			<HelmetLayout title=''>

				<Parallax pages={test} ref={paral}>

					<ParallaxLayer offset={0} speed={1.5} style={{ backgroundColor: '#F5F2ED', }} />
					<ParallaxLayer offset={0} speed={0.5}>
						<Tabs scrollTo={scrollToPage} />
						<ParallaxLayer offset={0.7} speed={0.5} style={{ backgroundColor: '#F5F2ED', zIndex: -1 }} />
						<NewLevelOfService />
					</ParallaxLayer>

					<ParallaxLayer className={classes.center} offset={1.15} speed={0.01}>
						<RemoteTipsSection />
					</ParallaxLayer>

					<ParallaxLayer offset={2.5} speed={1} style={{ backgroundColor: '#F5F2ED', }} />
					<ParallaxLayer className={classes.center} offset={2.5} speed={1}>
						<OnlineMenuSection />
					</ParallaxLayer>

					<ParallaxLayer className={classes.center} offset={3.3} speed={0.01}>
						<CallWaiterSection />
					</ParallaxLayer>

					<ParallaxLayer offset={4.5} speed={0.7} style={{ backgroundColor: '#F5F2ED', }} />
					<ParallaxLayer className={classes.center} offset={4.5} speed={0.5}>
						<AdaptPlatformSection />
					</ParallaxLayer>

					<ParallaxLayer className={classes.center} offset={5.5} speed={0.01}>
						<QrNfcInteraction />
					</ParallaxLayer>

					<ParallaxLayer offset={6.9} speed={0.2} style={{ backgroundColor: '#F5F2ED', }} />
					<ParallaxLayer id='form' className={classes.center} offset={6.9} speed={0.4}>
						<BecomePartnerForm />
					</ParallaxLayer>

					<ParallaxLayer className={classes.bottom} offset={7} speed={0.01}>
						<Footer />
					</ParallaxLayer>

				</Parallax>

			</HelmetLayout>
		);
	}


	return (
		<HelmetLayout title=''>
			<Parallax pages={test} ref={paral}>

				<ParallaxLayer offset={0} speed={1.5} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer offset={0} speed={0.5}>
					<Tabs scrollTo={scrollToPage} />
					<ParallaxLayer offset={0.7} speed={0.2} style={{ backgroundColor: '#F5F2ED', zIndex: -1 }} />
					<NewLevelOfService />
					<ParallaxLayer offset={1.1} speed={0.2} style={{ backgroundColor: '#F5F2ED', zIndex: -1 }} />
				</ParallaxLayer>

				<ParallaxLayer className={classes.center} offset={1.8} speed={0.01}>
					<RemoteTipsSection />
				</ParallaxLayer>

				<ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer className={classes.center} offset={3} speed={1}>
					<OnlineMenuSection />
				</ParallaxLayer>

				<ParallaxLayer className={classes.center} offset={4} speed={0.01}>
					<CallWaiterSection />
				</ParallaxLayer>

				<ParallaxLayer offset={5} speed={0.7} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer className={classes.center} offset={5} speed={0.5}>
					<AdaptPlatformSection />
				</ParallaxLayer>

				<ParallaxLayer className={classes.center} offset={6} speed={0.01}>
					<QrNfcInteraction />
				</ParallaxLayer>

				<ParallaxLayer offset={7.1} speed={0.4} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer className={classes.center} offset={7.1} speed={0.4}>
					<BecomePartnerForm />
				</ParallaxLayer>

				<ParallaxLayer className={classes.bottom} offset={7.42} speed={0.01}>
					<Footer />
				</ParallaxLayer>

			</Parallax>
		</HelmetLayout>
	);
}

export default Home;