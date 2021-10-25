import { Category } from "./Category";
import { Filter } from "./Filter";
import { Game } from "./Game";
import { ViewMode } from "./ViewMode";

export interface IAppState {
    categories: Category[],
    games: Game[],
    filter: Filter,
    viewMode: ViewMode
} 