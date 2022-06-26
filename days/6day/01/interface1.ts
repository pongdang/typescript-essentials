interface PersonInterface {
  name: string;
  age: number;
}

function hello2(person: PersonInterface): void {
  console.log(`Hello, ${person.name}, you are ${person.age} years old.`);
}

const p1: PersonInterface = {
  name: "Mark",
  age: 39,
};

hello2(p1);
export {};
