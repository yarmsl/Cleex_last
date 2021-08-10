import React, { ReactElement } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import AvatarUI from '../UI/AvatarUI';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		padding: '24px 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	name: {
		margin: '8px 0',
		textShadow: '1px 1px 4px #000'
	},
	motto: {
		width: '60%',
		textAlign: 'center',
		textShadow: '1px 1px 4px #000'
	}
}));
const Waiter = (): ReactElement => {

	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<AvatarUI size='120'>AP</AvatarUI>
			<Typography color='textPrimary' className={classes.name} variant='h5'>Fktrctq</Typography>
			<Typography color='textPrimary' className={classes.motto}>kgfoigjg - ergfer ergfergerg fghgjuk</Typography>
		</Box>
	);
};
export default Waiter;