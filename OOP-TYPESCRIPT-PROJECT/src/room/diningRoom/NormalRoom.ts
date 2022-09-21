import { DiningRoom } from "./DiningRoom"
// import { Table } from "./table/Table";
import { RoomCategory } from "./DiningRoom";

export class NormalRoom extends DiningRoom{
    constructor(id:number, roomCategory:RoomCategory.NORMALROOM){
        super(id,roomCategory);
    }
}