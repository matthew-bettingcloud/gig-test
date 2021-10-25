import React from 'react';
import { Game } from '../../../../models/Game';

import './GameJackpot.scss';

type GameJackpotProps = {
    game: Game
}
export default class GameJackpot extends React.Component<GameJackpotProps> {
    render() {
        return (
            <div className="game-jackpot">
                <div className="icon">J</div>
                { this.props.game.jackpot?.currencyFormat }
            </div>
        );
    };
}