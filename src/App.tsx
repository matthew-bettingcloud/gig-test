import React from 'react';

import Header from './components/Header/Header';
import { CategoriesList } from './components/CategoriesList/CategoriesList';
import { GamesList } from './components/GamesList/GamesList';

import './App.scss';

export default class App extends React.Component {
  	render() {
    	return (
			<div className="app">
				<header>
					<Header />
				</header>
				<main className="main">
					<aside className="games-menu">
						<CategoriesList />
					</aside>
					<section className="games-section">
						<GamesList />
					</section>
				</main>
			</div>
   		)
  	}
}
