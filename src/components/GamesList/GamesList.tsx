import { useDispatch, useSelector } from 'react-redux';
import { alphabeticSort, categoryFilter, popularitySort, searchFilter } from '../../helpers/filters';

import { IAppState } from '../../models/AppState';
import { Filter } from '../../models/Filter';
import { Game, GameActionEnum } from '../../models/Game';
import { ViewMode, ViewModeEnum } from '../../models/ViewMode';

import GameCard from './components/GameCard/GameCard';
import GameLine from './components/GameLine/GameLine';

import './GamesList.scss';

export const GamesList = () =>  {
    const dispatch = useDispatch();
    const viewMode: ViewMode = useSelector<IAppState, ViewMode>(state => state.viewMode);
    dispatch({ type: GameActionEnum.SET_GAMES });

    return (
        // eslint-disable-next-line no-useless-concat
        <div className={'games-list ' + getViewModeClass(viewMode.type) }>
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
        filteredGames = searchFilter(filteredGames, filter.searchText);
    }

    if (filter.category !== null) {
        filteredGames = categoryFilter(filteredGames, filter.category);
    }

    if (filter.alphabetically) {
        filteredGames = alphabeticSort(filteredGames);
    }

    if (filter.popularity) {
        filteredGames = popularitySort(filteredGames);
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

function getViewModeClass (viewMode: ViewModeEnum) {
    return viewMode === ViewModeEnum.GRID ? 'grid-view' : 'list-view';
}
