"use strict";
exports.__esModule = true;
var CustomerVIP_1 = require("./human/customer/CustomerVIP");
var Customer_1 = require("./human/customer/Customer");
var Person_1 = require("./human/Person");
var Restaurant_1 = require("./Restaurant");
var Address_1 = require("./Address");
var HumanManager_1 = require("./human/HumanManager");
var Manager_1 = require("./human/staff/Manager");
var Staff_1 = require("./human/staff/Staff");
var Chef_1 = require("./human/staff/Chef");
var Ingredient_1 = require("./room/kitchen/Ingredient");
var Item_1 = require("./room/kitchen/Item");
var Material_1 = require("./room/kitchen/Material");
var RoomManager_1 = require("./Room/RoomManager");
var Kitchen_1 = require("./room/kitchen/Kitchen");
var NormalRoom_1 = require("./room/diningRoom/NormalRoom");
var DiningRoom_1 = require("./Room/diningRoom/DiningRoom");
var VIPRoom_1 = require("./Room/diningRoom/VIPRoom");
var Table_1 = require("./Room/diningRoom/table/Table");
var CustomerBooked_1 = require("./calendar/CustomerBooked");
var Waiter_1 = require("./human/staff/Waiter");
var Meal_1 = require("./meal/Meal");
var Food_1 = require("./meal/Food");
var MealManager_1 = require("./meal/MealManager");
var Dessert_1 = require("./meal/Dessert");
var Drink_1 = require("./meal/Drink");
var CalendarManager_1 = require("./calendar/CalendarManager");
var order_1 = require("./order/order");
var Cashier_1 = require("./human/staff/Cashier");
var Security_1 = require("./human/staff/Security");
var Cleaner_1 = require("./human/staff/Cleaner");
// address of restaurant
var addess = new Address_1.Address('phnom penh', 2004);
var restaurant = new Restaurant_1.Restaurant('Luckily', addess);
// create customerVIP in restaurant
var CustomerVIPThib = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.FEMALE, "884382832");
var CustomerVIPKhy = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "khy", 20, Person_1.Gender.MALE, "0884392832");
// console.log(vip.isEqual(vip1));
// create staffs in restaurant
var manager = new Manager_1.Manager(Staff_1.StaffCategory.MANAGER, 1, 'Lina', 30, Person_1.Gender.FEMALE, "0884392832");
manager.setSalary(5000);
var chef = new Chef_1.Chef(Staff_1.StaffCategory.CHEF, 2, 'Dara', 40, Person_1.Gender.MALE, "884382832");
chef.setSalary(1000);
var cashier = new Cashier_1.Cashier(Staff_1.StaffCategory.Cashier, 3, 'chantha', 20, Person_1.Gender.FEMALE, "0884384832");
cashier.setSalary(1000);
var security = new Security_1.Security(Staff_1.StaffCategory.SECURITY, 3, 'Vibol', 30, Person_1.Gender.MALE, "0884334832");
security.setSalary(1000);
var waiter = new Waiter_1.Waiter(Staff_1.StaffCategory.WAITRON, 1, 'chanthy', 20, Person_1.Gender.FEMALE, "0884392832");
waiter.setSalary(200);
var cleaner = new Cleaner_1.Cleaner(Staff_1.StaffCategory.CLEANER, 1, 'chiva', 20, Person_1.Gender.FEMALE, "0888392832");
cleaner.setSalary(100);
var human = new HumanManager_1.HumanManager();
restaurant.hr = human;
restaurant.hr.addCustomer(CustomerVIPThib);
restaurant.hr.addCustomer(CustomerVIPKhy);
restaurant.hr.getCustomerVIP();
// console.log(restaurant.hr.getCustomerNormal())
restaurant.hr.addStaff(manager, chef, cashier, security, waiter, cleaner);
console.log(human);
// create drink and food in restaurant
var Coffee = new Drink_1.Drink(Meal_1.MealCategory.DRINK, 'Coffee', 200);
var Smoothie = new Drink_1.Drink(Meal_1.MealCategory.DRINK, 'Smoothie', 300);
var Cupcakes = new Dessert_1.Dessert(Meal_1.MealCategory.Dessert, 'Cupcakes', 600);
var soups = new Food_1.Food(Meal_1.MealCategory.MEAL, 'soups', 500);
// add drink and food in FoodManager
var meal = new MealManager_1.MealManager();
restaurant.meal = meal;
restaurant.meal.addMeal(Smoothie, Coffee, soups, Cupcakes);
// console.log(meal)
// create Ingredient
var meat = new Ingredient_1.Ingredient('meat', 900, Item_1.ItemCategory.INGREDIENT);
var vegetables = new Ingredient_1.Ingredient('vegetables', 900, Item_1.ItemCategory.INGREDIENT);
var fish = new Ingredient_1.Ingredient('fish', 900, Item_1.ItemCategory.INGREDIENT);
// create material
var plate = new Material_1.Material('plate', 300, Item_1.ItemCategory.MATERIAL);
var Knife = new Material_1.Material('Knife', 20, Item_1.ItemCategory.MATERIAL);
// add material and ingredient to Kitchen
var kitchen = new Kitchen_1.Kitchen(1);
kitchen.addMaterial(plate, Knife);
kitchen.addIngredient(meat, fish, vegetables);
var rooms = new RoomManager_1.RoomManager();
restaurant.rooms = rooms;
restaurant.rooms.addKitchenRoom(kitchen);
// console.log(kitchen)
// add table to diningRoom
var table = new Table_1.Table(1, 5);
var table1 = new Table_1.Table(2, 5);
var table3 = new Table_1.Table(3, 5);
var table4 = new Table_1.Table(4, 5);
table.addCustomerVIP(CustomerVIPKhy);
table1.addCustomerVIP(CustomerVIPThib);
var normalRoom = new NormalRoom_1.NormalRoom(1, DiningRoom_1.RoomCategory.NORMALROOM);
var vipRoom = new VIPRoom_1.VIPRoom(1, DiningRoom_1.RoomCategory.VIPROOM);
vipRoom.addTable(table, table1);
normalRoom.addTable(table3, table4);
// console.log(vipRoom.getTable())
restaurant.rooms.addDiningRoom(normalRoom);
restaurant.rooms.addDiningRoom(vipRoom);
// console.log(restaurant.rooms)
// calendar
var start = new Date(2022, 4, 18, 2);
var end = new Date(2022, 4, 17, 8);
var customerBooked = new CustomerBooked_1.CustomerBooked(CustomerVIPThib, vipRoom, start, end);
customerBooked.addWaiter(waiter);
var Calendar = new CalendarManager_1.CalendarManager();
restaurant.calendar = Calendar;
restaurant.calendar.addCustomerBook(customerBooked);
var roomVip1 = new VIPRoom_1.VIPRoom(1, DiningRoom_1.RoomCategory.VIPROOM);
restaurant.rooms.addDiningRoom(roomVip1);
// console.log(restaurant.rooms.getVIPRoomFree());
var order = new order_1.Order(start, table, waiter);
var order2 = new order_1.Order(start, table, waiter);
order.addMeal(soups, Coffee);
order2.addMeal(soups, Coffee);
restaurant.order.addOrder(order, order2);
console.log(restaurant.order.getFoodADay(start));
