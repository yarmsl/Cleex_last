import React, { ReactElement, useState } from 'react';
import { PoliciesListItem } from '../types/types';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BookIcon from '@material-ui/icons/Book';
import SecurityIcon from '@material-ui/icons/Security';
import LockIcon from '@material-ui/icons/Lock';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HistoryIcon from '@material-ui/icons/History';
import PaymentIcon from '@material-ui/icons/Payment';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	Container: {
		// backgroundColor: '#afb3b2'
	},
	nested: {
		paddingLeft: '20px',
		'& > * span:first-child': {
			fontSize: '18px',
		},
		[theme.breakpoints.down(500)]: {
			'& * span:first-child': {
				fontSize: '14px',
			}
		},
	},
	test: {
		color: theme.palette.text.primary,
	},
	text: {
		[theme.breakpoints.down('xs')]: {
			'& > span': {
				fontSize: '16px',
			}
		},
		[theme.breakpoints.down(500)]: {
			'& > span': {
				fontSize: '14px',
			}
		}
	},
	listPadding: {
		paddingLeft: '20px'
	},
	listAfter: {
		position: 'relative',
		'&::before': {
			content: '"-"',
			position: 'absolute',
			left: '-20px',
			top: '50%',
			transform: 'translateY(-50%)'
		}
	},
	listSize: {
		padding: '0 0 10px 30px',
		'& > * span:first-child': {
			fontSize: '16px',
		},
		[theme.breakpoints.down(500)]: {
			'& * span:first-child': {
				fontSize: '12px',
			}
		},
	},
	Titel: {
		backgroundColor: '#afb3b2',
		borderRadius: '10px'
	}
}));


const PoliciesListItemBlock = ({ titel, subtitel, index, url }: PoliciesListItem): ReactElement => {

	const classes = useStyles();

	const [open, setOpen] = useState(false);

	let newArr: ReactElement[] = [<BookIcon key={0} />, <SecurityIcon key={0} />, <LockIcon key={0} />, <ListAltIcon key={0} />, <PeopleIcon key={0} />, <VerifiedUserIcon key={0} />, <DoneAllIcon key={0} />];

	let listPadding = 20;
	let listTitel = false;


	if (url == '/useragreement') {
		newArr = [<BookIcon key={0} />, <DescriptionIcon key={0} />, <LockIcon key={0} />, <PeopleIcon key={0} />, <PaymentIcon key={0} />, <HistoryIcon key={0} />, <DoneAllIcon key={0} />, <AccountBalanceWalletIcon key={0} />];
	}

	function handleClick() {
		setOpen(!open);
	}

	return (
		<>
			<ListItem button onClick={handleClick}>
				<ListItemIcon className={classes.test}>
					{/* <InboxIcon /> */}
					{newArr[index]}
				</ListItemIcon>
				<ListItemText className={classes.text} primary={titel} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse className={classes.Container} in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{subtitel.split('"').filter(item => item.length > 7).
						map((item, index) => {
							listTitel = false;
							if (index == 0) listPadding = 20;

							if (item[item.length - 1] == ':') listTitel = true;

							if (item == 'children') {
								listPadding = 40;
								return null;
							}

							return (
								<ListItem button className={`${classes.nested} ${listPadding > 20 ? classes.listSize : ''} ${listTitel ? classes.Titel : ''}`} key={index}>
									<ListItemText className={`${listPadding > 20 ? classes.listAfter : ''}`} primary={item} />
								</ListItem>
							);
						})
					}
				</List>
			</Collapse>
		</>
	);
};
export default PoliciesListItemBlock;