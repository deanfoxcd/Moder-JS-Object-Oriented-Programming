'use strict';

// Challenge #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;

//   this.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//   };

//   this.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
//   };
// };

// const bmw = new Car('BMW', 100);

// Challenge #2

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }

  get speedUS() {
    return (this.speed /= 1.6);
  }

  set speedUS(speed) {
    return (this.speed = speed *= 1.6);
  }
}

const merc = new Car('Mercedes', 50);
// console.log(merc.speedUS);
// merc.speedUS = 100;
// console.log(merc);
// merc.accelerate();
// merc.accelerate();
// merc.accelerate();
// merc.brake();
// merc.brake();
// merc.accelerate();
// console.log(merc);

class EVCar extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`The battery is now at ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}. Battery is at ${this.#charge}`
    );
    return this;
  }
}

const tesla = new EVCar('Tesla', 120, 85);
console.log(tesla);
tesla.accelerate().brake().chargeBattery(80).accelerate();
console.log(tesla);
