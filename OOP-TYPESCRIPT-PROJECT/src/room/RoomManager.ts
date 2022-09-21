import { DiningRoom } from "./diningRoom/DiningRoom";
import { Kitchen } from "./kitchen/Kitchen";
import { RoomCategory } from "./diningRoom/DiningRoom";
import { VIPRoom } from "./diningRoom/VIPRoom";
import { CustomerBooked } from "../calendar/CustomerBooked";

export class RoomManager {
   public diningRooms : DiningRoom[]=[];
   public kitchenRoom : Kitchen[]=[];

   getVIPRoom(){
      let rooms:VIPRoom[] = [];
      for(let room of this.diningRooms){
         if(room.getRoomCatetory() == RoomCategory.VIPROOM){
            let vipRoom = room as VIPRoom;
            rooms.push(vipRoom);
         }
      }
      return rooms;
   }
   addDiningRoom(...room: DiningRoom[]) {
      this.diningRooms = this.diningRooms.concat(room);
   }
   addKitchenRoom(...kichenRoom: Kitchen[]) {
      this.kitchenRoom = this.kitchenRoom.concat(kichenRoom);
   }
   

   getVIPRoomFree():VIPRoom | undefined {
      let vipRooms = this.getVIPRoom();
      for(let room of vipRooms){
         if(room.getCustomerBooked() === undefined){
            return room;
         }
      }
      return undefined;
   }

   addCustomerVIP(customerBooked:CustomerBooked ) {
      let room = this.getVIPRoomFree()
      if(room !== undefined) {
         room.setCustomerBooked(customerBooked);
      }
   }
}