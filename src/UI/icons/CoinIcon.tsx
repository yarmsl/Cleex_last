import React, { ReactElement } from 'react';
import { svgIcon } from '../../types/types';

export const CoinIcon = ({ color, className }: svgIcon): ReactElement => {
	return (
		<div className={className}>
			<svg width="100%" height="100%" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M5.22667 3.66532C2.94804 4.71699 2 5.96832 2 7C2 8.03168 2.94804 9.283 5.22667 10.3347C7.42035 11.3472 10.5212 12 14 12C17.4788 12 20.5796 11.3472 22.7733 10.3347C25.052 9.283 26 8.03168 26 7C26 5.96832 25.052 4.71699 22.7733 3.66532C20.5796 2.65285 17.4788 2 14 2C10.5212 2 7.42035 2.65285 5.22667 3.66532ZM4.38855 1.8494C6.89994 0.690297 10.2991 0 14 0C17.7009 0 21.1001 0.690297 23.6114 1.8494C26.0379 2.9693 28 4.71798 28 7C28 9.28202 26.0379 11.0307 23.6114 12.1506C21.1001 13.3097 17.7009 14 14 14C10.2991 14 6.89994 13.3097 4.38855 12.1506C1.96211 11.0307 0 9.28202 0 7C0 4.71798 1.96211 2.9693 4.38855 1.8494Z" fill={color} />
				<path fillRule="evenodd" clipRule="evenodd" d="M14 12C14.5523 12 15 12.4477 15 13V19C15 19.5523 14.5523 20 14 20C13.4477 20 13 19.5523 13 19V13C13 12.4477 13.4477 12 14 12Z" fill={color} />
				<path fillRule="evenodd" clipRule="evenodd" d="M1 6C1.55228 6 2 6.44772 2 7V13C2 13.9182 2.80501 15.1595 4.94721 16.2306C7.02525 17.2696 10.1134 18 14 18C17.8866 18 20.9748 17.2696 23.0528 16.2306C25.195 15.1595 26 13.9182 26 13V7C26 6.44772 26.4477 6 27 6C27.5523 6 28 6.44772 28 7V13C28 15.0818 26.305 16.8405 23.9472 18.0194C21.5252 19.2304 18.1134 20 14 20C9.88658 20 6.47475 19.2304 4.05279 18.0194C1.69499 16.8405 0 15.0818 0 13V7C0 6.44772 0.447715 6 1 6Z" fill={color} />
				<path fillRule="evenodd" clipRule="evenodd" d="M22 10.7634C22.5523 10.7634 23 11.2111 23 11.7634V17.7635C23 18.3158 22.5523 18.7635 22 18.7635C21.4477 18.7635 21 18.3158 21 17.7635V11.7634C21 11.2111 21.4477 10.7634 22 10.7634Z" fill={color} />
				<path fillRule="evenodd" clipRule="evenodd" d="M6 10.7634C6.55228 10.7634 7 11.2111 7 11.7634V17.7635C7 18.3158 6.55228 18.7635 6 18.7635C5.44772 18.7635 5 18.3158 5 17.7635V11.7634C5 11.2111 5.44772 10.7634 6 10.7634Z" fill={color} />
			</svg>
		</div>
	);
};