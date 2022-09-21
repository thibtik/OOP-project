import { Person, Gender } from "../Person";

export enum StaffCategory{
    CHEF,
    RECEPTIONIST,
    SECURITY,
    MANAGER,
    CLEANER,
    DISHWASHER,
    WAITRON,
    Cashier,
}
export class Staff extends Person {
    protected salary: number = 0;

    constructor(
        protected category: StaffCategory,id: number,name: string,age: number,gender: Gender, phone: string) {
        super(id,name, age, gender,phone);
    }
    setSalary(salary: number) {
        this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
    
    getCatetory(){
      return this.category;
    }
    
}
