import { Game, GameActionEnum, IGameStateAction } from '../../models/Game';

const gamesReducer = (state: Game[] = [], action: IGameStateAction) => {
    switch(action.type) {
        case GameActionEnum.SET_GAMES_ASYNC:
            return state = action.payload;
        default:
            return state;
    }
}

export default gamesReducer;