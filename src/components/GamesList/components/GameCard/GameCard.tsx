import React from 'react';
import { Game } from '../../../../models/Game';
import GameJackpot from '../GameJackpot/GameJackpot';
import GameTag from '../GameTag/GameTag';

import './GameCard.scss';

type GameCardProps = {
    game: Game
}
export default class GameCard extends React.Component<GameCardProps> {
    render() {
        return (
            <div className="game-card">
                <div className="game-card-tag">
                    <GameTag game={this.props.game} />
                </div>
                <header className="game-image">
                    <img src="https://via.placeholder.com/1280x940" alt=""/>
                    { this.props.game.jackpot && <GameJackpot game={this.props.game}/>}
                </header>
                <section className="game-info">
                    {this.props.game.name}
                </section>
            </div>
        );
    };
}
