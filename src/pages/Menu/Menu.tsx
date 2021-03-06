import React, { ReactElement, useEffect } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TopkaLogo from '../../components/TopkaLogo';
import { useStage } from '../../lib/context/StageCTX';

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

const Menu = (): ReactElement => {
	const classes = useStyles();
	const router = useHistory();

	const { setHeaderMobileTitle } = useStage();

	useEffect(() => {
		setHeaderMobileTitle('Меню');
	}, []);

	return (
		<>
			<Box className={classes.top}>
				<TopkaLogo />
			</Box>
			<Box className={classes.bottom}>
				<Button onClick={() => router.push('/topka/menu/kitchen')} variant='contained' size='large'>Кухня</Button>
				<Button onClick={() => router.push('/topka/menu/bar')} variant='contained' size='large'>Бар</Button>
				<Button onClick={() => router.push('/topka/menu/cocktails')} variant='contained' size='large'>Коктейльная карта</Button>
			</Box>
		</>
	);
};

export default Menu;