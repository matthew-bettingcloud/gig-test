import { spawn } from "@redux-saga/core/effects"
import { watchSetCategories } from "./categorySagas";
import { watchSetGames } from "./gameSagas";

export function* rootSaga () {
    yield spawn(watchSetCategories);
    yield spawn(watchSetGames);
}