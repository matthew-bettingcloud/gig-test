import { IViewModeStateAction, ViewMode, ViewModeActionEnum, ViewModeEnum } from '../../models/ViewMode';

const initialState: ViewMode = {
    type: ViewModeEnum.GRID
}

const viewModeReducer = (state: ViewMode = initialState, action: IViewModeStateAction) => {
    switch(action.type) {
        case ViewModeActionEnum.SET_VIEW_MODE:
            state = {
                type: action.payload
            }
            
            return state;
        default:
            return state;
    }
}

export default viewModeReducer;