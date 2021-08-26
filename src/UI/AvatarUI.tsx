import React, { ReactElement } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import { avatarUI } from '../types/types';
import { initials } from '../lib/services';

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.primary.main
	},
}));

const AvatarUI = ({children, size='40', source, onClick}: avatarUI ): ReactElement => {
	const classes = useStyles();
	const styles = {
		avatar: {
			width: size ? `${size}px` : '',
			height: size ? `${size}px` : '',
			fontSize: size ? `${+size/2.25}px` : ''
		}
	};
	return (
		<Avatar onClick={onClick} style={styles.avatar} src={source} className={classes.root}>
			{initials(children)}
		</Avatar>
	);
};
export default AvatarUI;