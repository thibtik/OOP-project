import { Address } from "./Address";
import { RoomManager } from "./room/RoomManager";
import { HumanManager } from "./human/HumanManager";
import { CalendarManager } from "./calendar/CalendarManager";
// import { Meal } from "./meal/Meal";
import { MealManager } from "./meal/MealManager";
import { OrderManager } from "./order/orderManager";

export class Restaurant {
    private address: Address;
    private name: string;
    constructor(name: string,address: Address){
        this.address = address;
        this.name = name;
    }
    
    public calendar: CalendarManager = new CalendarManager();
    public rooms : RoomManager = new RoomManager();
    public hr: HumanManager = new HumanManager();
    public meal: MealManager = new MealManager();
    public order : OrderManager = new OrderManager();
}
