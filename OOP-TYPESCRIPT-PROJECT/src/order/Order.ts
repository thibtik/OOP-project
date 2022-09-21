
import { Waiter } from "../human/staff/Waiter";
import { Table } from "../Room/diningRoom/table/Table";
import { Meal } from "../meal/Meal";

export class Order {
    private meal : Meal[]=[];
    constructor(private date : Date, private table : Table, private waiter: Waiter){}

    getPriceFromOrder(){
        let price = 0;
        for(let victual of this.meal){
            price += victual.getPrice();
        }
        return price;
    }
    addMeal(...meal: Meal[]){
        this.meal = this.meal.concat(meal);

    }
    getMeal(){
        return this.meal;
    }

    getDateTime(){
        return this.date;
    }

    isDayEqual(other:Date){
        let date = this.date;
        if(
            date.getFullYear() === other.getFullYear() && 
            date.getDate() === other.getDate() &&
            date.getMonth() === other.getMonth()
            ){
                return true;
            }
            return false;
        
        }
}
