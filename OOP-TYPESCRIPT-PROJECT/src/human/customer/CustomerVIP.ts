import { Customer } from "./Customer";
import { Gender } from "../Person";
import { CustomerCategory } from "./Customer";

export class CustomerVIP extends Customer{
    constructor(category:CustomerCategory.CUSTOMER_VIP,  id : number, private name: string, private age: number, private gender: Gender, private phone:string){
        super(category,id);
    }
}