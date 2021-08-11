import React, { ReactElement, useState, useEffect } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { useStage } from '../lib/context/StageCTX';
import { getDataByPost } from '../lib/fetch';

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
	}
}));

const Tables = (): ReactElement => {
	const classes = useStyles();

	const { setHeaderMobileTitle } = useStage();
	
	useEffect(() => {
		setHeaderMobileTitle('Выбрать столик');
	}, []);

	const tableCount = 7;
	const busyTables = [1, 2];
	const selfBusyTables = [2];

	const [tables, setTables] = useState([] as number[]);
	const [selectedTables, setSelectedTables] = useState([] as number[]);

	useEffect(() => {
		for (let i = 1; i <= tableCount; i++) {
			if (tables.length === tableCount) {
				setTables(tables);
			} else {
				setTables(p => [...p, i]);
			}
		}
	}, [tableCount]);

	const selectTable = (num: number) => {
		if (selectedTables.includes(num)) {
			setSelectedTables(p => p.filter(table => table !== num));
		} else {
			setSelectedTables(p => [...p, num].sort());
		}
	};
	console.log(selectedTables);

	const sendTables = () => {
		if (selectedTables?.length > 0) {
			getDataByPost('/3242', selectedTables);
		}
		setSelectedTables([]);
	};

	return (
		<>
			<Box className={classes.blueprint}>
				<Box className={classes.barBox}>
					<Box className={classes.bar}>
						<Typography variant='h6' color='textPrimary'>Бар</Typography>
					</Box>
				</Box>
				<Box className={classes.tables}>
					{tables.map(table => {
						return (
							<Button
								onClick={() => selectTable(table)}
								key={table}
								variant='contained'
								className={[ classes.table, selfBusyTables.includes(table) ? classes.selfBusy : undefined, table === 3 ? classes.specialTable : undefined].join(' ')}
								style={selectedTables.includes(table) ? {backgroundColor: '#78BBE1'} : undefined}
								disabled={busyTables.includes(table) ? true : false}
							>
								{table}
							</Button>
						);
					})}
				</Box>
			</Box>
			<Box className={classes.actions}>
				<Button onClick={() => setSelectedTables([])} variant='outlined' color='primary'>Сброс</Button>
				<Button onClick={() => sendTables()} variant='contained'>Выбрать</Button>
			</Box>
		</>
	);
};
export default Tables;