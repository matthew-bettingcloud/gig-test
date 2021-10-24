export interface IFilter {
    searchText: string,
    searching: boolean,
    category: number | null,
}

export interface IFilterStateAction {
    type: string,
    payload: Filter
}

export enum FilterActionEnum {
    SEARCH = 'SEARCH',
    CATEGORY = 'CATEGORY'
}

export class Filter implements IFilter {
    public searchText: string;
    public searching: boolean;
    public category: number | null;

    constructor (filter: IFilter) {
        this.searchText = filter.searchText;
        this.searching = filter.searching;
        this.category = filter.category;
    }
}