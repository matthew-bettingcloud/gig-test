import { Category } from "./Category";
import { Game } from "./Game";

export interface IAppState {
    categories: Category[],
    games: Game[]
} 