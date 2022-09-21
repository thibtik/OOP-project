
export enum CustomerCategory {
    CUSTOMER_VIP,
    COSTOMER_NORMAL,
};
export abstract class Customer{
    constructor( protected category: CustomerCategory, protected id: number) {}
    
    getCustomerCategory(){
        return this.category;
    }
}
