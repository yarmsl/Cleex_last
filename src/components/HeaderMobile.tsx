import { AppBar, Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AvatarUI from '../UI/AvatarUI';
import { useStage } from '../lib/context/StageCTX';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '60px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 12px 0 4px',
		backgroundColor: theme.palette.background.default
	},
	left: {
		width: '48px'
	},
	right: {
		width: '52px'
	}
}));

const HeaderMobile = (): ReactElement => {
	const router = useHistory();
	const classes = useStyles();
	const {headerMobileTitle} = useStage();
	
	return (
		<AppBar className={classes.root} position='sticky'>
			<Box className={classes.left}><IconButton color='inherit' onClick={() => router.goBack()} ><ArrowBackIcon color='inherit'/></IconButton></Box>
			<Box><Typography variant='h6' >{headerMobileTitle}</Typography></Box>
			<Box className={classes.right}><IconButton><AvatarUI>AP</AvatarUI></IconButton></Box>
		</AppBar>
	);
};

export default HeaderMobile;