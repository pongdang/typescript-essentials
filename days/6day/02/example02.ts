class Person {
  name: string = "Mark";
  //  값을 할당해주지 않으면 문제가 생김
  //   age: number;
  // class 바깥에서 age에 값을 할당하려면 아래와 같이 해야함
  //   age!: number;
  // default 생성자 사라짐
  //   constructor(age: number) {
  //     this.age = age;
  //   }
  age: number;
  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}

const p1 = new Person(30);
// p1이라는 object 만들어짐
// p1의 타입은 class이름

console.log(p1);
// p1.age = 30
console.log(p1.age);

const p2 = new Person();
console.log(p2);

export {};
