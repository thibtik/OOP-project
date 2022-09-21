import { CustomerVIP } from "./customer/CustomerVIP";
import { CustomerNormal } from "./customer/CustomerNormal";
import { CustomerCategory } from "./customer/Customer";
import { Customer } from "./customer/Customer";
import { Staff } from "./staff/Staff";
export class HumanManager {
    private customer: Customer[]=[];
    private staffs : Staff[]=[];

    addCustomer(...customer: Customer[]) {
        this.customer = this.customer.concat(customer);
      }
    
      getCustomer() {
        return this.customer;
      }
      getCustomerVIP():Customer[] {
        let vipCustomer:Customer[] = []
        let customers = this.customer;
        customers.forEach(customer => {
          if (customer.getCustomerCategory() === CustomerCategory.CUSTOMER_VIP){
            vipCustomer.push(customer);
          }
          
        });
        return vipCustomer;
      }
      getCustomerNormal() {
        let normalCustomer:Customer[] = []
        let customers = this.customer;
        customers.forEach(customer => {
          if (customer.getCustomerCategory()==CustomerCategory.COSTOMER_NORMAL){
            normalCustomer.push(customer);
          }
        });
        return normalCustomer;
      }

      addStaff(...staff: Staff[]) {
        this.staffs = this.staffs.concat(staff);
      }
      getStaffs() {
        return this.staffs;
      }
};