import React from 'react';
import { Game } from '../../../../models/Game';

import './GameTag.scss';

type GameTagProps = {
    game: Game
}
export default class GameTag extends React.Component<GameTagProps> {
    render() {
        return (
            <div className={'game-tag ' + this.getClass()}>
                { this.getTagLabel() }
            </div>
        );
    };

    getTagLabel() {
        if (this.props.game.isNew) {
            return 'New';
        }

        if (this.props.game.isHot) {
            return 'Hot';
        }

        if (this.props.game.isLive) {
            return 'Live';
        }

        return '';
    }

    getClass() {
        if (this.props.game.isNew) {
            return 'new';
        }

        if (this.props.game.isHot) {
            return 'hot';
        }

        if (this.props.game.isLive) {
            return 'live';
        }

        return '';
    }
}