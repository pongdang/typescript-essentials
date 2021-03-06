# 4 day

## 작성자와 사용자의 관점으로 코드 바라보기

### 타입스크립트의 타입 시스템

- 컴파일러에게 사용하는 타입을 명시적으로 지정
- 컴파일러가 자동으로 타입을 추론

자바스크립트는 함수의 input 타입을 알 수 없기 때문에 함수 사용법에 대해 오해를 야기시킨다.
타입스크립트를 사용하면 이러한 오해를 막을 수 있다.

(`noImplicitAny` 옵션이 켜져있다고 가정)
타입스크립트 컴파일러가 자동으로 타입을 추론하게 놔두는 경우, 문제가 생기면 컴파일 에러를 발생시켜 명시적으로 타입을 지정하도록 유도한다.
주의할 점 : 모든 타입에 number와 undefined가 포함되어 있기 때문에 예상치 못한 동작을 마주하게 될 수도 있다.

`strictNullChecks` 옵션을 켜면 모든 타입에 자동으로 포함되어 있는 `null` 과 `undefined` 를 제거해준다

`noImplicitAny` 옵션을 켜면 함수 내에서 모든 코드가 값을 리턴하지 않으면 컴파일 에러를 발생시킨다.

## Structural Type System vs Nominal Type System

Structural Type System : 구조가 같으면 같은 타입이다.
Nominal Type System : 구조가 같아도 이름이 다르면, 다른 타입이다.

타입스크립트는 Structural Type System 방식을 채택하여 사용되고 있다.

## 타입 호환성 Type Compatibility

- 서브 타입은 슈퍼 타입에 할당이 가능하다
- 같거나 서브 타입인 경우 할당이 가능하다 : 공변
- 함수의 매개변수에 지정한 타입과 입력하는 타입이 같을 때 할당이 가능하고 또 매개변수에 지정한 타입에 슈터타입도 할당이 가능하다 : 반병

## 타입 별칭 Type Alias

- 만들어진 타입의 refer로 사용하는 것이다.
- 타입을 만드는 것은 아니다.
