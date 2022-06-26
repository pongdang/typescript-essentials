// class Person {
//   public constructor(public _name: string, private age: number) {}

//   get name() {
//     //
//     console.log("get");
//     return this._name;
//   }

//   set name(n: string) {
//     console.log("set");
//     this._name = n;
//   }
// }

// const p1: Person = new Person("John", 30);
// console.log(p1.name); // get 을 하는 함수 getter
// p1.name = "cat"; // set 을 하는 함수 setter
// console.log(p1.name); // get cat

class Person {
  public constructor(private _name: string, private age: number) {}

  get name() {
    // 외부로 return
    return this._name + " cute";
  }

  set name(n: string) {
    console.log("set");
    this._name = n;
  }
}

const p1: Person = new Person("John", 30);
console.log(p1.name); // get 을 하는 함수 getter
p1.name = "cat"; // set 을 하는 함수 setter
console.log(p1.name); // get cat cute

export {};
