import { LoginData, SettingsProps } from '../types/types';
import { API_KEY, STATIC_URL } from './constants';

const refreshToken = async (): Promise<string> => {
	let newToken = undefined;
	let token = undefined;
	token = (localStorage.getItem('REACT_TOKEN_AUTH_KEY'));
	if (token !== null) {
		token = JSON.parse(token);
		newToken = await fetch(`${API_KEY}/refresh`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${token.refreshToken}`
			}
		})
			.then(r => r.json())
			.catch(e => console.error(e));
	} else {
		token = 'fatal';
		console.warn('ls is empty');
	}
	console.log(token);
	console.log(newToken);
	if (newToken !== undefined) {
		return `Bearer ${newToken.access_token}`;
	} else {
		return 'Reraeb';
	}
};

export const PostData = async <T,>(url: string, obj: string | string[] | number[] | Record<string, unknown> | Record<number, unknown>): Promise<T> => {
	const token = await refreshToken().then(r => r);
	const data = await fetch(`${API_KEY}/${url}`, {
		method: 'POST',
		headers: {
			'Authorization': token,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(obj)
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const PostFormData = async <T,>(url: string, formData: FormData): Promise<T> => {
	const token = await refreshToken().then(r => r);
	const data = await fetch(`${STATIC_URL}/${url}`, {
		method: 'POST',
		headers: {
			'Authorization': token
		},
		body: formData
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const PutData = async <T,>(url: string, obj: Record<string, unknown> | SettingsProps): Promise<T> => {
	const token = await refreshToken().then(r => r);
	const data = await fetch(`${API_KEY}/${url}`, {
		method: 'PUT',
		headers: {
			'Authorization': token,
			'Content-type': 'application/json'
		},
		body: JSON.stringify(obj)
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const getData = async <T,>(url: string): Promise<T> => {
	const token = await refreshToken().then(r => r);
	const data = await fetch(`${API_KEY}/${url}`, {
		method: 'GET',
		headers: {
			'Authorization': token,
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		}
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const DeleteData = async <T,>(url: string): Promise<T> => {
	const token = await refreshToken().then(r => r);
	const data = await fetch(`${API_KEY}/${url}`, {
		method: 'DELETE',
		headers: {
			'Authorization': token
		}
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const getAuthData = async <T,>(url: string): Promise<T> => {
	const token = await refreshToken().then(r => r);
	const data = await fetch(`${API_KEY}/${url}`, {
		headers: {
			'Authorization': token
		}
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};

export const basicLogin = async <T,>(url: string, obj: LoginData): Promise<T> => {
	const send = `Basic ${window.btoa(`${obj.login}:${obj.password}`)}`;
	const data = await fetch(`${API_KEY}/${url}`, {
		method: 'POST',
		headers: {
			'Authorization': send
		},
	})
		.then(r => r.json())
		.catch(e => console.error(e));
	return await data;
};