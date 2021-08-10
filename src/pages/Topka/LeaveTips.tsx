import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Box, Button, Checkbox, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import Waiter from '../../components/Waiter';
import { Link as RouterLink } from 'react-router-dom';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import { CreditCardRounded } from '@material-ui/icons';
import { addRubbleMark, onlyDigits, rounded } from '../../lib/services';

const useStyles = makeStyles((theme) => ({
	bottom: {
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		padding: '12px 32px 0',
		backgroundColor: theme.palette.background.default,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	input: {
		fontSize: '36px',
		lineHeight: '50px',
		fontWeight: 400,
		textAlign: 'center'
	},
	teaBtns: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between'
	},
	teaBtn: {
		margin: '4px',
		'& span': {
			fontSize: '16px',
			fontWeight: 400
		},
		'&:first-child': {
			marginLeft: 0,
		},
		'&:last-child': {
			marginRight: 0,
		}
	},
	payBtn: {
		width: '100%',
		borderRadius: 4,
		margin: '18px 0',
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
		alignItems: 'flex-start',
	}
}));
const maxSum = 9999;
const minSum = 50;
const comission = 0.055;
const tea = ['100', '200', '300', '500'];



const LeaveTips = (): ReactElement => {
	const [sum, setSum] = useState('100 ₽');
	const [error, setError] = useState(' ');
	const [comCheck, setComCheck] = useState(true);
	const [policyCheck, setPolicyCheck] = useState(true);
	const classes = useStyles();

	const inputSum = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let a: string = e.target.value;
		a = onlyDigits(a);
		let b: number = +a;
		if (b < minSum) {
			b = minSum;
			setError(`Минимальная сумма чаевых ${minSum} ₽`);
		} else if (b > maxSum) {
			b = maxSum;
			setError(`Максимум можно оставить только ${maxSum} ₽`);
		}
		a = String(b);
		setSum(a);
	};

	return (
		<>
			<Waiter />
			<Box className={classes.bottom}>
				<TextField
					value={sum}
					onChange={e => inputSum(e)}
					onBlur={() => setSum(addRubbleMark(sum))}
					onFocus={() => setSum(onlyDigits(sum))}
					inputProps={{ className: classes.input }}
					fullWidth
					color='primary'
					error={!!error}
					helperText={error ? error : ' '}
				/>
				<Box className={classes.teaBtns}>
					{tea.map((item, i) => {
						return (
							<Button
								onClick={() => setSum(addRubbleMark(item))}
								fullWidth
								className={classes.teaBtn}
								key={i}
								color={(item === onlyDigits(sum)) ? 'primary' : 'default'}
								variant='contained'
								size='medium'
							>
								{item}
							</Button>
						);
					})}
				</Box>
				<Button size='small' endIcon={<CreditCardRounded />} className={classes.payBtn} variant='contained'>Оплатить картой</Button>
				<Box className={classes.confirm}>
					<Checkbox
						checked={comCheck}
						onChange={e => setComCheck(e.target.checked)}
						color='primary'
						icon={<CheckBoxOutlineBlankRoundedIcon color='secondary' fontSize='medium' />}
					/>
					<Typography variant='body2' color='textPrimary'>{`Я хочу взять на себя комиссию сотрудника (${rounded(+onlyDigits(sum) * comission)}₽)`}</Typography>
				</Box>
				<Box className={classes.confirm}>
					<Checkbox
						checked={policyCheck}
						onChange={e => setPolicyCheck(e.target.checked)}
						color='primary'
						icon={<CheckBoxOutlineBlankRoundedIcon color='secondary' fontSize='medium' />}
					/>
					<Typography variant='body2' color='textPrimary'>Я согласен с условиями
						<Link color='primary' underline='hover' variant='subtitle2' component={RouterLink} to='/'> Пользовательского соглашения </Link>
						и
						<Link color='primary' underline='hover' variant='subtitle2' component={RouterLink} to='/'> Политикой обработки персональных данных</Link>
					</Typography>
				</Box>
			</Box>
		</>
	);
};
export default LeaveTips;