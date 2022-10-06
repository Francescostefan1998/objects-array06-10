/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* 
const arraynumbers = [1, 2, 3, 4, 5];
*/

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* 
const myprofile = {
    myname: "Francesco",
    mysurname: "stefan",
    myemail: "francescostefan98@gamil.com",
    myage: 24
};
 */

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* 
const myProfile = {
    myname: "Francesco",
    mysurname: "stefan",
    myemail: "francescostefan98@gamil.com",
    myage: 24
};

myProfile.drivelicence = myprofile.myage >= 18;
console.log(myProfile);
 */

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* 
delete myProfile.myage;
*/

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* 
const yourProfile = {
    myname: "Giulio",
    mysurname: "Vazzola",
    myemail: "giulio99@gamil.com",
    myage: 23
};
trueemail = myProfile.myemail !== yourProfile.myemail;
console.log("is the mail of Francesco different from Giulio's mail? ", trueemail );
*/

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* 
let total = 28
let shippingcost = 10
let totalcost = total >= 50 ? total : total + shippingcost;
console.log("your total ammount to pay is: ", totalcost);
*/

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* 
let total = 28
let shippingcost = 10
let todayday = "Friday"
let totalcost = total >= 50 ? total : total + shippingcost;
let totalecosti = todayday === "Friday" ? totalcost * 0.8 : totalcost;
console.log("your total ammount to pay is: ", totalecosti);
*/

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* 
const myCar = {
    brand: "BMW",
    engine: 1400,
    numberplate: "WD56FG",
    numberofdoor: 5,
    yearofbirth: 1997
};

const myCar2 = Object.assign({}, myCar);
myCar2.numberplate = "SSSSSS"

const myCar3 = Object.assign({}, myCar);
myCar3.numberplate = "kkkk"

const myCar4 = Object.assign({}, myCar);
myCar4.numberplate = "iiiii"

const myCar5 = Object.assign({}, myCar);
myCar5.numberplate = "oooo"

const myCar6 = Object.assign({}, myCar);
myCar6.numberplate = "uuuu"

console.log(myCar, myCar2, myCar3, myCar4, myCar5, myCar6);
 */

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* 
const carforrent = [myCar, myCar2, myCar3, myCar4, myCar5, myCar6];
console.log(carforrent);
*/

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/*
carforrent.pop();
const deletefirstcar = carforrent.splice(0, 1);
console.log(carforrent);
*/

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* 
const propertyName = "numberplate";
const shwb = "brand"
console.log("numberplate :", myCar[propertyName], "brand of my car: ", myCar[shwb]); 
 */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* 
const myCar8 = Object.assign({}, myCar);
myCar8.numberplate = "jjjsj"

const myCar9 = Object.assign({}, myCar);
myCar9.numberplate = "ouwwu"

const myCar10 = Object.assign({}, myCar);
myCar10.numberplate = "bbbbb"

const carforsale = []
carforsale.push(myCar8);
carforsale.push(myCar9);
carforsale.push(myCar10);
console.log(carforsale);

let totalcar = carforsale.length + carforrent.length;
console.log("the total ammount of car is: " totalcar);
console.log("the total ammount of car is: " carforsale.length + carforrent.length);
*/

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* 
for (let i = 0; i < carforsale.length; i++) {
    console.log(i);
    console.log(carforsale[i]);
  }
*/