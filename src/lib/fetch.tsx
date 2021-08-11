import { LoginData } from '../types/types';


export const getDataByPost = async <T, > (url: string, obj: string | string[] | number[] | Record<string, unknown> | Record<number, unknown> ): Promise<T> => {
	const data = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(obj)
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const getData = async <T, > (url: string): Promise<T> => {
	const data = await fetch(url)
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const basicLogin = async <T, > (url: string, obj: LoginData ): Promise<T> => {
	const send = `Basic ${window.btoa(`${obj.login}:${obj.password}`)}`;
	const data = await fetch(url, {
		method: 'POST',
		headers: {
			'Authorization': send
		},
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};