export default interface ICategory {
    id: number,
    displayName: string,
    languageCode: string,
    languageID: number,
    tag: string,
    visible: boolean
}

export default class Category implements ICategory {
    id: number;
    name: string;
    languageCode: string;
    languageID: number;
    tag: string;
    visible: boolean;

    constructor(category: ICategory) {
        this.id = category.id;
        this.name = category.displayName;
        this.languageCode = category.languageCode;
        this.languageID = category.languageID;
        this.tag = category.tag;
        this.visible = category.visible;
    }
}