import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { MetaLT } from '../types/types';

const HelmetLayout = ({children, title}: MetaLT): ReactElement => {
	return (
		<>
			<Helmet>
				<title>React TS {title}</title>
			</Helmet>
			{children}
		</>
	);
};

export default HelmetLayout;
