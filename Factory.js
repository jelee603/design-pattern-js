class CafeLatte {
  constructor() {
    this.price = 3000;
  }
  getPrice() {
    return this.price;
  }
}

class VanillaLatte {
  constructor() {
    this.price = 5000;
  }
  getPrice() {
    return this.price;
  }
}

class LatteFactory {
  static create(latteType) {
    if (latteType === 'cafe') {
      return new CafeLatte();
    } else if (latteType === 'vanilla') {
      return new VanillaLatte();
    }
  }
}

const latte = LatteFactory.create('vanilla');
console.log(`Vanilla Latte ${latte.getPrice()}원`);
