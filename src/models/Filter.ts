export interface IFilter {
    searchText: string,
    searching: boolean
}

export interface IFilterStateAction {
    type: string,
    payload: Filter
}

export enum FilterActionEnum {
    SEARCH = 'SEARCH'
}

export class Filter implements IFilter {
    public searchText: string;
    public searching: boolean;

    constructor (filter: IFilter) {
        this.searchText = filter.searchText;
        this.searching = filter.searching;
    }
}