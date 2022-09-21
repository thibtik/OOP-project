

export enum ItemCategory {
    INGREDIENT,
    MATERIAL
}

export abstract class Item {
    constructor(protected name: string, protected price: number, protected category: ItemCategory){}
}