import {Meal, MealCategory} from "./Meal";

export class Dessert extends Meal{
    constructor(protected foodCategory:MealCategory, name: string, price: number){
        super(foodCategory,name, price);
    }
}