import { Customer } from "./Customer";
import { CustomerCategory } from "./Customer";
export class CustomerNormal extends Customer{
    constructor(category:CustomerCategory.COSTOMER_NORMAL, id : number){
        super(category,id);
    }
}