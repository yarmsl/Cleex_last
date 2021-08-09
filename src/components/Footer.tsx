import React, { ReactElement } from 'react';
import { Box, Container, IconButton, Link, makeStyles, Typography } from '@material-ui/core';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import { Link as RouterLink } from 'react-router-dom';
import { EMailIcon, ViberIcon, WhatsUpIcon, VkIcon, FBIcon, InstagramIcon } from '../UI/icons/SocialsIcons';
import Logo from '../UI/icons/Logo';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '450px',
		paddingTop: '24px',
		background: 'linear-gradient(#192021, #181b1c)',
		boxShadow: theme.shadows[11],
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	top: {
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	info: {
		width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	},
	logo: {

	},
	icons: {
		display: 'flex',
		flexDirection: 'column'
	},
	socialIcons: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end'
	},
	socialIcon: {
		width: '64px'
	},
	banks: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		'&>*': {
			width: '120px',
		},
		'& img': {
			width: '100%',
			objectFit: 'contain'
		}
	},
	contacts: {
		width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between'
	},
	linkIcon: {
		display: 'flex',
		alignItems: 'center',
		'&>*:first-child': {
			marginRight: '6px',
		}
	},
	copyright: {
		marginBottom: '12px'
	}
}));

const contacts = {
	address1: '454021, Россия, г. Челябинск,',
	address2: 'ул. Молодогвардейцев 60в, офис 505',
	email: 'guru-grupp.mail.ru',
	phone1: '8 (919) 213-23-95',
	phone2: '8 (351) 223-23-95'
};

const reqs = {
	name: 'ООО Гуру Групп',
	inn: 'ИНН 7447294868',
	ogrn: 'ОГРН 1207400017505'
};

const Footer = (): ReactElement => {

	const classes = useStyles();

	return (
		<Box className={classes.root} component='footer'>
			<Container className={classes.wrapper}>
				<Box className={classes.top}>
					<Box className={classes.contacts}>
						<Typography color='primary' variant='h5'>Реквизиты</Typography>
						<Typography color='secondary' variant='body2'>{reqs.name}</Typography>
						<Typography color='secondary' variant='body2'>{reqs.inn}</Typography>
						<Typography color='secondary' variant='body2'>{reqs.ogrn}</Typography>
						<Typography color='primary' variant='h5'>Контакты</Typography>
						<Link className={classes.linkIcon} href={`tel:${contacts.phone1}`}><PhoneEnabledRoundedIcon color='primary' />{contacts.phone1}</Link>
						<Link className={classes.linkIcon} href={`tel:${contacts.phone2}`}><PhoneEnabledRoundedIcon color='primary' />{contacts.phone2}</Link>
						<Link className={classes.linkIcon} href={`mailto:${contacts.email}`}><EmailRoundedIcon color='primary' />{contacts.email}</Link>
						<Typography align='right' color='secondary' variant='body2'>{contacts.address1}</Typography>
						<Typography align='right' color='secondary' variant='body2'>{contacts.address2}</Typography>
					</Box>
					<Box className={classes.info}>
						<Box className={classes.logo}>
							<Logo color='#fff' />
							<Typography variant='body2' color='secondary'>Современное решение для бизнеса</Typography>
						</Box>
						<Link component={RouterLink} to={'/'}>Пользовательское соглашение</Link>

						<Box className={classes.icons}>
							<Box className={classes.socialIcons}>
								<IconButton href='mailto:guru-grupp@mail.ru' className={classes.socialIcon}><EMailIcon color='#aa9b71' /></IconButton>
								<IconButton href='https://wa.me/79517763067' className={classes.socialIcon}><WhatsUpIcon color='#aa9b71' /></IconButton>
								<IconButton href='viber://chat?number=%2B79517763067' className={classes.socialIcon}><ViberIcon color='#aa9b71' /></IconButton>
								<IconButton href='https://www.instagram.com/cleex.service' className={classes.socialIcon}><InstagramIcon color='#aa9b71' /></IconButton>
								<IconButton href='https://www.facebook.com/cleex.service/' className={classes.socialIcon}><FBIcon color='#aa9b71' /></IconButton>
								<IconButton href='https://vk.com/cleex' className={classes.socialIcon}><VkIcon color='#aa9b71' /></IconButton>
							</Box>
							<Box className={classes.banks}>
								<IconButton href='https://best2pay.net/'><img src='./imgs/best2pay_w.png' /></IconButton>
								<IconButton href='https://mironline.ru/'><img src='./imgs/mir.png' /></IconButton>
								<IconButton href='https://www.mastercard.ru/'><img src='./imgs/mastercard_w.png' /></IconButton>
								<IconButton href='https://www.visa.com.ru/'><img src='./imgs/visa_w.png' /></IconButton>
							</Box>
						</Box>
					</Box>
				</Box>
				<Link className={classes.copyright} underline='none' href={'https://lndex.ru'} color='primary'>2021 © Разработано студией INDEX</Link>
			</Container>
		</Box>
	);
};

export default Footer;