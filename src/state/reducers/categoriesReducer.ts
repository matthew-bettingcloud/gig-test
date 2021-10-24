

import { Category, CategoryActionEnum, ICategoryStateAction } from '../../models/Category'

const categoriesReducer = (state: Category[] = [], action: ICategoryStateAction) => {
    switch(action.type) {
        case CategoryActionEnum.SET_STATE_ASYNC:
            return state = action.payload;
        default:
            return state;
    }
}

export default categoriesReducer;