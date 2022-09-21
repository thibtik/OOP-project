import { Event } from "./Event";
import {CustomerVIP} from "../human/customer/CustomerVIP";
import {Waiter} from "../human/staff/Waiter"
import { VIPRoom } from "../Room/diningRoom/VIPRoom";

export class CustomerBooked extends Event {
    private waiters:Waiter[]=[];
    constructor(private customerVIP: CustomerVIP, private room: VIPRoom,start: Date, end: Date){
        super(start, end);
    }
    
    addWaiter(...waiter: Waiter[]){
        this.waiters = this.waiters.concat(waiter);
    }

    getRoom(){
        return this.room;
    }

    getCustomer(){
        return this.customerVIP;
    }
}

