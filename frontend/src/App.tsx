import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './pages/login/login.page';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/react">
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<p>
								Edit <code>src/App.tsx</code> and save to reload. HU£HU£H£H£U
							</p>
							<a
								className="App-link"
								href="https://reactjs.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn React
							</a>
						</header>
					</div>
				</Route>
				<Route path="/">
					<LoginPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
