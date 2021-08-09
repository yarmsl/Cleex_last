import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
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
			fontWeigt: 500
		},
		h2: {
			userSelect: 'none',
		},
		h4: {
			textTransform: 'uppercase',
			fontSize: '36px',
			lineHeight: '50px'
		},
		body1: {
			fontSize: '24px',
			fontWeight: 400,
			lineHeight: '32px'
		},
		body2: {
			fontSize: '18px',
			fontWeight: 400,
			lineHeight: '24px'
		},
		subtitle1: {
			textTransform: 'uppercase',
			fontSize: '9px',
			fontWeight: 500
		}
	},
	palette: {
		primary: {
			light: '#ffecb9',
			main: '#ffecb9',
			dark: '#e7d6a5',
			contrastText: '#192021'
		},
		secondary: {
			light: '#f5f2ed',
			main: '#fff',
			dark: '#c4c4c4',
			contrastText: '#192021'
		},
		error: {
			main: '#f47979'
		},
		text: {
			primary: '#192021',
			secondary: '#aa9b71'
		},
		background: {
			default: '#fff'
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
		MuiContainer: {
			root: {
				display: 'flex'
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