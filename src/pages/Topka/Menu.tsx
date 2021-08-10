import React, { ReactElement, useEffect } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useCompany } from '../../lib/context/CompanyCTX';
import TopkaLogo from '../../components/TopkaLogo';

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
	const {switchCompany} = useCompany();
	useEffect(() => {
		switchCompany('topka');
	},[]);
	const router = useHistory();
	console.log(router);

	return (
		<>
			<Box className={classes.top}>
				<TopkaLogo/>
			</Box>
			<Box className={classes.bottom}>
				<Button variant='contained' size='large'>Кухня</Button>
				<Button variant='contained' size='large'>Бар</Button>
				<Button variant='contained' size='large'>Коктейльная карта</Button>
			</Box>
		</>
	);
};

export default Menu;