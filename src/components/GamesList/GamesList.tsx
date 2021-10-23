import React from 'react';

import GameCard from './components/GameCard';

import './GamesList.scss';

export default class GamesList extends React.Component {
    render() {
        return (
            <div className="games-list">
                <GameCard />
                <GameCard />
            </div>
        )
    }
}
