# 6 day

## Interfaces

- 타입을 만들어내는 방식
- 컴파일 타임에만 필요
- 컴파일 타임 때 문제가 없는지 관계를 규명해서 체크해주는 역할을 함

### optional property

- ? 물음표 넣기 (명시한 type이거나 type이 undefined가 될 수 있다는 뜻)
- [index] 어떤 프로퍼티라던지 추가할 수 있음

### class interface

`implements` 키워드를 사용하면 interface의 내용을 바탕으로 class를 만들 수 있다.

### extends interface

`extends` 키워드를 사용하여 interface를 상속할 수 있다.

### function interface

### readonly property

interface 안에서 `readonly` 키워드를 사용하면 프로퍼티의 값을 수정하지 못한다.

### type alias vs interface

- type alias : 타입에 별명 붙여줌, 타입 부르는 이름  
  `type` 키워드 사용

  - 함수
    `type 함수이름 = 함수내용`
  - 배열
    `type 배열이름 = string[]`
  - & 키워드

- interface: 타입을 생성하는 방법
  `interface` 키워드 사용

  - 함수
    `interface 이름 { 함수 이름 : 함수내용}`
  - 배열
    `interface 이름 {[index: number]: string}`
  - extends

## Class

- object를 만드는 설계도
- class도 사용자가 만드는 타입 중 하나
- `class` 키워드 사용하여 클래스 만들 수 있음
- class 이름의 첫글자는 보통 대문자
- `new` 키워드 사용하여 class를 통해 object를 만들 수 있음
- `this` 를 이용해서 만들어진 object를 가리킬 수 있음
- es5의 경우 js로 컴파일되면 function 으로 변경된다.

### 생성자와 초기화

- constructor 에는 async를 사용할 수 없다.
  - 만약 사용하려면 별도의 함수를 만들고, ! 를 붙여서 뒤늦게 초기화된다는 것을 명시해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 `!` 를 붙여서 위험을 표현한다.
- 생성자 함수가 없으면 디폴트 생성자가 불린다
- 생성자 함수를 하나라도 만들면 디폴트 생성자는 사라진다.
- 클래스의 프로퍼티가 정의되어 있는데 값을 할당하지 않으면 `undefined` 이다.

### 접근 제어자

- `public` 키워드를 사용하면 외부에서 접근 가능하다는 뜻이다.

  - 기본값은 `public`
  - 생성자, 프로퍼티, 메서드에 사용가능

- 깂이 class 내부에서만 접근 가능하게 하려면 `private` 키워드를 사용한다.

  - `new` 키워드 사용 못함
  - 보통 밖에서 부르지 않을 값의 프로퍼티, 메서드 이름 앞에 `_`를 붙인다. `_프로퍼티이름`

### 생성자의 파라미터를 받아서 클래스의 프로퍼티로 초기화

`public constructor(public name: string, private age: number) {}`
축약형으로 쓸 수 있다.

### Getters & Setters
