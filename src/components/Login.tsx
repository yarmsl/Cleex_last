import React, { ReactElement } from 'react';
import { Button, Box, makeStyles, Typography, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { basicLogin } from '../lib/fetch';
import { STATIC_URL } from '../lib/constants';
import { LoginData, loginResponse } from '../types/types';
import { login } from '../lib/context/AuthCTX';
import { useStage } from '../lib/context/StageCTX';

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
	const { setUser, setId } = useStage();
	const { handleSubmit, control, setError } = useForm();
	const classes = useStyles();
	const onSubmit = (data: LoginData) => {
		basicLogin('login', data)
			.then(r => {
				if (r !== undefined) {
					const a = r as loginResponse;
					switch (a.message) {
					case 'success':
						return (
							console.log(a),
							setUser(a.user),
							setUser(p => {
								return {
									...p,
									photo: `${STATIC_URL}/${p.photo}`
								};
							}),
							setId(String(a.user.id)),
							login({ accessToken: a.access_token, refreshToken: a.refresh_token })
						);
					case 'wrong password':
						return (
							setError('password', { type: 'manual', message: 'Неправильный пароль' })
						);
					case 'login does not exist':
						return (
							setError('login', { type: 'manual', message: 'Пользователь не найден' })
						);
					default:
						return (
							setError('password', { type: 'manual', message: 'Неизвестная ошибка'})
						);
					}
				} else {
					setError('password', {type: 'manual', message: 'Сервер не отвечает'});
				}

			});
	};

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
				rules={{ required: 'Введите логин' }}
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
				rules={{ required: 'Введите пароль' }}
			/>
			<Button type='submit' variant='contained' color='primary'>Войти</Button>
		</Box>
	);
};

export default Login;