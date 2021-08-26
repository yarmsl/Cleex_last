import { User, userResponse } from '../types/types';

export const initials = (str?: string): string | undefined => {
	if (!str) {
		return undefined;
	}
	if (str.indexOf(' ') !== -1) {
		str = `${str.substr(0, 1)}${str.substr(str.indexOf(' ') + 1, 1)}`;
	} else {
		str = str.substr(0, 1);
	}
	return str.toUpperCase();
};

export const addRubbleMark = (str: string): string => {
	if (str.indexOf('₽') !== -1) {
		return str;
	} else if (!str) {
		return '';
	} else {
		return `${str} ₽`;
	}
};

export const onlyDigits = (str: string): string => {
	if (str) {
		return str.replace(/\D+/g, '');
	} else {
		return '';
	}
};

export const rounded = (num: number): number => {
	return +num.toFixed(2);
};

export const typeChange = (filename: string, type: string): string => {
	return filename.replace(/\.[^.]+$/, `.${type}`);
};
export const isEmpty = (obj: Record<string, unknown> | File | User | userResponse): boolean => {
	for (const key in obj) {
		return false;
	}
	return true;
};