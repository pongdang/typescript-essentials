interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

const p31: Person3 = {
  name: "Mark",
  age: 39,
};

const p32: Person3 = {
  name: "Anna",
  sisters: ["Sung", "chan"],
};

const p33: Person3 = {
  name: "Bob",
  father: p31,
  mother: p32,
};

hello3(p33);

export {};
