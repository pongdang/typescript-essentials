interface IPerson2 {
  name: string;
  age?: number;
}

// interface 상속
interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "Mark",
  city: "Seoul",
  age: 30,
};

// HTMLElement
// HTMLDivElement extends HTMLElement

export {};
