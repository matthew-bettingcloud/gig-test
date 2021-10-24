import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../../models/AppState';
import { Game, GameActionEnum } from '../../models/Game';

import GameCard from './components/GameCard';

import './GamesList.scss';

export const GamesList = () =>  {
    const dispatch = useDispatch();
    dispatch({ type: GameActionEnum.SET_GAMES });

    return (
        <div className="games-list">
            <GamesListItems />
        </div>
    )
}

function GamesListItems() {
    const games: Game[] = useSelector<IAppState, Game[]>(state => state.games);

    const listItems = [];
    
    for (const item of games) {
        listItems.push(<GameCard key={item.gameId} game={item} />)
    }

    return (<>{listItems}</>);
}
