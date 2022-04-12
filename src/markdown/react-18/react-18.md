---
title: 'react v18 살펴보기'
description: 'react의 방향성과 미래를 엿보는 시간'
date: 2022-04-12T18:54:03+09:00
draft: false
tags: ['framer']
slug: 'react-18'
category: 'dev'
---

#### 들어가며

2022년 3월 29일, 세계에서 가장 유명한 프론트엔드 라이브러리의 새 버전이 공개되었다.

[React v18.0 - React Blog](https://reactjs.org/blog/2022/03/29/react-v18.html)

버전 18에서 가장 강조된 부분은 '동시성'이라고 볼 수 있다. 리액트는 인터럽트 가능한 렌더링 매커니즘을 구현하기 위해 내부를 재설계했으며, 크게 Suspense, Transitions, 스트리밍 서버 렌더링이리는 세 가지의 기능을 새로 출시했다. 이미 Suspense와 lazy에 대해서는 예전부터 소개되어 왔으므로 여기서는 생략하겠다. 스트리밍 서버 렌더링 기능도 18.x 마이너 업데이트에서부터 정식 지원을 할 것이라고 하니 그 기능이 정식 지원될 때 다시 소개하기로 하겠다. 이 포스트에서는 Transitions에 대한 개넘을 자세히 소개하고 거기에 연관된 hooks를 소개해보도록 하겠다.

#### 동시성 리액트

동시성에 대한 설계는 큰 변화이므로 기존 사용자가 버전 18로 기존 코드를 마이그레이션하기 위해서는 보다 세심한 디버깅 전략을 필요로 한다. `<StrictMode>` 컴포넌트를 루트 엘리먼트에 감싸는 것으로 여러 버그를 잡아낼 수 있을 것이다.

#### 신규 기능

###### Automatic batching

자동 Batch란 React가 여러 state를 동시에 업데이트하는 상황에서 단 한번의 리렌더링을 하게 해 주는 기능이다. 자동 batch가 있기 전에는 리액트의 이벤트 핸들러 내부에서만 여러 state 업데이트 시 렌더링 횟수 최적화를 할 수 있었으나, 버전 18부터는 Promise, setTimeout, 네이티브 이벤트 핸들러 안에서도 렌더링 횟수 최적화를 가능케 했다.

```jsx
// Before: 리액트의 이벤트만 batch 가능
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 리액트는 state를 업데이트하기 위해 두 번 렌더링을 발생시킴
}, 1000);

// After: timeout, Promise, 네이티브 이벤트 핸들러 안에서도 batch 가능
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 리액트는 마지막에 단 한번 렌더링을 함
}, 1000);
```

###### transitions: 전환 업데이트

전환 업데이트(transition update) 긴급 업데이트(타이핑, 클릭, 입력 등등 유저가 발생시키는 물리적인 변경 이벤트)와 구별되는 변경 업데이트를 지칭하기 위한 리액트의 새로운 컨셉이다.

긴급 업데이트는 조금이라도 렌더링이 늦어지면 유저가 '무언가 잘못되었다'고 느낄 법하다. 하지만 전환 업데이트는 즉각적인 변화를 요구하는 게 아니기 때문에 지연을 일으켜도 상관이 없다.

검색 창을 예로 들면, 검색 창에서 유저가 입력하는 글자 값의 변화는 '긴급 업데이트'로 분류되어 즉각적으로 업데이트되어야 한다. 하지만 검색 글자에 따라 변화하는 추천 검색어 드롭다운 영역은 '전환 업데이트'로 분류되어 보다 천천히 업데이트되어도 상관없는 영역이다. 기존 리액트에서는 두 가지 업데이트를 명시적으로 구분할 수 있는 방법이 없었다. 이제는 `startTransition`이라는 메서드를 이용해 전환 업데이트를 구분할 수 있다. 전환 업데이트에 등록된 업데이트 함수는 긴급 업데이트보다 낮은 우선순위를 가지며 자동으로 인터럽트가 가능해진다. **이것이 버전 18에서 구현하고자 하는 동시성 리액트의 한 면모이다. 동시에 처리되어야 할 여러 업데이트가 우선순위에 따라 스케줄링되고 '인터럽트' 될 수 있는 환경을 만드는 것이다.**

<iframe src="https://codesandbox.io/embed/empty-waterfall-1cxjer?fontsize=14&hidenavigation=1&theme=dark"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
title="empty-waterfall-1cxjer"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

###### 새로운 클라이언트, 서버 렌더링 API

버전 18은 동시성 기능을 지원하기 위해 기존의 `render` 메서드 대신 `react-dom/client` 패키지에서 `createRoot` 메서드를 신규 지원해주고 있다. 기존 `render` 메서드는 deprecated된다. hydrate 메서드도 `hydrateRoot` 메서드로 지원된다.

```jsx
import * as ReactDOM from 'react-dom/client';

// render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// hydrate
const root = ReactDOM.createHydrate(document.getElementById('root'));
root.render(<App />);
```

#### 신규 hooks

###### useId

`useId`는 dom을 위한 unique id를 만드는 hook이다. (리스트 요소를 식별하는 key 대신 사용할 수는 없다) 이는 서버와 클라이언트의 미스매치를 방지하기 위해 만들어진 전략이다.

[공식 docs](https://reactjs.org/docs/hooks-reference.html#useid)

```jsx
function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
}
```

###### useTransition

위의 비밀번호 예시에서 보여준 것처럼, `useTransition`은 `startTransition` 메서드를 호출하는 hook으로 쓰인다.

[공식 docs](https://reactjs.org/docs/hooks-reference.html#usetransition)

###### useDeferredValue

`useDeferredValue`는 전환 업데이트에 쓰이는 값을 저장하는 hook이다. 만일 긴급 업데이트에 의한 리렌더링이 발생할 시, `useDeferredValue`는 미리 복사한 값을 임시로 리턴한 뒤 전환 업데이트가 이뤄지는 시점에 값을 새로 평가해 다시 리턴한다. 즉 값의 재산출을 지연시킨다. 이 hook은 리액트 본연의 스케줄링(긴급 업데이트 -> 전환 업데이트로 이어지는 흐름)에 따라 값을 산출받을 수 있다는 이점이 있으며 fallback 컴포넌트를 예기치 않게 트리거하지 않을 수 있게 해 준다.

[공식 docs](https://reactjs.org/docs/hooks-reference.html#usedeferredvalue)

```jsx
const deferredValue = useDeferredValue(value);
```

정리하자면, **`useTransition`이 효과에 대한 인터럽트를 만들어준다면, `useDeferredValue`는 값에 대한 인터럽트를 만들어 준다.**

긴급 업데이트 동안 자식 컴포넌트들이 리렌더링되는 것을 막고자 한다면, `React.memo` 혹은 `React.useMemo`를 사용하여 메모이제이션을 해 주고 dependencies에 `deferredValue`를 등록하자.

```jsx
function Typeahead() {
  const query = useSearchQuery('');
  const deferredQuery = useDeferredValue(query);

  // Memoizing tells React to only re-render when deferredQuery changes,
  // not when query changes.
  const suggestions = useMemo(
    () => <SearchSuggestions query={deferredQuery} />,
    [deferredQuery],
  );

  return (
    <>
      <SearchInput query={query} />
      <Suspense fallback="Loading results...">{suggestions}</Suspense>
    </>
  );
}
```

다음과 같이 `deferredQuery`를 의존성으로 삼는 `useMemo` 컴포넌트를 만들면, 해당 자식 컴포넌트는 `query`가 바뀌자마자 긴급 업데이트와 함께 렌더링되는 것이 아니라 긴급 업데이트가 끝난 후 `useDeferredValue`에 의해 새 값이 평가된 이후에 `deferredQuery` 값이 변경되면서 그 이후에 리렌더링된다. 이는 debouncing이나 throttling의 효과를 가져온다.

###### useSyncExternalStore

`useSyncExternalStore` hook은 외부 저장소 값을 읽어들이고 구독할 때에 사용된다. 외부 저장소 값의 변화를 추적하여 리액트 동시성 스케줄링에 대응하고자 할 때 사용한다.

(개인적으로 이 hook은 상태 저장소 라이브러리들이 지원해줘야 할 것 같다. 개발자가 직접 사용하는 예는 별로 없을 것 같다)

#### 참고

[React 18을 준비하세요. - 최철헌](https://medium.com/naver-place-dev/react-18%EC%9D%84-%EC%A4%80%EB%B9%84%ED%95%98%EC%84%B8%EC%9A%94-8603c36ddb25)
