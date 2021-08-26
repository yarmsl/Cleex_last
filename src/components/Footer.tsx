import React, { ReactElement } from 'react';
import { Box, Container, IconButton, Link, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
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
		[theme.breakpoints.down('sm')]: {
			height: 'auto',
			paddingTop: '20px'
		},
		[theme.breakpoints.down(640)]: {
			paddingTop: '15px'
		},
		[theme.breakpoints.down(375)]: {
			height: '225px',
		}
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
		[theme.breakpoints.down('sm')]: {
			marginBottom: '10px'
		},
	},
	info: {
		// width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		flexGrow: 1,
		[theme.breakpoints.down(415)]: {
			justifyContent: 'flex-start'
		}
	},
	logo: {
		[theme.breakpoints.down('sm')]: {
			width: '250px',
			'& > p': {
				fontSize: '14px'
			}
		},
		[theme.breakpoints.down(640)]: {
			width: '200px',
			'& > p': {
				fontSize: '11px',
			}

		},
		[theme.breakpoints.down(415)]: {
			width: '150px',
			marginBottom: '20px',
			'& > p': {
				display: 'none'
			}
		},
	},
	icons: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down(730)]: {
			alignItems: 'flex-end',
		},
	},
	socialIcons: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.down(640)]: {
			maxWidth: '200px',
			flexWrap: 'wrap'
		},
		[theme.breakpoints.down(500)]: {
			maxWidth: '150px',
		},
		[theme.breakpoints.down(415)]: {
			maxWidth: '100px',
		},

	},
	socialIcon: {
		width: '64px',
		[theme.breakpoints.down('sm')]: {
			width: '54px'
		},
		[theme.breakpoints.down(640)]: {
			width: '33.33%',
			padding: '6px',
			justifyContent: 'flex-end',

			'& > span': {
				width: '30px'
			}
		},
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
		},
		[theme.breakpoints.down('sm')]: {
			'&>*': {
				width: '90px',
			},
		},
		[theme.breakpoints.down(730)]: {
			flexWrap: 'wrap',
			width: '100%',
			maxWidth: '200px',
			alignItems: 'flex-end',
			'&>*': {
				width: '50%',
				padding: '6px',
				justifyContent: 'flex-end',
				'& > span': {
					width: '70px'
				}
			},
			'&>*:nth-of-type(4)': {
				height: '75px'
			},
		},
		[theme.breakpoints.down(500)]: {
			maxWidth: '150px',
		},
		[theme.breakpoints.down(415)]: {
			maxWidth: '120px',
			'&>*:nth-of-type(4)': {
				height: '55px'
			},
		}
	},
	contacts: {
		// width: '50%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		'&>p': {
			textAlign: 'left'
		},
		'&>a': {
			textAlign: 'left'
		},
		[theme.breakpoints.down('sm')]: {
			'&>h5': {
				fontSize: '25px',
			},
			'&>p': {
				fontSize: '16px',
			}
		},
		[theme.breakpoints.down(640)]: {
			'&>h5': {
				fontSize: '20px',
				height: '38px'
			},
			'&>p': {
				fontSize: '14px',
				textAlign: 'left'
			},
			'&>a': {
				fontSize: '14px',
				textAlign: 'left'
			}
		},
		[theme.breakpoints.down(500)]: {
			'&>p': {
				fontSize: '12px',
			},
			'&>a': {
				fontSize: '12px',
				'& > svg': {
					display: 'none'
				}
			}
		},
		[theme.breakpoints.down(415)]: {
			'&>p:nth-of-type(4)': {
				display: 'none'
			},
			'&>p:nth-of-type(5)': {
				display: 'none'
			},
		}
	},
	linkIcon: {
		display: 'flex',
		alignItems: 'center',
		'&>*:first-child': {
			marginRight: '6px',
		}
	},
	copyright: {
		marginBottom: '12px',
		[theme.breakpoints.down(640)]: {
			fontSize: '12px'
		},
	},
	userPolicy: {
		[theme.breakpoints.down(640)]: {
			fontSize: '13px',
			margin: '10px 0'
		},
		[theme.breakpoints.down(415)]: {
			display: 'none'
		}
	},
	orientationRoot: {
		width: '100%',
		height: '200px',
		padding: '0px',
		background: 'linear-gradient(#192021, #181b1c)',
		boxShadow: theme.shadows[11],
	},
	orientationWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	orientationTop: {
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	orientationContacts: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		'&>h5': {
			fontSize: '16px',
			height: '33px'
		},
		'&>p': {
			fontSize: '12px',
			lineHeight: '1.2',
			textAlign: 'left'
		},
		'&>a': {
			fontSize: '14px',
			lineHeight: '1.2',
			textAlign: 'left',
			'& > svg': {
				display: 'none'
			},
		}
	},
	orientationLinkIcon: {
		display: 'flex',
		alignItems: 'center',

	},
	orientationInfo: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		flexGrow: 1,
		justifyContent: 'flex-start'
	},
	orientationLogo: {
		width: '200px',
		marginTop: '20px',
		'& > p': {
			fontSize: '11px',
		}
	},
	orientationUserPolicy: {
		fontSize: '13px',
	},
	orientationIcons: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	orientationSocialIcons: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		maxWidth: '100px',
	},
	orientationBanks: {
		width: '100%',
		height: '40px',
		display: 'flex',
		justifyContent: 'flex-end',
		'&>*': {
			width: '80px',
		},
		'& img': {
			width: '100%',
			objectFit: 'contain'
		},
	},
	orientationCopyright: {
		// fontSize: 'px'
		opacity: '0'
	},
	orientationSocialIcon: {
		width: '33.33%',
		padding: '6px',
		justifyContent: 'flex-end',
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
	const matches = useMediaQuery('(max-height: 500px)');

	return (
		<Box className={matches ? classes.orientationRoot : classes.root} component='footer'>
			<Container className={matches ? classes.orientationWrapper : classes.wrapper}>
				<Box className={matches ? classes.orientationTop : classes.top}>
					<Box className={matches ? classes.orientationContacts : classes.contacts}>
						<Typography color='primary' variant='h5'>Реквизиты</Typography>
						<Typography color='secondary' variant='body2'>{reqs.name}</Typography>
						<Typography color='secondary' variant='body2'>{reqs.inn}</Typography>
						<Typography color='secondary' variant='body2'>{reqs.ogrn}</Typography>
						<Typography color='primary' variant='h5'>Контакты</Typography>
						<Link className={matches ? classes.orientationLinkIcon : classes.linkIcon} href={`tel:${contacts.phone1}`}><PhoneEnabledRoundedIcon color='primary' />{contacts.phone1}</Link>
						<Link className={matches ? classes.orientationLinkIcon : classes.linkIcon} href={`tel:${contacts.phone2}`}><PhoneEnabledRoundedIcon color='primary' />{contacts.phone2}</Link>
						<Link className={matches ? classes.orientationLinkIcon : classes.linkIcon} href={`mailto:${contacts.email}`}><EmailRoundedIcon color='primary' />{contacts.email}</Link>
						<Typography align='right' color='secondary' variant='body2'>{contacts.address1}</Typography>
						<Typography align='right' color='secondary' variant='body2'>{contacts.address2}</Typography>
					</Box>
					<Box className={matches ? classes.orientationInfo : classes.info}>
						<Box className={matches ? classes.orientationLogo : classes.logo}>
							<Logo color='#fff' />
							<Typography variant='body2' color='secondary'>Современное решение для бизнеса</Typography>
						</Box>
						<Link className={matches ? classes.orientationUserPolicy : classes.userPolicy} component={RouterLink} to={'/useragreement'}>Пользовательское соглашение</Link>

						<Box className={matches ? classes.orientationIcons : classes.icons}>
							<Box className={matches ? classes.orientationSocialIcons : classes.socialIcons}>
								<IconButton href='mailto:guru-grupp@mail.ru' className={matches ? classes.orientationSocialIcon : classes.socialIcon}><EMailIcon color='#aa9b71' /></IconButton>
								<IconButton href='https://wa.me/79517763067' className={matches ? classes.orientationSocialIcon : classes.socialIcon}><WhatsUpIcon color='#aa9b71' /></IconButton>
								<IconButton href='viber://chat?number=%2B79517763067' className={matches ? classes.orientationSocialIcon : classes.socialIcon}><ViberIcon color='#aa9b71' /></IconButton>
								<IconButton href='https://www.instagram.com/cleex.service' className={matches ? classes.orientationSocialIcon : classes.socialIcon}><InstagramIcon color='#aa9b71' /></IconButton>
								<IconButton href='https://www.facebook.com/cleex.service/' className={matches ? classes.orientationSocialIcon : classes.socialIcon}><FBIcon color='#aa9b71' /></IconButton>
								<IconButton href='https://vk.com/cleex' className={matches ? classes.orientationSocialIcon : classes.socialIcon}><VkIcon color='#aa9b71' /></IconButton>
							</Box>
							<Box className={matches ? classes.orientationBanks : classes.banks}>
								<IconButton href='https://best2pay.net/'><img src='./imgs/best2pay_w.png' /></IconButton>
								<IconButton href='https://mironline.ru/'><img src='./imgs/mir.png' /></IconButton>
								<IconButton href='https://www.mastercard.ru/'><img src='./imgs/mastercard_w.png' /></IconButton>
								<IconButton href='https://www.visa.com.ru/'><img src='./imgs/visa_w.png' /></IconButton>
							</Box>
						</Box>
					</Box>
				</Box>
				<Link className={matches ? classes.orientationCopyright : classes.copyright} underline='none' href={'https://lndex.ru'} color='primary'>2021 © Разработано студией INDEX</Link>
			</Container>
		</Box>
	);
};

export default Footer;