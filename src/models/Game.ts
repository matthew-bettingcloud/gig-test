interface IGameCategory {
    categoryId: number,
    orderNumber?: number
}

interface IGameJackpot {
    gameId: number;
    currencyFormat: string;

}

export interface IGame {
    gameId: number,
    vendorId: number,
    name: string,
    slug: string,
    categories: IGameCategory[],
    isNew?: boolean,
    isHot?: boolean,
    isLive?: boolean,
    jackpot?: IGameJackpot
}

export interface IGameStateAction {
    type: string,
    payload: Game[]
}

export enum GameActionEnum {
    SET_GAMES = 'SET_GAMES',
    SET_GAMES_ASYNC = 'SET_GAMES_ASYNC'
}

export class Game implements IGame {
    gameId: number;
    vendorId: number;
    name: string;
    slug: string;
    categories: IGameCategory[];
    isNew: boolean;
    isHot: boolean;
    isLive: boolean;
    jackpot: IGameJackpot;

    constructor(game: IGame) {
        this.gameId = game.gameId;
        this.vendorId = game.vendorId;
        this.name = game.name;
        this.slug = game.slug;
        this.categories = game.categories;
        this.isNew = game.isNew!;
        this.isHot = game.isHot!;
        this.isLive = game.isLive!;
        this.jackpot = game.jackpot!;
    }
}