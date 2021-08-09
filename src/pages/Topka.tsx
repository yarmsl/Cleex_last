import { Button } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useCompany } from '../lib/context/CompanyCTX';

const Topka = (): ReactElement => {
	const {company, switchCompany} = useCompany();
	const router = useLocation();
	console.log(router.search);
	return (
		<div>
			topka
			{console.log(company)}
			<Button onClick={() => switchCompany('topka')}>CLICK</Button>
			<Button onClick={() => switchCompany('cleex')}>CLICK</Button>
		</div>
	);
};

export default Topka;