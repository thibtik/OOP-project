import { CustomerVIP } from "./human/customer/CustomerVIP";
import {  CustomerCategory} from "./human/customer/Customer";
import {Gender} from "./human/Person";
import{Restaurant} from "./Restaurant";
import{Address} from "./Address";
import{HumanManager} from "./human/HumanManager";
import { Manager } from "./human/staff/Manager";
import { StaffCategory } from "./human/staff/Staff";
import { Chef } from "./human/staff/Chef";
import { Ingredient } from "./room/kitchen/Ingredient";
import { ItemCategory } from "./room/kitchen/Item";
import { Material } from "./room/kitchen/Material";
import { RoomManager } from "./Room/RoomManager";
import{Kitchen} from "./room/kitchen/Kitchen"
import { NormalRoom } from "./room/diningRoom/NormalRoom";
import { RoomCategory } from "./Room/diningRoom/DiningRoom";
import { VIPRoom } from "./Room/diningRoom/VIPRoom";
import { Table } from "./Room/diningRoom/table/Table";
import { CustomerBooked } from "./calendar/CustomerBooked";
import { Waiter } from "./human/staff/Waiter";
import { MealCategory } from "./meal/Meal";
import { Food } from "./meal/Food";
import { MealManager } from "./meal/MealManager";
import { Dessert } from "./meal/Dessert";
import { Drink } from "./meal/Drink";
import { CalendarManager } from "./calendar/CalendarManager";
import { Order } from "./order/order";
import { Cashier } from "./human/staff/Cashier";
import { Security } from "./human/staff/Security";
import { Cleaner } from "./human/staff/Cleaner";


// address of restaurant
let addess = new Address('phnom penh',2004);
let restaurant = new Restaurant('Luckily', addess);

// create customerVIP in restaurant
let CustomerVIPThib = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Gender.FEMALE,"884382832");
let CustomerVIPKhy = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "khy", 20, Gender.MALE, "0884392832");


// create staffs in restaurant
let manager = new Manager(StaffCategory.MANAGER,1,'Lina',30, Gender.FEMALE, "0884392832");
manager.setSalary(5000);
let chef = new Chef(StaffCategory.CHEF,2,'Dara',40, Gender.MALE, "884382832");
chef.setSalary(1000);
let cashier = new Cashier(StaffCategory.Cashier,3,'chantha',20, Gender.FEMALE, "0884384832")
cashier.setSalary(1000);
let security = new Security(StaffCategory.SECURITY,3,'Vibol',30, Gender.MALE, "0884334832")
security.setSalary(1000);
let waiter = new Waiter(StaffCategory.WAITRON,1,'chanthy',20,Gender.FEMALE, "0884392832");
waiter.setSalary(200);
let cleaner = new Cleaner(StaffCategory.CLEANER,1,'chiva',20,Gender.FEMALE, "0888392832");
cleaner.setSalary(100);

let human = new HumanManager()
restaurant.hr = human;
restaurant.hr.addCustomer(CustomerVIPThib)
restaurant.hr.addCustomer(CustomerVIPKhy)
restaurant.hr.getCustomerVIP();
restaurant.hr.addStaff(manager,chef,cashier,security,waiter,cleaner);

// console.log(restaurant.hr)     


// create Ingredient
let meat = new Ingredient('meat',900,ItemCategory.INGREDIENT);
let vegetables = new Ingredient('vegetables',900,ItemCategory.INGREDIENT);
let fish = new Ingredient('fish',900,ItemCategory.INGREDIENT);

// create material
let plate = new Material('plate',300,ItemCategory.MATERIAL);
let Knife = new Material('Knife',20,ItemCategory.MATERIAL);

// add material and ingredient to Kitchen
let kitchen = new Kitchen(1);
kitchen.addMaterial(plate,Knife);
kitchen.addIngredient(meat,fish,vegetables);

let rooms = new RoomManager();
restaurant.rooms = rooms;
restaurant.rooms.addKitchenRoom(kitchen);

// add table to diningRoom
let table = new Table(1,5);
let table1 = new Table(2,5)
let table3 = new Table(3,5)
let table4 = new Table(4,5)
table.addCustomerVIP(CustomerVIPKhy)
table1.addCustomerVIP(CustomerVIPThib)
let normalRoom = new NormalRoom(1,RoomCategory.NORMALROOM);
let vipRoom = new VIPRoom(1,RoomCategory.VIPROOM);
vipRoom.addTable(table,table1);
normalRoom.addTable(table3,table4)
restaurant.rooms.addDiningRoom(normalRoom);
restaurant.rooms.addDiningRoom(vipRoom);
// console.log(restaurant.rooms.getVIPRoom())      
// console.log(restaurant.rooms.getVIPRoomFree())      




// create drink and food in restaurant
let Coffee = new Drink(MealCategory.DRINK,'Coffee',200);
let Smoothie  = new Drink (MealCategory.DRINK,'Smoothie', 300);
let Cupcakes = new Dessert(MealCategory.Dessert,'Cupcakes',600);
let apple = new Dessert(MealCategory.Dessert,'apple',100);
let soups = new Food(MealCategory.FOOD,'soups',500);

// add drink and food in FoodManager
let meal = new MealManager()
restaurant.meal = meal;
restaurant.meal.addMeal(Smoothie,Coffee,soups,Cupcakes,apple);

// console.log(restaurant.meal.getAllFood());
// console.log(restaurant.meal.getAllDrink());



// calendar
let start = new Date(2022, 4, 18,2);
let end = new Date(2022, 4, 17,8);
let customerBooked = new CustomerBooked(CustomerVIPThib, vipRoom,start,end);
customerBooked.addWaiter(waiter);
let Calendar = new CalendarManager();
restaurant.calendar = Calendar;
restaurant.calendar.addCustomerBook(customerBooked)

let roomVip1 = new VIPRoom(1,RoomCategory.VIPROOM)
restaurant.rooms.addDiningRoom(roomVip1);
// console.log(restaurant.rooms.getVIPRoomFree());

let order = new Order(start, table,waiter);
let order2 = new Order(start, table,waiter);
order.addMeal(soups,Coffee);
order2.addMeal(soups,Coffee);
restaurant.order.addOrder(order,order2);

// console.log(restaurant.order.getFoodADay(start));
// console.log(restaurant.order.getRevenueADay(start));
console.log(restaurant.order.getAllOrderADay(start));


