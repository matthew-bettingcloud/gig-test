import React from 'react';
import { Game } from '../../../../models/Game';
import GameJackpot from '../GameJackpot/GameJackpot';
import GameTag from '../GameTag/GameTag';

import './GameLine.scss';

type GameLineProps = {
    game: Game
}
export default class GameLine extends React.Component<GameLineProps> {
    render() {
        return (
            <div className="game-line">
                <section className="game-info">
                    {this.props.game.name}
                </section>
                <GameTag game={this.props.game}/>
                { this.props.game.jackpot && <GameJackpot game={this.props.game}/>}
            </div>
        )
    }
}
