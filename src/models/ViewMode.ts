export enum ViewModeEnum {
    GRID = 'GRID',
    LIST = 'LIST'
}

export interface IViewMode {
    type: ViewModeEnum;
}

export interface IViewModeStateAction {
    type: ViewModeActionEnum,
    payload: ViewModeEnum
}

export enum ViewModeActionEnum {
    SET_VIEW_MODE = 'SET_VIEW_MODE'  
}

export class ViewMode implements IViewMode {
    public type: ViewModeEnum;

    constructor(viewMode: IViewMode) {
        this.type = viewMode.type;
    }
}