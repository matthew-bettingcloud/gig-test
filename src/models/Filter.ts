export interface IFilter {
    searchText: string,
    searching: boolean,
    category: number | null,
    alphabetically: boolean
}

export interface IFilterStateAction {
    type: string,
    payload: Filter
}

export enum FilterActionEnum {
    SEARCH = 'SEARCH',
    CATEGORY = 'CATEGORY',
    ALPHABETICALLY = 'ALPHABETICALLY'
}

export class Filter implements IFilter {
    public searchText: string;
    public searching: boolean;
    public category: number | null;
    public alphabetically: boolean;

    constructor (filter: IFilter) {
        this.searchText = filter.searchText;
        this.searching = filter.searching;
        this.category = filter.category;
        this.alphabetically = filter.alphabetically;
    }
}