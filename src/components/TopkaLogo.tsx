import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core';
import { BASE_URL } from '../lib/constants';

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
			<img className={classes.root} src={`${BASE_URL}/imgs/topka/topka_logo.webp`}/>
		</>
	);
};

export default TopkaLogo;
