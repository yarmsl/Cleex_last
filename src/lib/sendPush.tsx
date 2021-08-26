import { getData } from './fetch';
import { queryString } from './queryString';

export const sendPushToWaiter = (search: string): void => {
	getData(`/send_push/topka/${queryString(search)}`)
		.then(r => console.log(r))
		.catch(e => console.error(e));
};