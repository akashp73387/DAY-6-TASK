/* DAY 6 TASK  

  TASK 1 : https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
*/

console.log("TASK 1 ");

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

/* A. */

const b = new Movie("manjummel boys", "vtp studios", 8.7);
console.log(b.title, b.studio, b.rating);

/* B. */

const c = new Movie("leo", "7-screen studio");
console.log(c.title, c.studio, c.rating);




/*  D. */

const d = new Movie("Casino Royal", "Eon Productions", "PG13");
console.log(d.title, d.studio, d.rating);

/*  -------------------------------------------------------------------------------------------
 
 TASK  2 : https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md */

console.log("TASK 2");

class Circle {
  constructor(radius, colour) {
    this.radius = radius;
    this.colour = colour;
  }
  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius1 = n;
  }
  get Colour() {
    return this.colour;
  }
  set Colour(c) {
    this.colour = c;
  }
  get tostring() {
    return `"circle[radius=${this.radius} , colour=${this.colour}]"`;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
}
let e = new Circle(1.0, "red");
console.log(e.radius);
console.log(e.colour);
console.log(e.tostring);
console.log(e.area);
console.log(e.circumference);
e.radius = 3.5;
console.log(e.radius);
e.colour = "green";
console.log(e.colour);

/*------------------------------------------------------------------------------------------------

   TASK 3 :  Write a “person” class to hold all the details. */

console.log("TASK 3 ");

class Person {
  constructor(name, age, gender, martialstatus, contact, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.martialstatus = martialstatus;
    this.contact = contact;
    this.email = email;
  }
}
const obj = new Person(
  "akash",
  "23",
  "male",
  "unmarried",
  "7338714410",
  "akashp73387@gmail.com"
);
console.log(
  obj.name,
  obj.age,
  obj.gender,
  obj.martialstatus,
  obj.contact,
  obj.email
);

const obj1 = new Person(
  "arun",
  "26",
  "male",
  "married",
  "9228714410",
  "arunp73387@gmail.com"
);
console.log(
  obj1.name,
  obj1.age,
  obj1.gender,
  obj1.martialstatus,
  obj1.contact,
  obj1.email
);

// /* TASK 4 : write a class to calculate the Uber price. */

console.log("TASK 4 ")

class Uber {
  constructor(distance, vehicletype, rate) {
    this.distance = distance;
    this.vehicletype = vehicletype;
    this.rate = rate;
  }
  setDistance(dist) {
    this.distance = dist;
  }
  getRideDetails() {
    return `The distance of the ride is ${this.distance}km with Vehicle type of ${this.vehicletype} and rate of per Kilometer is ${this.rate}rs`;
  }
  getRate() {
    let totalRate = this.distance * this.rate;
    return `The vehicle type is ${this.vehicletype} and rate is` + totalRate;
  }
}
let customer1 = new Uber(100, "bike", 15);
console.log(customer1.getRideDetails());
console.log(customer1.getRate());


