import React, { MutableRefObject, ReactElement, useRef, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, Container, IconButton, makeStyles, TextField } from '@material-ui/core';
import Waiter from '../components/Waiter';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AvatarEditor from 'react-avatar-editor';
import { isEmpty, typeChange } from '../lib/services';
import { PostFormData, PutData } from '../lib/fetch';
import { useStage } from '../lib/context/StageCTX';
import { SettingsProps } from '../types/types';

const useStyles = makeStyles(({ palette, shape }) => ({
	root: {
		width: '100%',
		padding: '20px',
		backgroundColor: palette.background.default,
		borderRadius: shape.borderRadius,
	},
	input: {
		marginBottom: '20px'
	},
	waiterBox: {
		position: 'relative'
	},
	addPhoto: {
		position: 'absolute',
		top: 12,
		left: 84,
		right: 0,
		margin: '0 auto',
		width: '40px',
		height: '40px',
		backgroundColor: 'rgba(25,32,33,0.35) !important',
		borderRadius: '20px',
	},
	avatarEditor: {
		borderRadius: 100,
	},
	imageEdit: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		position: 'absolute',
		top: 24,
	}
}));

const Settings = (): ReactElement => {
	const inputFile = useRef() as MutableRefObject<HTMLInputElement>;
	const editorRef = useRef() as MutableRefObject<AvatarEditor>;
	const [fileList, setFileList] = useState({} as FileList | null);
	const [photo, setPhoto] = useState({} as File);
	const [editedPhoto, setEditedPhoto] = useState({} as File);
	const [edit, setEdit] = useState(false);
	const { handleSubmit, control, watch } = useForm();
	const classes = useStyles();
	const {user, setUser, setHeaderMobileTitle } = useStage();
	
	useEffect(() => {
		setHeaderMobileTitle('Настройки профиля');
	}, []);

	const fileSelect = () => {
		setFileList(inputFile.current.files);
	};

	const onSubmit = (data: SettingsProps) => {
		console.log(data);
		const sendData = new FormData;
		sendData.append('files[]', editedPhoto);
		console.log(editedPhoto);
		if (!isEmpty(editedPhoto)) {
			PostFormData(`avatar/${user.id}`, sendData);
			setUser(p => {
				return {
					...p,
					photo: editorRef.current.getImage().toDataURL()
				};
			});
		}
		if (data.name !== '' || data.slogan !== '') {
			PutData(`staff/${user.id}`, data);
		}
		if (data.name !== '') {
			setUser(p => {
				return {
					...p,
					name: data.name
				};
			});
		} 
		if (data.slogan !== '') {
			setUser(p => {
				return {
					...p,
					slogan: data.slogan
				};
			});
		}
	};

	useEffect(() => {
		if (fileList !== null && fileList.length === 1) {
			setPhoto(fileList[0]);
		}
	}, [fileList]);

	useEffect(() => {
		if (editorRef !== null) {
			const canvas = editorRef.current.getImageScaledToCanvas();
			canvas.toBlob(blob => {
				if (blob !== null && photo.name !== undefined) {
					const img = new File([blob], typeChange(photo.name, 'webp'), {
						type: 'webp',
						lastModified: Date.now()
					});
					setEditedPhoto(img);
				}
			}, 'image/webp', 0.9);
		}
	}, [photo, edit]);

	return (
		<>
			<Box className={classes.waiterBox}>
				<Waiter name={watch('name') || user.name} slogan={watch('slogan') || user.slogan} source={user.photo} />
				<Box className={classes.imageEdit}>
					<AvatarEditor
						width={120}
						height={120}
						ref={editorRef}
						image={photo}
						onLoadSuccess={() => setEdit(p => !p)}
						onPositionChange={() => setEdit(p => !p)}
						borderRadius={100}
						border={0}
						className={classes.avatarEditor}
					/>
				</Box>
				<IconButton onClick={() => inputFile.current.click()} color='secondary' className={classes.addPhoto}><AddRoundedIcon fontSize='large' /></IconButton>
			</Box>
			<Container maxWidth='xs'>
				<Box component='form' onSubmit={handleSubmit(onSubmit)} className={classes.root}>
					<input ref={inputFile} onChange={fileSelect} style={{ display: 'none' }} type='file' />
					<Controller
						name="name"
						control={control}
						defaultValue=''
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<TextField label='Имя'
								fullWidth
								inputProps={{ maxLength: 25 }}
								color='primary'
								type="text"
								autoComplete="on"
								value={value}
								onChange={onChange}
								error={!!error} helperText={error ? error.message : ' '} />
						)}
						rules={{ maxLength: { value: 25, message: 'Максимум 25 символов' } }}
					/>
					<Controller
						name="slogan"
						control={control}
						defaultValue=''
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<TextField label='Девиз'
								fullWidth
								inputProps={{ maxLength: 50 }}
								type="text"
								autoComplete="on"
								value={value}
								onChange={onChange}
								error={!!error} helperText={error ? error.message : ' '} />
						)}
						rules={{ maxLength: { value: 50, message: 'Максимум 50 символов' } }}
					/>
					<Button
						disabled={!watch('name') && !watch('slogan') && isEmpty(editedPhoto)}
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
					>
						Сохранить
					</Button>
				</Box>
			</Container>
		</>
	);
};

export default Settings;