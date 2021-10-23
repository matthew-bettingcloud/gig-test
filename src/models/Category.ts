export interface ICategory {
    id: number,
    displayName: string,
    languageCode: string,
    languageID: number,
    tag: string,
    visible: boolean
}

export enum CategoryActionEnum {
    SET_STATE = 'SET_STATE',
    SET_STATE_ASYNC = 'SET_STATE_ASYNC' 
}

export interface ICategoryStateAction {
    type: string,
    payload: Category[]
}

export class Category implements ICategory {
    id: number;
    displayName: string;
    languageCode: string;
    languageID: number;
    tag: string;
    visible: boolean;

    constructor(category: ICategory) {
        this.id = category.id;
        this.displayName = category.displayName;
        this.languageCode = category.languageCode;
        this.languageID = category.languageID;
        this.tag = category.tag;
        this.visible = category.visible;
    }
}