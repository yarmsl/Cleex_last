import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
const useStyles = makeStyles(() => ({
	root: {

	},
}));
const Settings = (): ReactElement => {
	const classes = useStyles();
	return (
		<>
		Settings
		</>
	);
};
export default Settings;