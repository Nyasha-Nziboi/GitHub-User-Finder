import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

function App() {
	return (
		<div className="App">
			<Navbar title="GitHub User Finder" />
			<div className="container">
				<Users />
			</div>
		</div>
	);
}
export default App;
