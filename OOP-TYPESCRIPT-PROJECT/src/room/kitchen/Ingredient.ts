
import { Item, ItemCategory } from "./Item";

export class Ingredient extends Item {
    constructor(name: string, price: number, category: ItemCategory.INGREDIENT){
        super(name, price, category);
    }
}