// - Read about [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and make a copy of 5-objects.html called 5-classes.html and try to convert all of the tasks in there to use a Person and Dog class.
// - Build upon the Person class; write a function in the Person class which prints the name and age of the person when invoked.

class classPerson {
  constructor(name, age, studentAt) {
    this.name = name;
    this.age = age;
    this.studentAt = studentAt;
  }
  greeting() {
    console.log(
      `Hi my name is ${this.name} i'm ${this.age} years old and I'm a studentq at ${this.studentAt}.`
    );
  }
}

const person = {
  studentAt: 'Chas',
  name: 'Daniel',
  age: '34',
};
let person1 = new classPerson(person.name, person.age, person.studentAt);

person1.greeting();

/////////////////////////////

class classDog {
  constructor(name) {
    this.name = name;
  }
  barking() {
    console.log(`My dog ${this.name} is angry.`);
  }
}

const dogs = {
  labrador: {
    adult: {
      name: 'Marley',
    },
    puppy: {
      name: 'Buster',
    },
  },
};
let dogs1 = new classDog(dogs.labrador.puppy.name);
dogs1.barking();
