import firebase from 'firebase/app';
import 'firebase/messaging';
import { PostData } from './lib/fetch';

export const initializeFirebase = (): void => {
	firebase.initializeApp({
		apiKey: 'AIzaSyAlddfViTzMD5o3BQ3IRK1bjNszabhCLgc',
		authDomain: 'cleex-web-app.firebaseapp.com',
		projectId: 'cleex-web-app',
		storageBucket: 'cleex-web-app.appspot.com',
		messagingSenderId: '548517405364',
		appId: '1:548517405364:web:a727b40dc8a8e45fb62de1',
		measurementId: 'G-XV2KR6MQCP'
	});

	// use other service worker
	// navigator.serviceWorker
	//   .register('/my-sw.js')
	//   .then((registration) => {
	//     firebase.messaging().useServiceWorker(registration);
	//   });
};

export const askForPermissioToReceiveNotifications = async (id: string): Promise<string | undefined>  => {

	try {
		const messaging = firebase.messaging();
		await messaging.requestPermission();
		const token = await messaging.getToken();
		console.log('user token: ', token);
		PostData(`/update_push/${id}`, {push_token: token, push_platform: 'web'})
			.then(r => console.log(r))
			.catch(e => console.error(e));
		return token;
	} catch (error) {
		console.error(error);
	}
};
