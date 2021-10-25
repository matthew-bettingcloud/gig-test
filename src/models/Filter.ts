export interface IFilter {
    searchText: string,
    searching: boolean,
    category: number | null,
    alphabetically: boolean,
    popularity: boolean
}

export interface IFilterStateAction {
    type: string,
    payload: Filter
}

export enum FilterActionEnum {
    SEARCH = 'SEARCH',
    CATEGORY = 'CATEGORY',
    ALPHABETICALLY = 'ALPHABETICALLY',
    POPULARITY = 'POPULARITY' 
}

export class Filter implements IFilter {
    public searchText: string;
    public searching: boolean;
    public category: number | null;
    public alphabetically: boolean;
    public popularity: boolean;

    constructor (filter: IFilter) {
        this.searchText = filter.searchText;
        this.searching = filter.searching;
        this.category = filter.category;
        this.alphabetically = filter.alphabetically;
        this.popularity = filter.popularity;
    }
}