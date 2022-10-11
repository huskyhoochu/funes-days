---
title: '타입스크립트에서 타입 별칭과 인터페이스의 차이 알기'
description: '타입스크립트에서 가장 중요한 두 개념을 어떻게 활용하면 좋을지 정리했습니다'
date: 2022-10-11T18:55:05+09:00
draft: false
tags: ['typescript']
slug: 'difference-of-type-alias-and-interface-in-typescript'
category: 'dev'
---

#### 들어가며

우리가 타입스크립트를 사용하는 이유는 무엇일까? 동적 타입으로 된 자바스크립트에 정적 타입 체킹 시스템을 추가함으로써 보다 안정적인 런타임 환경을 기대하는 것이다. 또한 객체지향 프로그래밍, 함수형 프로그래밍 등 여러 프로그래밍 패러다임을 손쉽게 이식할 수 있다는 장점이 있기 때문이기도 하다.

타입스크립트에서 가장 많아 사용되는 키워드는 단연 `type`과 `interface`라고 할 수 있겠다. 이들은 객체나 문자열, 심벌 등등 개발자가 타입 집합으로 지정하고 싶은 모든 요소들을 하나의 개념으로 묶어주는 역할을 한다.

그렇다면 여기서 한 가지 질문이 나올 수 있다. `type`과 `interface`는 공통점이 많아 보이는데 어째서 따로 개발했을까? 각 개념은 어떤 프로그래밍 개념에서 파생된 것일까? 두 개념을 효율적으로 나눠 쓰는 원칙은 어떤 것이 있을까?

#### 객체지향 프로그래밍에서의 인터페이스 정의

객체지향 프로그래밍에서 인터페이스란 객체가 해낼 수 있는 액션에 대한 정의를 일컫는 개념이다. 예를 들어, ‘전구’처럼 작동하는 어떤 것이 있다면, 그것은 turn_on() 함수 혹은 turn_off() 함수를 지녀야 할 것이며, ‘전구’가 켜졌는지 꺼졌는지를 결정하는 프로퍼티의 존재를 지시할 것이다. 이처럼 인터페이스의 목적이란 컴퓨터로 하여금 자신의 프로퍼티를 적용하도록 허락하고, 인터페이스 타입을 지닌 객체가 어떤 함수를 지녀야만 하는지를 알게 하는 것이다.

인터페이스와 클래스를 혼동하지 말자. 인터페이스는 선언 당시에 변수를 포함할 수 없다. 인터페이스는 액션에 대한 정의만 내릴 수 있으며, 액션에 대한 구체적인 구현이나 데이터를 포함하지 않는다. 인터페이스는 클래스라는 구체적인 객체를 통해 구현(implementation)될 때 클래스가 어떤 메서드를 지녀야 하는지를 지시해줄 뿐이다.

그렇다면 왜 굳이 인터페이스를 사용해야 하는 것일까? 인터페이스는 어떤 강점을 갖고 있는 것일까? 하나의 인터페이스로 구현된 서로 다른 클래스가 있다고 치자. 어떤 관점에서 그들은 동일하다고 볼 수 있다. 예를 들어 ‘Vehicles’라는 인터페이스를 통해 ‘Car’와 ‘Truck’ 클래스를 구현했다면, 둘은 프로그램의 관점에서 동일한 ‘Vehicles’로 인식될 수 있다. 이 가능성은 우리를 다형성(Polymorphism)이라는 개념으로 이끌어 간다. 다형성이란 컴파일 시점에 우리가 어떤 객체의 실제 타입을 모두 정확히 알 수는 없으리라는 아이디어에서 시작한다. ‘Vehicles’ 인터페이스로 구현된 클래스들의 배열이 있다고 상상해보자. 우리는 ‘vehicles[i]’ 안에 담긴 객체가 ‘Car’인지 ‘Truck’인지, 심지어 ‘Bicycle’인지 알 수 없다. 다형성 개념이 없는 프로그래밍 언어라면, 우리는 이 객체에 대해 어떤 행위도 할 수 없을 것이다.

다형성 개념 아래서, 컴퓨터는 각자가 무엇인지(‘Vehicles’로 구현된 클래스인지) 기억하고 ‘Vehicles’에 정의된 메서드를 실행할 수 있게 된다. 다형성은 개발자가 처할 수 있는 수많은 예외적 상황으로부터 많은 해결책을 제공해 왔다.

```
// pseudo code
// 모든 탈 것은 Vehicle 인터페이스로 구현된 클래스이다.
var vehicle1 : Vehicle = new Car();
var vehicle2 : Vehicle = new Truck();
var vehicle3 : Vehicle = new Bicycle();

var vehicles : Array = new Array();

vehicles.push( new Car() );    // 우리의 프로그램이 자동차 시뮬레이션 게임이라고 가정하자.
vehicles.push( new Car() );    // 우리가 만든 자동차와 트럭이 탈 것 배열에 담긴다.
vehicles.push( new Truck() );  // 보통이라면 우리는 자동차, 트럭 등등의 각 탈 것을 서로 다른 배열에 넣을 것이다.
vehicles.push( new Car() );    // 하지만 그렇게 할 수 없는 상황이 있다고 치자.
vehicles.push( new Truck() );
vehicles.push( new Truck() );
vehicles.push( new Truck() );
vehicles.push( new Car() );
vehicles.push( new Truck() );
vehicles.push( new Car() );
vehicles.push( new Bicycle() ); // 자전거도 탈 것에 들어간다고 치자...
vehicles.push( new Car() );


// 우리는 모든 탈 것을 작동시키길 원한다.
// 우리는 Generic 프로그래밍을 사용할 수 있다.
// 왜냐면 이들은 모두 Vehicles이므로, 우리는 배열 내 객체가 정확히 무엇인지 신경 쓸 필요가 없다!

for each (var item : Vehicle in vehicles ) {
    item.start_engine();
    item.drive();
}
```

#### 타입스크립트에서의 인터페이스

인터페이스의 개념은 타입스크립트에서도 동일하게 사용된다. 다만 타입스크립트에서 자바스크립트로 트랜스파일되는 동안에 코드에서 완전히 사라져버린다는 차이가 있을 뿐이다.

#### 타입스크립트에서의 타입의 존재 이유

인터페이스를 통해 타입의 추상화와 다형성 구현이 모두 가능한데, 대체 왜 타입스크립트에는 `type`이라는 키워드가 따로 존재하는 걸까?

타입스크립트 공식 문서에서는 이를 `type alias`, 즉 ‘타입 별칭’이라는 표현으로 설명하고 있다. ‘타입 별칭’이란 원시 타입이나 유니언 타입, 튜플 등등 모든 변수에 자유롭게 활용할 수 있는 커스텀 타입을 말한다.

```typescript
type Second = number;

let timeInSecond: number = 10;
let time: Second = 10;
```

#### 인터페이스와 타입의 개념 차이

타입 별칭은 인터페이스의 거의 모든 기능을 구현할 수 있지만, 인터페이스가 속성을 확장할 수 있는 것과 달리 타입 별칭은 확장이 불가능하다.

’확장’이라는 용어 또한 타입 별칭과 인터페이스는 약간 다르다. 인터페이스는 ‘extends’라는 키워드로 자신에게 주어진 메서드와 변수 정의의 범위 자체를 늘려나갈 수 있지만, 타입 별칭은 집합 연산의 개념으로 (‘&’, ‘|’) 교집합, 합집합의 개념으로 자신의 범위를 늘려간다.

###### 인터페이스의 경우

```typescript
// 인터페이스는 스스로를 확장할 수 있다

interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
const bear = getBear();
bear.name;
bear.honey;
```

###### 타입 별칭의 경우

```typescript
// 타입 별칭은 교집합(intersection)을 통해 자신을 확장한다

type Animal = {
  name: string;
};
type Bear = Animal & {
  honey: Boolean;
};
const bear = getBear();
bear.name;
bear.honey;
```

#### 두 개념을 어떻게 구분지어 사용해야 할까?

이미 만들어진 프로젝트에서 작업해야 한다면, 그 프로젝트가 주로 사용하는 쪽으로 일관되게 따라가는 편이 좋다. 그러나 아직 스타일이 만들어지지 않은 새 프로젝트라면, 어떤 코드가 내부에서만 사용될지, 외부 API로 노출될지를 고려해서 설계하는 편이 바람직하다. 사용자 입장에선 외부 API가 인터페이스로 열려 있어야 새로운 필드를 병합할 때 유리할 것이다. 그러나 내부에서만 쓰일 코드가 선언 병합에 열려 있는 경우는 좋지 않다. 타입 별칭은 이럴 때 사용하는 게 좋을 것이다.

#### 참조

[OOP - Interfaces](https://www.cs.utah.edu/~germain/PPS/Topics/interfaces.html)

[TypeScript: Documentation - Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)

[알라딘: 이펙티브 타입스크립트](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=273193135)
