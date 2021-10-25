import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '../../models/AppState';
import { Filter } from '../../models/Filter';
import { Game, GameActionEnum } from '../../models/Game';
import { ViewMode, ViewModeEnum } from '../../models/ViewMode';

import GameCard from './components/GameCard/GameCard';
import GameLine from './components/GameLine/GameLine';

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
    const viewMode: ViewMode = useSelector<IAppState, ViewMode>(state => state.viewMode);
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

    if (filter.alphabetically) {
        filteredGames = filteredGames.sort((gameA, gameB) => {
            if(gameA.name < gameB.name) { 
                return -1 
            } else {
                return 1;
            }
        });
    }

    if (filter.popularity) {
        // Sort the categories first
        for(let i = 0; i <= filteredGames.length -1 ; i++) {
            filteredGames[i].categories = filteredGames[i].categories.sort((catA, catB) => {
                if (!catA.orderNumber) {
                    catA.orderNumber = 99999;
                }

                if (!catB.orderNumber) {
                    catB.orderNumber = 99999;
                }

                if (catA.orderNumber < catB.orderNumber) {
                    return -1;
                } else {
                    return 1;
                }
            })
        }

        // Sort the games with the categories already sorted
        filteredGames = filteredGames.sort((gameA, gameB) => {
            if (gameA.categories.length === 1 && !gameA.categories[0].orderNumber) {
                gameA.categories[0].orderNumber = 999;
            }
            
            if (gameB.categories.length === 1 && !gameB.categories[0].orderNumber) {
                gameB.categories[0].orderNumber = 999;
            }

            if (gameA.categories[0].orderNumber! < gameB.categories[0].orderNumber!) {
                return -1;
            } else {
                return 1;
            }
        });
    }

    const listItems = [];
    
    for (const item of filteredGames) {
        if(viewMode.type === ViewModeEnum.GRID) {
            listItems.push(<GameCard key={item.gameId} game={item} />)
        } else {
            listItems.push(<GameLine key={item.gameId} game={item} />)
        }
    }

    return listItems.length ? (<>{listItems}</>) : (<span>No results found</span>);
}
