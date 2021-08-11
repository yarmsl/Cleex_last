import React, { ReactElement, useContext, useState, createContext } from 'react';
import { Child, StageCTX } from '../../types/types';

const stageCTX = createContext({} as StageCTX);

export const useStage = (): StageCTX => useContext(stageCTX);

const StageProvider = ({ children }: Child): ReactElement => {
	const [headerMobileTitle, setHeaderMobileTitle] = useState('');

	return (
		<stageCTX.Provider value={{headerMobileTitle, setHeaderMobileTitle}}>
			{children}
		</stageCTX.Provider>
	);
};

export default StageProvider;