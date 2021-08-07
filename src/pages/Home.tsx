import React, { ReactElement } from 'react';
import AdaptPlatformSection from '../components/Home/AdaptPlatformSection';
import CallWaiterSection from '../components/Home/CallWaiterSection';
import NewLevelOfService from '../components/Home/NewLevelOfService';
import OnlineMenuSection from '../components/Home/OnlineMenuSection';
import RemoteTipsSection from '../components/Home/RemoteTipsSection';
import Tabs from '../components/Home/Tabs';
import HelmetLayout from '../layouts/HelmetLayout';

export default function Home(): ReactElement {
	return (
		<HelmetLayout title='Главная'>
			<Tabs />
			<NewLevelOfService />
			<RemoteTipsSection />
			<OnlineMenuSection />
			<CallWaiterSection />
			<AdaptPlatformSection />
		</HelmetLayout>
	);
}