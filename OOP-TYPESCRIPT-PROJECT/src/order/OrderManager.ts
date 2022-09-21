import { Order } from "./order";
import { Meal } from "../meal/Meal";
export class OrderManager {
    private orders : Order[]=[];

    getAllOrder(){
        return this.orders
    }

    addOrder(...other : Order[]){
        this.orders = this.orders.concat(other);
    }

    getAllOrderADay(date:Date):Order[]| undefined{
        let orders: Order[]| undefined = [];
        for (let order of this.orders){
           if(order.isDayEqual(date)){
                orders.push(order);
           }
        }  
        return orders;
    }

    getRevenueADay(date:Date):number{
        let orders = this.getAllOrderADay(date);
        let totalPrice = 0;
        if(orders!==undefined){
            for(let order of orders){
                totalPrice += order.getPriceFromOrder()
            }
        }
        return totalPrice;
    }

    getFoodADay(date:Date):Meal[]{
        let meal: Meal[] =[];
        let orders = this.getAllOrderADay(date);
        if(orders!== undefined){
            for(let order of orders){
                let mealOfOneOrder= order.getMeal();
                for(let item of mealOfOneOrder){
                    meal.push(item)
                }
            }
        }
        return meal;
    }
}
