import { Customer,CustomerCategory } from "../../../human/customer/Customer";
import { CustomerVIP } from "../../../human/customer/CustomerVIP";
import { CustomerNormal } from "../../../human/customer/CustomerNormal";
export class Table {
    private customers: Customer[]=[];
    constructor(private id: number, private numberOfCustomers: number){}
    isTableFree():boolean{
        let result = false;
        if(this.customers.length < this.numberOfCustomers){
            result = true;
        }
        return result;
    }

    tableNoCustomer():boolean{
        if (this.customers.length == 0){
            return true;
        }
        return false;
    }

    addCustomerNormal(...customerNormal: CustomerNormal[]){
        if (this.isTableFree()){
            this.customers = this.customers.concat(...customerNormal);
        }
    }

    addCustomerVIP(...customerVIP: CustomerVIP[]){
        if(customerVIP.length < this.numberOfCustomers){
            this.customers = this.customers.concat(...customerVIP);
        }
    }

    getNumberOfCustomers(){
        return this.numberOfCustomers;
    }
}