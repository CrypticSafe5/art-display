import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import AboutMe from './AboutMe';
import Home from './Home';
import Gallery from './Gallery';

const classes = {
	appbar: {
		paddingTop: '12px',
		paddingBottom: '12px',
		width: '100%',
		height: '36px'
	},
	appbarTab: {
		textDecoration: 'none',
		color: 'black',
		padding: '12px'
	}
};

export default function App() {
	return (
		<BrowserRouter style={{ overflowX: 'hidden' }}>
			<div style={classes.appbar}>
				<img src="/img/brush.png" alt="brush" height="24px" />
				<Link to="/home" style={classes.appbarTab}>Home</Link>
				<Link to="/gallery" style={classes.appbarTab}>Portfolio</Link>
				<Link to="/about_me" style={classes.appbarTab}>About Me</Link>
			</div>
			<Switch>
				<Route path="/about_me" component={AboutMe} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/home" component={Home} />
				<Route default component={() => <Redirect to="/home" />} />
			</Switch>
		</BrowserRouter>
	);
}
