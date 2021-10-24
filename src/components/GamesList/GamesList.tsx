import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../../models/AppState';
import { Filter } from '../../models/Filter';
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
    const filter: Filter = useSelector<IAppState, Filter>(state => state.filter);
    let filteredGames: Game[] = games;

    if (filter.searching) {
        filteredGames = filteredGames.filter(game => {
            return game.name.toLowerCase().includes(filter.searchText.toLocaleLowerCase());
        })
    }

    if (filter.category !== null) {
        filteredGames = filteredGames.filter(game => {
            return game.categories.some(item => item.categoryId === filter.category)
        });
    }

    const listItems = [];
    
    for (const item of filteredGames) {
        listItems.push(<GameCard key={item.gameId} game={item} />)
    }

    return listItems.length ? (<>{listItems}</>) : (<span>No results found</span>);
}
