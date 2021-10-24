import { Filter, FilterActionEnum, IFilterStateAction } from '../../models/Filter';

const intialState: Filter = {
    searchText: '',
    searching: false
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
        default:
            return state;
    }
}

export default filterReducer;