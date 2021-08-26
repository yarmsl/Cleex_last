import { makeStyles, Box } from '@material-ui/core';
import React, { ReactElement, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import TopkaLogo from '../../components/TopkaLogo';
import { useStage } from '../../lib/context/StageCTX';
import CategoyContent from './CategoyContent';
import { getData } from '../../lib/fetch';

const useStyles = makeStyles((theme) => ({
	top: {
		width: '100%',
		// height: '40%',
		height: '100%',
		maxHeight: '401px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	categoryContainer: {
		padding: '0 12px',
		fontSize: '14px',
	},
	categoryTitel: {
		textAlign: 'center',
		fontSize: '18px',
		margin: '20px',
		color: '#FFFFFF',
		textTransform: 'uppercase',
	},
	categoryItem: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	categoryName: {
		color: '#FFFFFFFF',
		textTransform: 'uppercase',
		[theme.breakpoints.down(550)]: {
			maxWidth: '250px'
		}
	},
	categoryVolume: {
		color: '#c4c4c4',
		marginLeft: '5px',
		fontSize: '12px',
	},
	categoryPrice: {
		color: '#FFFFFFFF',
	},
	categoryDesc: {
		color: '#c4c4c4',
		textTransform: 'uppercase',
		fontSize: '12px'
	},
	categoryBox: {
		marginBottom: '12px'
	},
	bacgkround: {
		backgroundColor: theme.palette.background.default
	}
}));

interface IConent {
	name: string;
	volume: string
	price: string;
	description?: string;
}

interface IBars {
	category: string;
	children?: IConent[];
}

interface IBar {
	bar: IBars[];
}


const MenuContent = (): ReactElement => {

	const classes = useStyles();
	const router = useHistory();
	const routerLocation = router.location.pathname.split('/')[3];
	const [data, setData] = useState({} as IBar);
	const ref = useRef();
	const { setHeaderMobileTitle } = useStage();

	useEffect(() => {
		// window.addEventListener('scroll', () => MenuAnimation(10));

		setHeaderMobileTitle('Бар');

		if (routerLocation == 'kitchen') {
			setHeaderMobileTitle('Кухня');
		}

		if (routerLocation == 'cocktails') {
			setHeaderMobileTitle('Коктейльная карта');
		}
		getData(`static/${routerLocation}.json`).then(r => setData(r as IBar));
	}, []);


	const Content = () => {
		if (data?.bar) {
			return (
				<CategoyContent>
					{data.bar.map((item, index) => {
						return (
							<div ref={ref.current} className={classes.categoryContainer} key={index}>
								<div className={classes.categoryTitel}>{item.category}</div>
								{item.children?.map((item, index) => {
									return (
										<div key={index} className={classes.categoryBox}>
											<div className={classes.categoryItem}>
												<div>
													<div className={classes.categoryName} >{item.name}
														<span className={classes.categoryVolume}>{item.volume}</span>
													</div>
												</div>
												<div className={classes.categoryPrice} >{item.price}</div>
											</div>
											{item?.description != 'Null' ? <div className={classes.categoryDesc}>{item.description}</div> : null}
										</div>
									);
								})}
							</div>
						);
					})}
				</CategoyContent>
			);
		}
		return null;
	};

	return (
		<div className={classes.bacgkround}>
			<Box className={classes.top}>
				<TopkaLogo />
			</Box>
			<Box>
				<Content />
			</Box>

		</div>
	);
};


export default MenuContent;