import React, { ReactElement } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',

	},
	top: {

	},
	bottom: {

	}
}));

const Footer = (): ReactElement => {

	const classes = useStyles();

	return (
		<Box className={classes.root} component='footer'>
			<Container className={classes.root}>
				<Box className={classes.top}>
					Футер верх
				</Box>
				<Box className={classes.bottom}>
					Футер низ
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;