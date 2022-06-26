class Person {
  public name: string = "Mark";
  private _age!: number;

  public constructor(name: string) {
    if (age === undefined) {
      this._age = 20;
    } else {
      this._age = age;
    }
  }

  public async init() {}
}

const p1: Person = new Person("John");
console.log(p1);

export {};
