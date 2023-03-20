class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log('The animal makes a sound');
  }
}

class Cat extends Animal {
  purr() {
    console.log('purr');
  }

  makeSound() {
    console.log('Meow');
  }
}

class Dog extends Animal {
  bark() {
    console.log('woof');
  }

  makeSound() {
    console.log('Bark');
  }
}
