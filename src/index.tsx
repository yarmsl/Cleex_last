import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import { initializeFirebase } from './push-notification';

ReactDOM.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
	document.getElementById('cleex')
);
registerServiceWorker();
initializeFirebase();
reportWebVitals();