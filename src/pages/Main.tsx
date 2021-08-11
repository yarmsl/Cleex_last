import React, { ReactElement, useEffect } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TopkaLogo from '../components/TopkaLogo';
import { useStage } from '../lib/context/StageCTX';

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

const Main = (): ReactElement => {
	const classes = useStyles();
	const router = useHistory();
	const { setHeaderMobileTitle } = useStage();
	
	useEffect(() => {
		setHeaderMobileTitle('Topka Reborn');
	}, []);

	return (
		<>
			<Box className={classes.top}>
				<TopkaLogo />
			</Box>
			<Box className={classes.bottom}>
				<Button variant='contained' size='large' onClick={() => router.push('/topka/menu')}>Меню</Button>
				<Button variant='contained' size='large' onClick={() => router.push('/topka/leavetips')}>Оставить чаевые</Button>
				<Button variant='contained' size='large'>Вызвать официанта</Button>
			</Box>
		</>
	);
};

export default Main;