

import { Category, CategoryActionEnum, ICategoryStateAction } from '../../models/Category'

const categoriesReducer = (state: Category[] = [], action: ICategoryStateAction) => {
    switch(action.type) {
        case CategoryActionEnum.SET_STATE_ASYNC:
            console.log('teste')
            return state = action.payload;
        default:
            return state;
    }
}

export default categoriesReducer;