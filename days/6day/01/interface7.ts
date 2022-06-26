interface HelloPerson {
  (name: string, age?: number): void;
}

// age에는 number와 undefined 의 타입을 가지고 있는데 number를 넣으면 안 됨
// helloPerson 함수는 새로 작성한 함수보다 구현체인 HelloPerson과의 관계를 더 중요시하게 생각해서 그 구현체의 타입을 따라감

// const helloPerson: HelloPerson = function (name: string, age: number) {
//   console.log(`안녕하세요! ${name}입니다.`);
// };

// 함수 실행 때의 타입 체크는 interface에서만 한다.
// helloPerson("Mark", 39);

export {};
