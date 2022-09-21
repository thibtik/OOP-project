
export enum MealCategory {
    FOOD,
    DRINK,
    Dessert,
}

export abstract class Meal{
    constructor(protected mealCategory :MealCategory,  protected name : string, protected price: number){}

    getPrice(): number{
        return this.price;
    }

    getCategory(){
        return this.mealCategory;
    }
}
