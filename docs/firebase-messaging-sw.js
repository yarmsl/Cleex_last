importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
	apiKey: 'AIzaSyAlddfViTzMD5o3BQ3IRK1bjNszabhCLgc',
	authDomain: 'cleex-web-app.firebaseapp.com',
	projectId: 'cleex-web-app',
	storageBucket: 'cleex-web-app.appspot.com',
	messagingSenderId: '548517405364',
	appId: '1:548517405364:web:a727b40dc8a8e45fb62de1',
	measurementId: 'G-XV2KR6MQCP'
});

const messaging = firebase.messaging();