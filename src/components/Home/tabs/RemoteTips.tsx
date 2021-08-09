import React, { ReactElement } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	imageWrapper: {
		width: '50%',
		height: '100%',
		display: 'flex',
		justifyContent: 'space-around'
	},
	imageBox: {
		width: '40%',
		height: '100%',
		display: 'flex',
	},
	img1: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-start',
	},
	img2: {
		width: '100%',
		objectFit: 'contain',
		alignSelf: 'flex-end',
	},
	infoWrapper: {
		width: '50%',
		height: '100%',
		padding: '5%'
	},
	info: {
		width: '100%',
		height: '100%',
		background: 'center center url(./imgs/coin.svg) no-repeat',
		backgroundSize: 'contain',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));

const RemoteTips = (): ReactElement => {

	const classes = useStyles();

	return (
		<>
			<Box className={classes.imageWrapper}>
				<Box className={classes.imageBox}>
					<img className={classes.img1} src={'./imgs/tips_1.png'} />
				</Box>
				<Box className={classes.imageBox}>
					<img className={classes.img2} src={'./imgs/tips_2.png'} />
				</Box>
			</Box>
			<Box className={classes.infoWrapper}>
				<Box className={classes.info}>
					<Typography variant='h2' component='h2'>Бесконтактные чаевые</Typography>
				</Box>
			</Box>
		</>
	);
};

export default RemoteTips;