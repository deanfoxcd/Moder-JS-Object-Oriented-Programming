'use strict';

// Intro
/*
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthyear);
  //   };
};

const dean = new Person('Dean', 1987);
console.log(dean);

const belle = new Person('Isabelle', 1996);
const stacy = new Person('Stacy', 1973);
console.log(belle, stacy);

console.log(dean instanceof Person); // true
*/

// Prototypes
/*
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};
console.log(Person.prototype);

dean.calcAge();
// Doing it this way means that the function is not attached to every single instance of Person. Not efficient. The this keyword is assigned to the object that's calling the method
console.log(dean.__proto__); // Same as line 26

Person.prototype.species = 'Homo sapiens';

console.log(dean.hasOwnProperty('firstName')); // true. It's one of the owned properties
console.log(dean.hasOwnProperty('species')); // false. It's inherited from the prototype

console.log(dean.__proto__.__proto__); // top of prototype chain
console.log(dean.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [5, 56, 7, 5, 4, 2, 4, 5667, 32, 7, 43];
console.log(arr.__proto__); // Same as Array.prototype
console.log(arr.__proto__.__proto__); // Object prototype

// Creating custom methods
Array.prototype.unique = function () {
  return [...new Set(this)];
}; // Not a good idea, just for example

console.log(arr.unique());

const h1 = document.querySelector('h1')
*/

// ** Coding Challenge #1**
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', '120km/h');
const car2 = new Car('Mercedes', '95 km/h');
// The course solution used numbers for arguments but I just left mine as strings. I liked the challenge of parsing the number from the string and making a new string

Car.prototype.accelerate = function () {
  this.speed = String(parseInt(this.speed) + 10) + ' km/h';
  console.log(`New speed is ${this.speed}`);
};
car1.accelerate();
car2.accelerate();

Car.prototype.brake = function () {
  this.speed = String(parseInt(this.speed) - 5) + ' km/h';
  console.log(`New speed is ${this.speed}`);
};
car1.brake();
car2.brake();
*/

// Classes

// Class expression
// const PersonCL = class {}

// Class declaration
class PersonCL {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }
  // These functions outside the constructor will be attached to the prototype, not the object so it is efficient. This is also cleaner than above. The above way still works
  calcage() {
    console.log(2037 - this.birthyear);
  }

  get age() {
    return 2037 - this.birthyear;
  }

  // This will be executed automatically because of line 94. The underscore is necessary to avoid a loop
  set fullName(name) {
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullname;
  }

  // Static Method. Not available on instances (kind of like Number.random())
  static hey() {
    console.log('Hey there!!');
  }
}

const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);
jessica.calcage();
console.log(jessica.age);
PersonCL.hey();

// const walter = new PersonCL('walter', 1965);

// Notes
// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// ** Coding Challenge #1 with Classes** (my own practice)
/*
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  changeSpeed(change) {
    this.speed += change;
    console.log(`The ${this.make} is now travelling at ${this.speed} km/h`);
  }
  //   accelerate() {
  //     this.speed += 10;
  //     console.log(`The ${this.make} is now travelling at ${this.speed} km/h`);
  //   }
  //   brake() {
  //     this.speed -= 5;
  //     console.log(`The ${this.make} is now travelling at ${this.speed} km/h`);
  //   }
}

const car1cl = new CarCL('BMW', 120);
const car2cl = new CarCL('Mercedes', 95);

// car1cl.accelerate();
// car1cl.accelerate();
// car1cl.brake();
car2cl.changeSpeed(20);
car2cl.changeSpeed(-70);
*/

// Getters and Setters

const account = {
  onwer: 'Dean',
  movements: [200, 50, 70, 130, 75],

  get latest() {
    return this.movements.slice(-1)[0];
  },

  set mostRecent(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.mostRecent = 50;
console.log(account.movements);
// See classes section above
