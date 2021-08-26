import React, { ReactElement, useState } from 'react';
import { AppBar, Button, ButtonGroup, Container, Dialog, IconButton, makeStyles, useMediaQuery } from '@material-ui/core';
import LogoCleex from './LogoCleex';
import { useAuth } from '../lib/context/AuthCTX';
import { useStage } from '../lib/context/StageCTX';
import AvatarUI from '../UI/AvatarUI';
import { useHistory } from 'react-router-dom';
import { useScrollCTX } from '../lib/context/ScrollCTX';
import BecomePartnerForm from './BecomePartnerForm';

const useStyles = makeStyles((theme) => ({
	root: {
		height: 'auto',
		backdropFilter: 'blur(6px)',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		boxShadow: theme.shadows[11],

	},
	header: {
		height: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down(500)]: {
			padding: '0 5px',
			'& > a': {
				justifyContent: 'flex-start !important'
			}
		}
	},
	auth: {
		display: 'flex'
	},
	buttonGroup: {
		[theme.breakpoints.down(500)]: {
			'& > *': {
				fontSize: '12px',
				padding: '3px 8px'
			}
		}
	},
	form: {
		padding: '10px 10px',
		position: 'relative'
	},
	close: {
		position: 'absolute',
		right: '10px',
		top: '15px',
	},
	icon: {
		position: 'relative',
		cursor: 'pointer',
		'&::after': {
			content: '""',
			backgroundColor: '#000000',
			width: '20px',
			height: '2.5px',
			position: 'absolute',
			right: '0',
			transform: 'rotate(-45deg)'
		},
		'&::before': {
			content: '""',
			backgroundColor: '#000000',
			width: '20px',
			height: '2.5px',
			position: 'absolute',
			right: '0',
			transform: 'rotate(45deg)'
		}
	}
}));

const Header = (): ReactElement => {

	const [isAuth] = useAuth();
	const { user } = useStage();
	const router = useHistory();
	const classes = useStyles();
	const history = useHistory();
	const [form, setForm] = useState(false);


	const { scrollTo } = useScrollCTX();

	const matches = useMediaQuery('(max-width: 768px)');

	function handleClick() {
		if (scrollTo?.scrollTo && history.location.pathname == '/') {
			scrollTo.scrollTo(window.innerWidth >= 768 ? 6.7 : 7.1);
			return;
		}
		setForm(!form);
	}

	return (
		<AppBar position='fixed' className={classes.root}>
			<Container className={classes.header} >
				<LogoCleex />
				{!isAuth && <ButtonGroup className={classes.buttonGroup} variant='contained' color='primary'>
					<Button onClick={handleClick} >Стать партнёром</Button>
					<Button onClick={() => router.push('/signin')}>Войти</Button>
				</ButtonGroup>}
				{isAuth && <IconButton onClick={() => router.push('/topka/account')}><AvatarUI source={user.photo} >{user.name}</AvatarUI></IconButton>}
				<Dialog open={form} fullScreen={matches} onClose={() => setForm(!form)}>
					<div className={classes.form}>
						<BecomePartnerForm />
						<div onClick={() => setForm(!form)} className={classes.close}>
							<div className={classes.icon}></div>
						</div>
					</div>
				</Dialog>
			</Container>
		</AppBar>
	);
};

export default Header;