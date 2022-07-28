---
title: 'Reflect란 무엇일까?'
description: '객체 관련 메서드를 안전하게 실행할 수 있는 새로운 방법'
date: 2022-07-28T11:47:57+09:00
draft: true
tags: ['javascript']
slug: 'what-is-reflect'
category: 'dev'
---

#### 먼저 Proxy를 알아야 한다

자바스크립트 Proxy는 대상 객체의 기능을 가로채 새로운 행동을 정의할 때 쓰이는 객체다. Proxy는 대상 객체를 일종의 저장소처럼 사용하고, trap 메서드를 이용해 객체의 기본 명령을 재정의한다.

###### trap?

trap은 interceptor와 함께 운영체제에서 활용하는 개념 중 하나로, 사용자 프로세스의 예외 (잘못된 메모리 액세스, 0으로 나누기 등등)에 의해 트리거되는 동기식 인터럽트를 뜻한다. 자바스크립트 Proxy에서 말하는 trap은 운영체제 trap의 컨셉만 활용한다고 보면 된다.

###### example

#### Reflect 주요 기능 알아보기

#### 이미 다 있는 기능인데 굳이 저걸 써야 하나요?

#### 참고

- [JavaScript Proxy. 근데 이제 Reflect를 곁들인 | TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20210413)
- [Comparing Reflect and Object methods - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)
- [What Is the Difference Between Trap and Interrupt? | Baeldung on Computer Science](https://www.baeldung.com/cs/os-trap-vs-interrupt)
