
import {Meal, MealCategory} from "./Meal";

export class Food extends Meal{
    constructor(protected foodCategory:MealCategory, name: string, price: number){
        super(foodCategory,name, price);
    }
}