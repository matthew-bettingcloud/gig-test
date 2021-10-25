import { Filter, FilterActionEnum, IFilterStateAction } from '../../models/Filter';

const intialState: Filter = {
    searchText: '',
    searching: false,
    category: null,
    alphabetically: false,
    popularity: false
}

const filterReducer = (state: Filter = intialState, action: IFilterStateAction) => {
    switch(action.type) {
        case FilterActionEnum.SEARCH:
            state = {
                ...state,
                searchText: action.payload.searchText,
                searching: action.payload.searchText.length ? true : false
            }

            return state;
        case FilterActionEnum.CATEGORY: 
            state = { ...state, category: action.payload.category };
            return state;
        case FilterActionEnum.ALPHABETICALLY:
            state = { ...state, alphabetically: true, popularity: false };
            return state;
        case FilterActionEnum.POPULARITY:
            state = { ...state, popularity: true, alphabetically: false };
            return state;
        default:
            return state;
    }
}

export default filterReducer;