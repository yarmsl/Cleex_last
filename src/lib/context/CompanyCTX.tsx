import React, { ReactElement, useContext, useReducer, createContext } from 'react';
import { Child, Companies, CompanyAction, CompanyCtx } from '../../types/types';

const CompanyCTX = createContext({} as CompanyCtx );

export const useCompany = (): CompanyCtx => useContext(CompanyCTX);

const CLEEX = 'cleex',
	TOPKA = 'topka';

const reducer = (company: Companies, action: CompanyAction) => {
	switch (action.type) {
	case CLEEX:
		return CLEEX;
	case TOPKA:
		return TOPKA;
	default:
		return company;
	}
};

const CompanyProvider = ({ children }: Child): ReactElement => {

	const [company, dispatch] = useReducer(reducer, CLEEX);
	const switchCompany = (str: Companies) => dispatch({type: str});

	return (
		<CompanyCTX.Provider value={{company, switchCompany}}>
			{children}
		</CompanyCTX.Provider>
	);
};

export default CompanyProvider;