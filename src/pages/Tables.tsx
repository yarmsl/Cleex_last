import React, { ReactElement, useState, useEffect } from 'react';
import { Backdrop, Box, Button, CircularProgress, Container, makeStyles, Typography } from '@material-ui/core';
import { useStage } from '../lib/context/StageCTX';
import { DeleteData, getData, PostData } from '../lib/fetch';
import { useHistory } from 'react-router';
import { askForPermissioToReceiveNotifications } from '../push-notification';

const useStyles = makeStyles((theme) => ({
	blueprint: {
		width: '100%',
		display: 'flex',
		marginTop: '24px',
		marginBottom: '24px'
	},
	barBox: {
		width: '50%',
		display: 'flex',
		justifyContent: 'center'
	},
	bar: {
		width: '80px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.background.default,
		borderRadius: 50,
	},
	tables: {
		width: '50%',
		display: 'flex',
		paddingRight: '10%',
		flexDirection: 'column',
		alignItems: 'flex-end',
		'&>*': {
			marginBottom: '16px',
		},
		'&>*:last-child': {
			marginBottom: '0'
		}
	},
	table: {
		width: '56px',
		height: '56px',
		padding: '0',
		borderRadius: 56,
		'& span': {
			fontSize: '18px'
		},
		'&:disabled': {
			backgroundColor: theme.palette.background.default,
			'& span': {
				color: '#fff'
			},
		}
	},
	specialTable: {
		width: '128px'
	},
	selfBusy: {
		'&:disabled': {
			backgroundColor: '#BAFFAE',
			'& span': {
				color: '#000'
			},
		}
	},
	actions: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		'&>*': {
			minWidth: '96px',
			width: '40%',
			maxWidth: '200px'
		}
	},
	backdrop: {
		zIndex: 100,
	}
}));

interface TablesProps {
	busy_tables: number[];
	message: string;
	number_of_tables: number;
	self_tables: number[];
}

const Tables = (): ReactElement => {
	const router = useHistory();
	const classes = useStyles();
	const { getId } = useStage();
	const { setHeaderMobileTitle } = useStage();
	const [tablesData, setTablesData] = useState({} as TablesProps);

	const [loading, setLoading] = useState(true);

	const getTables = () => {
		getData(`tables/${getId()}`)
			.then(r => {
				if (r !== null || r !== undefined) {
					setTablesData(r as TablesProps);
					console.log(tablesData);
					setLoading(false);
				} else {
					return router.push('/topka/account');
				}
			});
	};

	useEffect(() => {
		setHeaderMobileTitle('Выбрать столик');
		getTables();
	}, []);

	const [tables, setTables] = useState([] as number[]);
	const [selectedTables, setSelectedTables] = useState([] as number[]);

	useEffect(() => {
		if (tablesData !== undefined) {
			for (let i = 1; i <= tablesData.number_of_tables; i++) {
				if (tables.length === tablesData.number_of_tables) {
					setTables(tables);
				} else {
					setTables(p => [...p, i]);
				}
			}
		}
	}, [loading]);

	const selectTable = (num: number) => {
		if (selectedTables.includes(num)) {
			setSelectedTables(p => p.filter(table => table !== num));
		} else {
			setSelectedTables(p => [...p, num].sort());
		}
	};

	const sendTables = () => {
		if (selectedTables?.length > 0) {
			askForPermissioToReceiveNotifications(getId());
			setLoading(true);
			PostData(`tables/${getId()}`, { selected_tables: selectedTables })
				.then(() => {
					
					setSelectedTables([]);
					getTables();
				});
		}
	};

	const dischargeTables = () => {
		setLoading(true);
		DeleteData(`tables/${getId()}`)
			.then(() => getTables());
	};

	return (
		<>
			{loading ?
				<Backdrop className={classes.backdrop} open={loading}>
					<CircularProgress color='primary' />
				</Backdrop>
				:
				<>
					<Container maxWidth='sm' className={classes.blueprint}>
						<Box className={classes.barBox}>
							<Box className={classes.bar}>
								<Typography variant='h6' color='textPrimary'>Бар</Typography>
							</Box>
						</Box>
						<Box className={classes.tables}>
							{tablesData !== undefined && tables.map(table => {
								return (
									<Button
										onClick={() => selectTable(table)}
										key={table}
										variant='contained'
										className={[classes.table, tablesData.self_tables.includes(table) ? classes.selfBusy : undefined, table === 3 ? classes.specialTable : undefined].join(' ')}
										style={selectedTables.includes(table) ? { backgroundColor: '#78BBE1' } : undefined}
										disabled={tablesData.busy_tables.includes(table) ? true : false}
									>
										{table}
									</Button>
								);
							})}
						</Box>
					</Container>
					<Container maxWidth='sm' className={classes.actions}>
						<Button onClick={() => dischargeTables()} variant='outlined' color='primary'>Сброс</Button>
						<Button onClick={() => sendTables()} variant='contained'>Выбрать</Button>
					</Container>
				</>}
		</>
	);
};
export default Tables;