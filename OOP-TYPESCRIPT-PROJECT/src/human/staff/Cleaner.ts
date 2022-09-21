import { Staff, StaffCategory } from "./Staff";
import { Gender } from "../Person";


export class Cleaner extends Staff{
    constructor(category: StaffCategory,id:number,name: string, age: number, gender: Gender, phone:string) {
        super(category,id,name, age, gender, phone)
    }
}