import React, { ReactElement, useEffect } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TopkaLogo from '../components/TopkaLogo';
import { useStage } from '../lib/context/StageCTX';
import { sendPushToWaiter } from '../lib/sendPush';

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
	const { setHeaderMobileTitle, getWaierIfNeed } = useStage();

	useEffect(() => {
		setHeaderMobileTitle('Topka Reborn');
		getWaierIfNeed(router.location.search);
	}, []);

	return (
		<>
			<Box className={classes.top}>
				<TopkaLogo />
			</Box>
			<Box className={classes.bottom}>
				<Button variant='contained' size='large' onClick={() => router.push('/topka/menu')}>Меню</Button>
				{router.location.search !== '' && <>
					<Button variant='contained' size='large' onClick={() => router.push(`/topka/leavetips${router.location.search}`)}>Оставить чаевые</Button>
					<Button variant='contained' size='large' onClick={() => sendPushToWaiter(router.location.search)}>Вызвать официанта</Button>
				</>}
			</Box>
		</>
	);
};

export default Main;