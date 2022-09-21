
import { Item, ItemCategory } from "./Item";

export class Material extends Item {
    constructor(name: string, price: number, category: ItemCategory.MATERIAL){
        super(name, price, category);
    }
}