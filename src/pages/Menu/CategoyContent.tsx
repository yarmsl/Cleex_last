import React, { ReactElement } from 'react';

interface IContent {
	children?: React.ReactChild | React.ReactNode;
}

const CategoyContent = ({ children }: IContent): ReactElement => {

	return (
		<div>
			{children}
		</div>
	);
};

export default CategoyContent;