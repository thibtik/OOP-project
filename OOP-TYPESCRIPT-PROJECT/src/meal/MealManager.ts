
import { Food } from "./Food";
import { Drink } from "./Drink";
import { Meal, MealCategory } from "./Meal";

export class MealManager {
    private meal:Meal[]=[];

    addMeal(...meal:Meal[]){
        this.meal = this.meal.concat(meal);
    }

    getAllFood():Food[]{
        let food:Food[] =[];
        for(let meal of this.meal){
            if(meal.getCategory() === MealCategory.FOOD){
                let typeFood = meal as Food
                food.push(typeFood)
            }
        }
        return food;
    }

    getAllDrink(): Drink[] {
        let drink:Drink[] =[];
        for(let meal of this.meal){
            if(meal.getCategory() === MealCategory.DRINK){
                let typeDrink = meal as Drink
                drink.push(typeDrink)
            }
        }
        return drink;
    }

}