import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1024,
			lg: 1280,
			xl: 1920,
		},
	},
	typography: {
		fontFamily: [
			'Open Sans',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		button: {
			fontSize: 14,
			fontWeigt: 700
		},
		h2: {
			userSelect: 'none',
		},
		h4: {
			textTransform: 'uppercase',
			fontSize: '36px',
			lineHeight: '50px'
		},
		h5: {
			fontSize: '18px',
			lineHeight: '24px',
			fontWeight: 700
		},
		body1: {
			fontSize: '14px',
			fontWeight: 700,
			lineHeight: '19px'
		},
		body2: {
			fontSize: '14px',
			fontWeight: 400,
			lineHeight: '19px'
		},
		subtitle1: {
			textTransform: 'uppercase',
			fontSize: '9px',
			fontWeight: 500
		},
		subtitle2: {
			fontSize: '14px'
		}
	},
	palette: {
		primary: {
			light: '#78BBE1',
			main: '#78BBE1',
			dark: '#78BBE1',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ffffff',
			main: '#ffffff',
			dark: '#ffffff',
			contrastText: '#000'
		},
		error: {
			main: '#fff'
		},
		text: {
			primary: '#ffffff',
			secondary: '#000000'
		},
		background: {
			default: '#2E3435'
		}
	},
	shadows: [
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none', //используется выпадашки из селектов TextField
		'none',
		'none',
		'0px 0px 16px rgba(0, 0, 0, 0.25)',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none'
	],
	shape: {
		borderRadius: 8,
	},
	overrides: {
		MuiButton: {
			root: {
				minWidth: '56px',
			},
			label: {
				fontSize: '14px',
				fontWeight: 700
			}
		},
		MuiContainer: {
			root: {
				display: 'flex'
			}
		},
		MuiFormLabel: {
			root: {
				color: '#fff',
				'&$focused': {
					color: '#78BBE1'
				}
			}
		},
		MuiInput: {
			underline: {
				'&:after': {
					borderBottom: '2px solid #78BBE1'
				},
				'&:before': {
					borderBottom: '2px solid #fff'
				}
			}
		},
		MuiInputBase: {
			input: {
				borderColor: '#fff'
			}
		},
		MuiCssBaseline: {
			'@global': {
				'::-webkit-scrollbar': {
					width: '8px',
					height: '8px',
				},
				'::-webkit-scrollbar-thumb': {
					backgroundColor: '#e9e9e9',
					borderRadius: '8px',
				},
				html: {
					width: '100%',
					height: '100%'
				},
				body: {
					width: '100%',
					height: '100%'
				},
				'#cleex': {
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column'
				}
			}
		},
	}
});

export default theme;