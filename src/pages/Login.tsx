import { Button, Box, Container, makeStyles, Typography, TextField } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useForm, Controller } from 'react-hook-form';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
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

	const { handleSubmit, control } = useForm();
	const classes = useStyles();
	const onSubmit = (data: string[]) => {
		console.log(data);
	};
	return (
		<Box className={classes.root}>
			<Container maxWidth='xs'>
				<Box component='form' onSubmit={handleSubmit(onSubmit)} className={classes.wrapper}>
					<Typography >Войдите в систему</Typography>
					<Controller
						name="login"
						control={control}
						defaultValue=''
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<TextField label='Логин'
								fullWidth
								variant='outlined'
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
								variant='outlined'
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
			</Container>
		</Box>
	);
};

export default Login;