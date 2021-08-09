import {ChangeEvent} from 'react';

export const phoneFormat = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => {
	let number: string = e.target.value;
	number = number.replace(/[^0-9]/g, '');
	return number;
};