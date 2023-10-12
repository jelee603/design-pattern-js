const DEFAULT_VALUE = '기본값';
class Beverage {
  constructor() {
    this.description = DEFAULT_VALUE;
  }
  getDescription() {
    return this.description;
  }
  cost() {
    return 0;
  }
}

class Espresso extends Beverage {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return `${this.beverage.getDescription()}, 1샷`;
  }
  cost() {
    return this.beverage.cost() + 600;
  }
}

class DarkRost extends Beverage {
  constructor() {
    super();
  }
  cost() {
    return 4000;
  }
}

class Decorator extends Beverage {
  constructor() {
    super();
  }
  getDescription() {}
  cost() {}
}

class Americano extends Decorator {
  constructor() {
    super();
  }
  getDescription() {
    return '아메리카노';
  }
  cost() {
    return 4000;
  }
}

class Mocha extends Decorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription() {
    return [this.beverage.getDescription(), '모카라떼']
      .filter((v) => v !== DEFAULT_VALUE)
      .join(',');
  }
  cost() {
    return this.beverage.cost() + 1200;
  }
}

const beverage = new Americano();
console.log(`${beverage.getDescription()}, ${beverage.cost()}원`);

let beverage2 = new DarkRost();
beverage2 = new Mocha(beverage2);
beverage2 = new Espresso(beverage2); // 샷 추가

console.log(`${beverage2.getDescription()}, ${beverage2.cost()}원`);
