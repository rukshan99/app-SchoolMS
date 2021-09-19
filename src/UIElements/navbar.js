import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { School, Class, People, Person, PowerSettingsNew } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		// display: 'flex'
	},
	// drawer
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	// upper bar
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth
		},
		backgroundColor: '#353C48',
		color: 'White'
	},
	// toggle button
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		},
		color: 'white'
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	// edit drawer styles
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#353C48'
	},
	// content: {
	// 	flexGrow: 1,
	// 	padding: theme.spacing(3)
	// }
	content: {
		[theme.breakpoints.up('sm')]: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`
		}
	}
}));

const ResponsiveDrawer = (props) => {
	const { _window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const history = useHistory();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const onSignOut = (text) => {
		if (text === 'Sign out') {
			localStorage.removeItem('username');
			localStorage.removeItem('password');
			history.push('/');
			window.location.reload(false);
			return '/';
		} else {
			return text;
		}
	}
	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{['Subjects', 'Teachers', 'Classes', 'Students', 'Sign out'].map((text, index) => (
					<NavLink 
						to={`${text === 'Sign out' ? '/' : `/${text}`}`}
						activeClassName='navActive' 
						className='navItemLink' 
						key={index}
						onClick={onSignOut.bind(this, text)}
						>
						<ListItem button key={text}>
							<ListItemIcon>
								{text === 'Subjects' ? (
									<School />
								) : text === 'Classes' ? (
									<Class />
								) : text === 'Teachers' ? (
									<Person />
								) : text === 'Students' ? (
									<People />
								) : text === 'Sign out' ? (
									<PowerSettingsNew />
								) : null}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					</NavLink>
				))}
			</List>
		</div>
	);

	const container = _window !== undefined ? () => _window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h5' noWrap>
						<span className='specialColor'>S</span>chool <span className='specialColor'>M</span>anagement {' '}
						<span className='specialColor'>S</span>ystem
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant='permanent'
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />

				{/* my app content */}

				<div className='appBody'>
					<div className='container'>{props.children}</div>
				</div>
			</main>
		</div>
	);
}

ResponsiveDrawer.propTypes = {
	/**
   * Injected by the documentation to work in an iframe.
   * may be won't need it.
   */
	_window: PropTypes.func
};

export default ResponsiveDrawer;
