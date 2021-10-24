import { Category } from "./Category";
import { Filter } from "./Filter";
import { Game } from "./Game";

export interface IAppState {
    categories: Category[],
    games: Game[],
    filter: Filter,
} 