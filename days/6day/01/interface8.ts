interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "Mark",
  gender: "male",
};

// 읽기 전용 프로퍼티라서 수정 불가능
// p81.gender = "female";
export {};
