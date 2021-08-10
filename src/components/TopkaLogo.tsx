import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		objectPosition: 'center'
	},
}));

const TopkaLogo = ():ReactElement => {

	const classes = useStyles();

	return (
		<>
			<img className={classes.root} src='./imgs/topka/topka_logo.webp'/>
		</>
	);
};

export default TopkaLogo;
