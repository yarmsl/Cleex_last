import React, { ReactElement, useContext, useState } from 'react';
import { Child } from '../../types/types';

interface ISCrollCtx {
	scrollCTX?: (obj: any) => void;
	scrollTo?: any;
}


const ScrollCTX = React.createContext<ISCrollCtx>({});

export const useScrollCTX = ():ISCrollCtx => {
	return useContext(ScrollCTX);
};

const ScrollContext = ({ children }: Child): ReactElement => {

	const [scroll, setScroll] = useState({});

	function mutableScroll(obj: any) {
		setScroll({ scrollTo: obj.scrollTo });
	}


	return (
		<ScrollCTX.Provider value={{ scrollTo: scroll, scrollCTX: mutableScroll }}>
			{children}
		</ScrollCTX.Provider>
	);
};

export default ScrollContext;