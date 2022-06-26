interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "Mark",
  age: 39,
  // 함수 넣기 1
  hello: function (): void {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

const p42: Person4 = {
  name: "Mark",
  age: 39,
  // 함수 넣기 2
  hello(): void {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

const p44: Person4 = {
  name: "Mark",
  age: 39,
  // 함수 넣기 2
  hello(this: Person4): void {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

// const p43: Person4 = {
//   name: "Mark",
//   age: 39,
//   // 함수 넣기 3 this 사용할 경우 쓸 수 없음
//   hello: (): void => {
//     console.log(`안녕하세요! ${this.name}입니다.`);
//   },
// };

p41.hello();
p42.hello();

export {};
