import React, { ReactElement, useEffect } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TopkaLogo from '../components/TopkaLogo';
import { useStage } from '../lib/context/StageCTX';
import { logout } from '../lib/context/AuthCTX';
import { User } from '../types/types';

const useStyles = makeStyles(() => ({
	top: {
		width: '100%',
		height: '40%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottom: {
		width: '100%',
		minHeight: '60%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingBottom: '60px'
	},
}));

const Account = (): ReactElement => {
	const classes = useStyles();
	const router = useHistory();
	const { setHeaderMobileTitle, setUser, removeId } = useStage();
	
	useEffect(() => {
		setHeaderMobileTitle('Личный кабинет');
	}, []);

	return (
		<>
			<Box className={classes.top}>
				<TopkaLogo />
			</Box>
			<Box className={classes.bottom}>
				<Button variant='contained' size='large' onClick={() => router.push('/topka/account/tables')}>Выбрать столик на сегодня</Button>
				<Button variant='contained' size='large' onClick={() => router.push('/topka/account/settings')}>Настройка профиля</Button>
				<Button variant='contained' size='large' onClick={() => router.push('/topka/account/payback')}>Вывод средств</Button>
				<Button variant='contained' size='large' onClick={() => { setUser({} as User); logout(); removeId();}} >Выход</Button>
			</Box>
		</>
	);
};

export default Account;