class Person {
  // public name: string;
  // private age: number;
  // 축약형
  public constructor(public name: string, private age: number) {}

  // public constructor(name: string, age: number) {

  // this.name = name;
  // this.age = age;
  // }
}

const p1: Person = new Person("John", 30);
console.log(p1);

export {};
