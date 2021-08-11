import React, { ReactElement, useState, useEffect } from 'react';
import { Button, Box, makeStyles, Typography, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { basicLogin } from '../lib/fetch';
import { API_KEY } from '../lib/constants';
import { LoginData, loginResponse } from '../types/types';
import { login } from '../lib/context/AuthCTX';

const useStyles = makeStyles(() => ({
	wrapper: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		'&>*': {
			margin: '8px 0'
		}
	}
}));

const Login = (): ReactElement => {
	const [user, setUser] = useState({} as loginResponse);
	const { handleSubmit, control } = useForm();
	const classes = useStyles();
	const onSubmit = (data: LoginData) => {
		basicLogin(`${API_KEY}/login`, data)
			.then(r => {
				setUser(r as loginResponse);
				console.log(r);
			})
			.catch(e => console.error(e));
	};

	useEffect(() => {
		console.log(user);
		if (user.message !== 'wrong password' && user.message !== 'login does not exist') {
			login({accessToken: user.access_token, refreshToken: user.refresh_token }); // Проблема с исчезающим сторажем здесь!!!
		}
	}, [user]);

	return (
		<Box component='form' onSubmit={handleSubmit(onSubmit)} className={classes.wrapper}>
			<Typography variant='h6' color='textPrimary'>Войдите в систему</Typography>
			<Controller
				name="login"
				control={control}
				defaultValue=''
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField label='Логин'
						fullWidth
						color='primary'
						size='small'
						type="text"
						autoComplete="on"
						value={value}
						onChange={onChange}
						error={!!error} helperText={error ? error.message : ' '} />
				)}
				rules={{ required: 'Введите логин'}}
			/>
			<Controller
				name="password"
				control={control}
				defaultValue=''
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField label='Пароль'
						fullWidth
						size='small'
						type="password"
						autoComplete="on"
						value={value}
						onChange={onChange}
						error={!!error} helperText={error ? error.message : ' '} />
				)}
				rules={{ required: 'Введите пароль'}}
			/>
			<Button type='submit' variant='contained' color='primary'>Войти</Button>
		</Box>
	);
};

export default Login;