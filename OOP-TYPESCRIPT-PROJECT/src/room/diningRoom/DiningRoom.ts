
import { Room } from "../Room";
import { Table } from "./table/Table";
export enum RoomCategory{
    VIPROOM,
    NORMALROOM,
}

export class DiningRoom extends Room{
    protected table: Table[]=[];
    constructor(id:number, protected roomCategory:RoomCategory){
        super(id);
    }

    isEqual(other:DiningRoom):boolean{
        if(
            this.table.length==other.table.length && 
            this.id==other.id &&
            this.roomCategory ==other.roomCategory
        ){
            return true;
        }
        return false;
    }


    addTable(...table:Table[]){
        this.table = this.table.concat(...table);
    }
    
    getTable(){
        return this.table
    }
    isAllTablesFree():boolean{
        let result = true;
        let tables = this.table;
        for(let table of tables){
            if(!table.tableNoCustomer()){
                result = false;
            }
        }
        return result;
    }

    getRoomCatetory(){
        return this.roomCategory;
    }

    getMaxNumberCustomer(){
        let tables = this.table
        let max = 0
        for(let table of tables){
            max += table.getNumberOfCustomers();
        }
        
        return max;
    }



}