
import { Room } from "../Room/Room";
import { CustomerBooked } from "./CustomerBooked";

export class CalendarManager {
    private customerBooked:CustomerBooked[]=[];

    getCustomerBooked():CustomerBooked[] {
        return this.customerBooked;
    }
    addCustomerBook(other: CustomerBooked) {
        this.customerBooked.push(other);
      }

    getEventRooms(): Room[]{
        let rooms:Room[] = [];
        let customerBookeds = this.customerBooked;
        customerBookeds.forEach(customerBooked => {
            rooms.push(customerBooked.getRoom())
        });
        return rooms;
    }
}