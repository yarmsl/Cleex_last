import React, { useState, ReactElement } from 'react';
import { AppBar, Avatar, Button, ButtonGroup, Container, makeStyles } from '@material-ui/core';
import LogoCleex from './LogoCleex';
import { useAuth } from '../../lib/context/AuthCTX';

const useStyles = makeStyles((themeCleex) => ({
	root: {
		height: 'auto',
		backdropFilter: 'blur(6px)',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		boxShadow: themeCleex.shadows[11],
	},
	header: {
		height: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'

	},
	auth: {
		display: 'flex'
	}
	// button: {
	// 	background: 'linear-gradient(180deg, #FFECB9 0%, #AA9B71 100%)'
	// }
}));

const Header = (): ReactElement => {
	console.log(useAuth());
	const [isAuth, setIsAuth] = useState(false);

	const classes = useStyles();

	return (
		<AppBar position='fixed' className={classes.root}>
			<Container className={classes.header} >
				<LogoCleex />
				{!isAuth && <ButtonGroup variant='contained' color='primary'>
					<Button>Стать партнёром</Button>
					<Button onClick={() => setIsAuth(p => !p)}>Войти</Button>
				</ButtonGroup>}
				{isAuth && <Avatar onClick={() => setIsAuth(p => !p)} >АР</Avatar>}
			</Container>
		</AppBar>
	);
};

export default Header;