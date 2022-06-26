// interface Person1 {
//   name: string;
//   age: number;
// }

interface Person2 {
  name: string;
  // 있어도 되고 없어도 될 때 ? 사용
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

export {};

hello2({ name: "Mark", age: 39 });
hello2({ name: "Anna" });
