class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("John");
// p1이라는 object 만들어짐
console.log(p1);

export {};
