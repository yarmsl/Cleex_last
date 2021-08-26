import {onlyDigits} from './services';
export const queryString = (str: string): string => {
	return onlyDigits(str);
};