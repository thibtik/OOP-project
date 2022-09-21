import { Staff, StaffCategory } from "./Staff";
import { Gender } from "../Person";
export class Waiter extends Staff{
    constructor(staffCategory: StaffCategory.WAITRON, id:number,name: string, age:number, gender: Gender,phone:string){
        super(staffCategory, id, name, age, gender, phone)
    }
}