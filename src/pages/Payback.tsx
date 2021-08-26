import React, { ReactElement, useState, useEffect } from 'react';
import { Box, Button, Container, Checkbox, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import Waiter from '../components/Waiter';
import { Link as RouterLink } from 'react-router-dom';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import { CreditCardRounded } from '@material-ui/icons';
import { addRubbleMark, onlyDigits } from '../lib/services';
import { useStage } from '../lib/context/StageCTX';

const useStyles = makeStyles((theme) => ({
	bottom: {
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		padding: '12px 32px 0',
		flexDirection: 'column',
		backgroundColor: theme.palette.background.default,
		boxShadow: theme.shadows[11],
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	input: {
		fontSize: '36px',
		lineHeight: '50px',
		fontWeight: 400,
		textAlign: 'center'
	},
	info: {
		margin: '8px 0',
	},
	payBtn: {
		width: '100%',
		borderRadius: 4,
		margin: '24px 0',
		'& span': {
			textTransform: 'none',
			fontSize: '18px',
			fontWeight: 400
		}
	},
	confirm: {
		width: '100%',
		margin: '4px 0',
		display: 'flex',
		alignItems: 'center',
	}
}));
const currentSum = 1200;
const minSum = 200;
const todaytSum = 50;
const comission = 20;

const Payback = (): ReactElement => {
	const [sum, setSum] = useState(`${currentSum} ₽`);
	const [error, setError] = useState(' ');
	const [policyCheck, setPolicyCheck] = useState(true);
	const classes = useStyles();
	const {user, setHeaderMobileTitle } = useStage();
	
	useEffect(() => {
		setHeaderMobileTitle('Вывод средств');
	}, []);

	const inputSum = (str: string) => {
		let a: string = str;
		a = onlyDigits(a);
		let b: number = +a;
		if (b < minSum) {
			b = minSum;
			setError(`Минимальная сумма ${minSum} ₽`);
		} else if (b > currentSum) {
			b = currentSum;
			setError(`Вам доступна сумма ${currentSum} ₽`);
		} else {
			setError(' ');
		}
		a = String(b);
		a = addRubbleMark(a);
		return a;
	};

	return (
		<>
			<Waiter source={user.photo} name={user.name} slogan={`${currentSum} ₽ +${todaytSum} ₽ за сегодня`}/>
			<Container maxWidth='sm' className={classes.bottom}>
				<TextField
					value={sum}
					onChange={e => setSum(e.target.value)}
					onBlur={() => setSum(inputSum(sum))}
					onFocus={() => setSum(onlyDigits(sum))}
					inputProps={{ className: classes.input, maxLength: 6 }}
					fullWidth
					color='primary'
					error={error === ' ' ? false : true}
					helperText={error ? error : ' '}
				/>
				<Typography className={classes.info} variant='body2' color='textPrimary'>{`${minSum} ₽ - минимальная сумма для вывода средств`}</Typography>
				<Typography className={classes.info} variant='body2' color='textPrimary'>{`${comission} ₽ - комиссия с одного вывода средств`}</Typography>
				<Button size='small' endIcon={<CreditCardRounded />} className={classes.payBtn} variant='contained'>Вывести на карту</Button>
				<Box className={classes.confirm}>
					<Checkbox
						checked={policyCheck}
						onChange={e => setPolicyCheck(e.target.checked)}
						color='primary'
						icon={<CheckBoxOutlineBlankRoundedIcon color='secondary' />}
					/>
					<Typography variant='body2' color='textPrimary'>Я согласен с условиями
						<Link color='primary' underline='hover' variant='subtitle2' component={RouterLink} to='/'> Пользовательского соглашения </Link>
						и
						<Link color='primary' underline='hover' variant='subtitle2' component={RouterLink} to='/'> Политикой обработки персональных данных</Link>
					</Typography>
				</Box>
			</Container>
		</>
	);
};
export default Payback;