import React, { ReactElement } from 'react';
import AdaptPlatformSection from '../components/Home/AdaptPlatformSection';
import CallWaiterSection from '../components/Home/CallWaiterSection';
import NewLevelOfService from '../components/Home/NewLevelOfService';
import OnlineMenuSection from '../components/Home/OnlineMenuSection';
import RemoteTipsSection from '../components/Home/RemoteTipsSection';
import Tabs from '../components/Home/Tabs';
import HelmetLayout from '../layouts/HelmetLayout';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import QrNfcInteraction from '../components/Home/QrNfcInteraction';

export default function Home(): ReactElement {
	return (
		<HelmetLayout title=''>
			<Parallax pages={6}>

				<ParallaxLayer  offset={0} speed={1} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer  offset={0} speed={0.5}>
					<Tabs />
					<NewLevelOfService />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.01}>
					<RemoteTipsSection />
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer offset={2} speed={0.5}>
					<OnlineMenuSection />
				</ParallaxLayer>

				<ParallaxLayer offset={3} speed={0.01}>
					<CallWaiterSection />
				</ParallaxLayer>

				<ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#F5F2ED', }} />
				<ParallaxLayer offset={4} speed={0.5}>
					<AdaptPlatformSection />
				</ParallaxLayer>

				<ParallaxLayer offset={5} speed={0.01}>
					<QrNfcInteraction/>
				</ParallaxLayer>

			</Parallax>			
		</HelmetLayout>
	);
}