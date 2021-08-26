import React, { ReactElement } from 'react';
import { Box, Container, makeStyles, ThemeProvider } from '@material-ui/core';
import { Child } from '../types/types';
import theme from '../UI/topkaTheme';
import HeaderMobile from '../components/HeaderMobile';
import { BASE_URL } from '../lib/constants';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: 'auto',
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		// eslint-disable-next-line quotes
		background: `linear-gradient(#ffffff00, #0000005e), no-repeat url(${BASE_URL}/imgs/topka/bg.webp)`,
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
	},
	wrapper: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	}
}));

const TopkaLayout = ({ children }: Child): ReactElement => {

	const classes = useStyles();

	return (
		<>
			<ThemeProvider theme={theme}>
				<Container disableGutters maxWidth='md' className={classes.root}>
					<HeaderMobile />
					<Box className={classes.wrapper} component='main'>
						{children}
					</Box>
				</Container>
			</ThemeProvider>
		</>
	);
};

export default TopkaLayout;