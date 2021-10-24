import React from 'react';
import { Game } from '../../../models/Game';

import './GameCard.scss';

type GameCardProps = {
    game: Game
}
export default class GameCard extends React.Component<GameCardProps> {
    render() {
        return (
            <div className="game-card">
                <header className="game-image">
                    <img src="https://via.placeholder.com/1280x940" alt=""/>
                </header>
                <section className="game-info">
                    {this.props.game.name}
                </section>
            </div>
        )
    }
}
