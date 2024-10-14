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

const h1 = document.querySelector('h1');
*/

// ** Coding Challenge #1 & #3**
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
// The course solution used numbers for arguments but I just left mine as strings. I liked the challenge of parsing the number from the string and making a new string
// Update: I had to change to Numbers when we did the classes challenege

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`New speed is ${this.speed} km/h`);
};
// car1.accelerate();
// car2.accelerate();

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`New speed is ${this.speed} km/h`);
};
// car1.brake();
// car2.brake();

// **Coding Challenge #3**

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Battery is at ${this.charge}%`);
};

EV.prototype.acclerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.acclerate();
tesla.brake();
tesla.acclerate();
*/

// Classes

// Class expression
// const PersonCL = class {}

// Class declaration
/*
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
*/

// ** Coding Challenge #1 with Classes** (my own practice) Also Challenge #2 & #4
/*
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //   changeSpeed(change) {
  //     this.speed += change;
  //     console.log(`The ${this.make} is now travelling at ${this.speed} km/h`);
  //     return this;
  //   }
  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is now travelling at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is now travelling at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return `${this.speed / 1.6} mph`;
  }

  set speedUS(speedMph) {
    this.speed = speedMph * 1.6; // No underscore because the setter name isn't the same as the variable initialized
  }
}

const car1cl = new CarCL('BMW', 120);
const car2cl = new CarCL('Mercedes', 95);
const ford = new CarCL('Ford', 120);

class EVCl extends CarCL {
  #charge;
  constructor(make, model, charge) {
    super(make, model);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery is at ${this.#charge}%`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `The ${this.make} is now travelling at ${
        this.speed
      } km/h. Battery is at ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 100, 50);

console.log(rivian);
rivian.accelerate().accelerate().brake().chargeBattery(80).brake().accelerate();

ford.speedUS = 100;
// console.log(ford);

// car1cl.accelerate();
// car1cl.accelerate();
// car1cl.brake();
// car2cl.changeSpeed(20);
// car2cl.changeSpeed(-70);

*/

// Getters and Setters
/*

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

*/

// Object.create
/*

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

// A better way (see init function in proto)
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
sarah.calcAge();
*/

// Inheritance between classes (Constructor Functions)
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear); // This doesn't link the prototypes, just copies the insides
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `Hi! My name is ${this.firstName}. I am ${
      2037 - this.birthYear
    } years old and I am studying ${this.course}`
  );
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge(); // This won't work without linking the prototypes
*/

// Inheritance Between Classes (ES6 Classes)
/*

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // These functions outside the constructor will be attached to the prototype, not the object so it is efficient. This is also cleaner than above. The above way still works
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
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

  introduce() {
    console.log(
      `Hi! My name is ${this.fullName}. I am ${
        2037 - this.birthYear
      } years old and I am studying ${this.course}`
    );
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old`);
  }
}

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first. Basically creates the this keyword
    super(fullName, birthYear);
    this.course = course;
  }
}

const belle = new StudentCL('Isabelle Fox', 2016, 'Teaching');
belle.introduce();
belle.calcAge();
*/

// Inheritance Between Classes (Object.create)
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `Hi! My name is ${this.firstName}. I am ${
      2037 - this.birthYear
    } years old and I am studying ${this.course}.`
  );
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2013, 'Psychology');
console.log(jay);
jay.introduce();
jay.calcAge();
*/

//Another Class Example w/ Encapsulation (incl. class fields and methods)
/*

// Public fields
// Private fields
// Public methods
// Private methods
// There is also the static versions of these

class Account {
  // Public Fields (on the instance, not the prototype)
  locale = navigator.language;

  // Private Fields (on the instance, not the prototype)
  #movements = [];
  #pin; // Declared here so that it can be used in the constructor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property but still technically accessible
    // this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.locale;

    console.log(`Thanks for opening a new account ${owner}`);
  }

  // Public Methods
  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
    return this;
  }

  // Private Methods (not yet working)
  //   #approveLoan(val) {
  //     return true;
  //   }
}

const acc1 = new Account('Dean', 'USD', 1111);

//This will work but it's not a good idea
// acc1.movements.push(200)
// acc1.movements.push(-100)

// This is better
acc1.deposit(200);
acc1.withdraw(100);
acc1.requestLoan(1000);
console.log(acc1);
// console.log(acc1.#movements); // Won't work
console.log(acc1.getMovements()); // Still works
// console.log(acc1.#pin); // Won't work

// Chaining (need to add 'return this' to the methods)
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(5000).withdraw(2000);
console.log(acc1.getMovements());
*/
