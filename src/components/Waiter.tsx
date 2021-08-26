import React, { ReactElement } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import AvatarUI from '../UI/AvatarUI';
import { WaiterComp } from '../types/types';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '240px',
		padding: '24px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	name: {
		margin: '8px 0',
		textShadow: '1px 1px 4px #000'
	},
	slogan: {
		maxWidth: '60%',
		wordBreak: 'break-all',
		textAlign: 'center',
		textShadow: '1px 1px 4px #000'
	}
}));

const Waiter = ({name, slogan, source, size='120'}: WaiterComp ): ReactElement => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<AvatarUI size={size} source={source}>{name}</AvatarUI>
			<Typography color='textPrimary' className={classes.name} variant='h5'>{name}</Typography>
			<Typography color='textPrimary' className={classes.slogan}>{slogan}</Typography>
		</Box>
	);
};
export default Waiter;