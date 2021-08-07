import React, { ReactElement } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import CallWaiter from './tabs/CallWaiter';
import OnlineMenu from './tabs/OnlineMenu';
import RemoteTips from './tabs/RemoteTips';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#F5F2ED',
		height: '600px',
		marginTop: '88px'
	},
	wrapper: {
		width: '100%',
		height: '100%',
		paddingTop: '24px',
		paddingBottom: '24px',
		boxSizing: 'border-box',
		flexDirection: 'row',
		alignItems: 'center',
	}
}));
const Tabs = (): ReactElement => {

	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Container className={classes.wrapper}>
				{/* <CallWaiter/>
				<OnlineMenu/> */}
				<RemoteTips/>
			</Container>
		</Box>
	);
};

export default Tabs;