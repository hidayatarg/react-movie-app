import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Container } from 'semantic-ui-react'

import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginPage from './components/pages/LoginPage';

import { Route } from 'react-router-dom';
// protecting client routes
import requireAuth from './utils/requireAuth';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Container text>
				{/* ! Routing are made here */}
					<Route exact path='/movies' component={MoviesPage}></Route>
					<Route exact path='/movies/new' component={requireAuth(NewMoviePage)}></Route>
					<Route exact path='/movie/:id' component={NewMoviePage}></Route>
					<Route exact path='/login' component={LoginPage}></Route>
					
        		</Container>
				<Footer />
			</div>
		);
	}
}

export default App;