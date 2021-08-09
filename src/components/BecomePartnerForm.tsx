import React, { ReactElement, useState } from 'react';
import { Box, Button, Container, makeStyles, TextField, Typography, Link } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { useForm, Controller } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { phoneFormat } from '../lib/phoneFormat';
import emailjs from 'emailjs-com';

const useStyles = makeStyles(({ palette }) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	subtitle: {
		margin: '8px 0 28px'
	},
	policy: {
		margin: '12px 0'
	},
	message: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	iconSuccess: {
		fontSize: '75px',
		color: palette.text.secondary
	},
	iconError: {
		fontSize: '75px',
		color: palette.error.main
	}
}));

type FormNames = 'name' | 'phone' | 'company'

const BecomePartnerForm = (): ReactElement => {

	const classes = useStyles();
	const { handleSubmit, control } = useForm();
	const [sended, setSended] = useState(false);
	const [error, setError] = useState(false);
	const onSubmit = (data: Record<FormNames, string>) => {
		emailjs.send('gmail', 'template_sh9ipba', data, 'user_gA4mJT01dIZlfSXzraUHT')
			.then(() => setSended(true))
			.catch(() => setError(true));
	};

	return (
		<Container maxWidth='sm' className={classes.root}>
			{!sended && !error && <Box component='form' onSubmit={handleSubmit(onSubmit)} className={classes.form}>
				<Typography variant='h5'>Стать партнёром</Typography>
				<Typography className={classes.subtitle} variant='body2' color='textSecondary'>Подключите своё заведение к сервису CLEEX! оставьте свои контакты и мы свяжемся с Вами</Typography>
				<Controller
					name="name"
					control={control}
					defaultValue=''
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField label='Ваше имя'
							fullWidth
							type="text"
							autoComplete="on"
							value={value}
							onChange={onChange}
							error={!!error} helperText={error ? error.message : ' '} />
					)}
					rules={{ required: 'Введите имя' }}
				/>
				<Controller
					name="phone"
					control={control}
					defaultValue=''
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField label='Телефон'
							fullWidth
							type="tel"
							autoComplete="on"
							value={value}
							onChange={e => onChange(phoneFormat(e))}
							error={!!error} helperText={error ? error.message : ' '} />
					)}
					rules={{ required: 'Введите номер телефона' }}
				/>
				<Controller
					name="company"
					control={control}
					defaultValue=''
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField label='Название заведения'
							fullWidth
							type="text"
							autoComplete="on"
							value={value}
							onChange={onChange}
							error={!!error} helperText={error ? error.message : ' '} />
					)}
					rules={{ required: 'Введите название заведения' }}
				/>
				<Box className={classes.policy} >
					<Typography display='inline' variant='subtitle2'>Нажимая на кнопку ниже я соглашаюсь с </Typography>
					<Link color='textSecondary' underline='hover' variant='subtitle2' component={RouterLink} to='/'>Политикой конфиденциальности</Link>
				</Box>
				<Button type='submit' variant='contained' color='primary' >Отправить заявку</Button>
			</Box>}
			{sended && <Box className={classes.message}>
				<CheckIcon className={classes.iconSuccess} />
				<Typography>Мы скоро с Вами свяжемся</Typography>
			</Box>}
			{error && <Box className={classes.message}>
				<ClearIcon className={classes.iconError} />
				<Typography>Что-то пошло ужасно не так. Попробуйте отправить форму ещё раз</Typography>
			</Box>}
		</Container>
	);
};

export default BecomePartnerForm;