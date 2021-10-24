import { takeEvery, put, call } from "@redux-saga/core/effects"
import getGamesList from "../../api/gamesApi"

import { GameActionEnum } from "../../models/Game"

async function getGamesData() {
    const response = await getGamesList() 
    return response.data
}

function* setGamesAsync(): any {
    const response = yield call(getGamesData);
    yield put({ type: GameActionEnum.SET_GAMES_ASYNC, payload: response })
}

export function* watchSetGames() {
    yield takeEvery(GameActionEnum.SET_GAMES, setGamesAsync)
} 