import { DiningRoom } from "./DiningRoom";
import { RoomCategory } from "./DiningRoom";
import { CustomerBooked } from "../../calendar/CustomerBooked";
import { CustomerVIP } from "../../human/customer/CustomerVIP";

export class VIPRoom extends DiningRoom{
    private customerBooked?: CustomerBooked = undefined;
    constructor(id:number, roomCategory:RoomCategory.VIPROOM,){
        super(id,roomCategory);
    }
    
    setCustomerBooked(customerBooked:CustomerBooked){
        this.customerBooked = customerBooked;
    }

    getCustomerBooked():CustomerBooked|undefined{
        return this.customerBooked;
    }
}