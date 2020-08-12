import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import friendsLogo from './images/friends-logo.png';

function App() {
	return (
		<Router>
			<div className='App'>
				<div className='App-header'>
					<h2>
						<Link to='/login'>Login</Link>
					</h2>
					<img src={friendsLogo} alt="Friends" />
					<h2>
						<Link to='/private'>Private Page</Link>
					</h2>
				</div>
				<Switch>
					<PrivateRoute exact path='/private' component={Friends} />

					<Route path='/login' component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
