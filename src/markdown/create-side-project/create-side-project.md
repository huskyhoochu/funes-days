---
title: '완벽주의를 이겨내고 사이드 프로젝트 시작하기'
description: '처음부터 완벽하려고 하지 말고 차근차근 코딩하는 즐거움을 깨우치자...고 스스로를 간신히 설득하기'
date: 2023-04-27T21:30:44+09:00
draft: false
tags: ['rust']
slug: 'create-side-project'
category: 'dev'
---

#### 들어가며

4월 말, '올해는 뭐라도 만들어야지!' 라고 결심한 2023년이 벌써 3분의 1이나 지났다는 걸 깨달은 순간, 겉잡을 수 없는 불안감과 우울감이 나를 사로잡았다. 완벽주의자라는 핑계 속에서, 실수가 두려워 아무것도
시작하지 않고서, 그저 상상만으로 열 손가락이 모자라도록 수많은 프로젝트를 만들었던 나는, 이제 키보드 앞에 앉지 않으면 아무것도 이루어지지 않는다는 걸 뼈저리게 깨달은 5년 차 개발자가 되어 있었다.

이제 어떻게 해야만 할까. 그 순간에도 나는 또 고민만 했다. 그저 폴더를 하나 열어서 프로젝트를 만들고 코드를 치기 시작하면 된다는 걸 알면서 말이다. 하지만 나는 모르는 게 너무 많았다. 오래 전부터 Rust를
이용한 뭔가를 만들고 싶었고, 또 마크다운 파서를 만들고 싶었지만, 메모리 소유권 어쩌고가 뭔지도 아직 이해를 하지 못했고 마크다운 파서에게는 어떤 자료구조가 어울리는지 알지도 못했다. 오류 메시지를 보는 게
무서웠다. 기약없이 구글 속을 헤매는 것도 귀찮았다. 책을 읽으면 새로운 지식이 잡힐 듯 말 듯 눈앞에 어른거렸지만 '배웠다'고 착각한 뒤 책을 덮으면 모든 것들은 신기루처럼 흩어져버렸다.

하던 대로 하는 코딩에만 익숙해진 나, 회사에서 늘 쓰던 프레임워크와 젓가락처럼 익숙해져 버린 배포 방식들이 주는 OK 사인에 취해버린 내겐 더 이상 오류와 버그가 들끓는 학습의 세계로 다시 나아갈 용기가 없어져버린
걸지도 모르겠다. 하지만 이것 한 가지만은 알고 있었다. 컴퓨터의 세계에서 나는 영원히 우물 안 개구리에 불과하리란 사실. 우물 밖으로 나가지 못할 거라면 살기 좋은 우물을 만들어야만 한다는 사실을.

그래서 결국 키보드를 두들기기 시작했다. 물론 도중에 딴짓도 많이 했다. IDE를 굳이 최신 버전으로 다시 설치하고, 컴퓨터 저장공간을 점검하고, 프로젝트 이름을 뭘로 할까 고민하며 npm 사이트를 뒤지고...
하지만 결국 다 마무리했다. 그리고 첫 프로젝트의 첫 Hello World를 작성했다. 이번 글에선 거기까지에 이르렀던 과정을 조금 소개하고자 한다.

#### 프로젝트: 잎새 (Ipsae)

`Ipsae`는 마크다운 파서가 (어떤 것이 됐든) 트리 구조를 가질 거라는 짐작 때문에, '나무(tree)'를 이루는 가장 말단 조직인 '잎새(leaf)'를 음역한 것이다. 짓고 보니 외국인이 발음하기도 쉬워
보였고 결코 중복되는 프로젝트가 없어 보이기도 했다. 일단 npm에선 그랬다. 물론 이번 프로젝트는 node.js로 제작할 생각이 없었다. 앞서 말했듯 C와 C++를 대체할 만큼 강력하고 안전하다는 시스템 프로그래밍
언어 Rust를 써 보고 싶었다. 그래서 rustup을 설치하고 GoLand를 설치한 뒤 Rust 플러그인을 설치하고... 설치 중독자가 된 것처럼 설치만 열심히 했다. 그리고 cargo library 프로젝트를
새로 만들었다.

#### 첫 코드

...그리고 세 시간 정도를 들여 50줄 남짓의 첫 코드를 작성했다. 다음은 첫 코드의 전문이다.

```rust
use std::str::FromStr;

use regex::Regex;

#[derive(Debug, PartialEq)]
pub enum MarkdownType {
    H1,
    H2,
    H3,
    P,
    Strong,
    Italic,
}

#[derive(Debug, PartialEq)]
pub struct Markdown {
    pub style: MarkdownType,
    pub content: String,
}

impl FromStr for Markdown {
    type Err = std::str::Utf8Error;

    fn from_str(line: &str) -> Result<Self, Self::Err> {
        let h1_regex = Regex::new(r"^#\s").unwrap();

        if h1_regex.is_match(line) {
            return Ok(Markdown {
                style: MarkdownType::H1,
                content: line.to_string(),
            });
        }

        Ok(Markdown {
            style: MarkdownType::P,
            content: line.to_string(),
        })
    }
}

pub fn render(origin_string: String) -> Vec<Markdown> {
    origin_string
        .split('\n')
        .into_iter()
        .map(|line| match Markdown::from_str(line) {
            Ok(markdown) => markdown,
            Err(_) => Markdown {
                style: MarkdownType::P,
                content: line.to_string(),
            },
        }).collect()
}
```

굳이 문법을 모르더라도 이해가 갈 정도로 단순한 코드이다. `render` 함수를 통해 원본 문자열을 받아 줄바꿈이 나올 때마다 자르고, (`into_iter`는 일단 무시하자) `Markdown` 구조체에
정의한 `from_str` 함수로 문자열을 읽어들인다. 이때 h1 정규표현식이 h1 문장을 발견하면 h1 구조체로 입혀준다는 내용이다.

#### 며칠을 꼬박 쉬기

여기까지 작성하고 나서 닷새를 쉬었다. 단순히 match 표현식으로 원하는 문자열을 일일히 찾아내는 것 이상으로 좋은 패턴으로 발전시켜야 했는데, 방법을 몰랐다. 어렴풋이 아는 거라곤 다른 타입스크립트 관련 책에서
마크다운 파서를 만들 때 방문자 패턴을 사용했다는 것뿐이었다. 그걸 내 코드에 적용하고 싶었지만 선뜻 책으로 손이 가질 않았다. 고질적인 완벽주의 병이 다시 도진 것이었다. 하지만 코드는 생물체와 비슷하다고 했던가,
한번 만들어지기 시작한 코드는 스스로를 완성시켜달라고

#### 리팩토링: 방문자 패턴

방문자 패턴이 어떤 것인지는 다른 훌륭한 문서들에 많이 나와 있다.

참조: [비지터: Refactoring Guru](https://refactoring.guru/ko/design-patterns/visitor)

그래도 이 글에서 조금이나마 기술적인 지식을 얻고자 하는 분들을 위해 나름대로 요약하자면, 방문자 패턴이란 내가 실행하고자 하는 알고리즘과 실행 주체를 분리하고자 할 때 쓰는 디자인 패턴이다.

마크다운 파서를 예로 들면, 수많은 종류의 패턴을 지닌 문장을 읽어들이면서 이것들을 규칙에 맞게 분류해야 하는 코드가 필요하다고 가정하자. 이때 코드는 h1 태그를 분별할 수 있는 규칙과 strong 태그를 분별할
수 있는 규칙, hr을 분별할 수 있는 규칙 등등 마크다운에 필요한 수많은 분별 규칙들을 보유해야 할 것이다. 그런데 이 많은 규칙을 수십 개의 if else 구문 속에 녹여버린다면? 규칙의 수정이나 확장은 매우
어려워질 것이다.

방문자 패턴은 방문자(visitor)라는 객체 하나가 각각의 알고리즘을 갖고 있는 수많은 개별 노드를 순회하면서 노드 안에 있는 알고리즘을 실행함으로써 조건문으로부터 해방되도록 도와준다. h1 태그를 분별하는 규칙
단 하나만을 갖는 노드와 strong 태그 분별 노드, hr 태그 분별 노드들의 배열이 순회되는 와중에 visitor 객체가 주입되고, 각 노드는 accept라고 불리는 공통 인터페이스 메서드를 visitor에게
실행하도록 위임하면서 visitor가 모든 규칙들을 둘러보며 하나의 문자열이 어떤 규칙과 일치하는지 살펴보도록 도와준다.

다음은 새로 고친 코드 조각들의 일부분이다.

```rust
use regex::Regex;

use crate::parser::parse::Visitor;

#[derive(Debug, PartialEq, Copy, Clone)]
pub enum MarkdownType {
    H1,
    H2,
    H3,
    P,
    Strong,
    Italic,
}

#[derive(Debug, PartialEq)]
pub struct Markdown {
    pub style: MarkdownType,
    pub content: String,
}

pub trait Visitable<V: Visitor> {
    fn accept(&self, visitor: V, content: &str) -> Result<Markdown,  &'static str>;
}

pub struct MarkdownVisitable {
    pub style: MarkdownType,
    pub regex: Regex,
}

impl<V: Visitor> Visitable<V> for MarkdownVisitable {
    fn accept(&self, visitor: V, content: &str) -> Result<Markdown,  &'static str> {
        visitor.visit(self.regex.clone(), self.style.clone(), content)
    }
}
```

`MarkdownVisitable` 구조체에 정의된 `accept` 함수를 보자. 이 함수 visitor 객체로 하여금 visit 함수를 실행하게 하면서 자신의 regex와 style, 그리고 content를
주입하여 문자열의 판단을 visitor에게 위임하고 있다.

```rust
use regex::Regex;

use crate::{Markdown, MarkdownType};

pub trait Visitor {
    fn visit(&self, regex: Regex, style: MarkdownType, content: &str) -> Result<Markdown, &'static str>;
}

#[derive(Copy, Clone)]
pub struct VisitorBase;

impl Visitor for VisitorBase {
    fn visit(&self, regex: Regex, style: MarkdownType, content: &str) -> Result<Markdown, &'static str> {
        if regex.is_match(content) {
            let split_line: Vec<&str> = regex.split(content).collect();
            return Ok(Markdown {
                style: style.into(),
                content: split_line[1].to_string(),
            });
        }

        Err("")
    }
}
```

그리고 `Visitor` 인터페이스는 `accept` 함수에게 위임받은 regex와 style, content를 가지고 해당 문자열이 해당 정규표현식과 맞아떨어지는지를 평가한다. 만일 일치한다면 해당
문자열을 `Markdown` 구조체로 감싸고 일치하지 않는다면 조용한 오류를 발생시킨다. 곧, 다른 패턴의 마크다운 정규표현식으로 문자열을 넘겨버린다는 뜻이다.

클라이언트 코드를 보자.

```rust
pub fn render(origin_string: String) -> Vec<Markdown> {
    let visitor = VisitorBase;

    let markdown_h1 = MarkdownVisitable {
        style: MarkdownType::H1,
        regex: Regex::new(r"^#\s").unwrap(),
    };

    let markdown_h2 = MarkdownVisitable {
        style: MarkdownType::H2,
        regex: Regex::new(r"^#{2}\s").unwrap(),
    };

    let iterator = StringIterator::create(visitor, vec![markdown_h1, markdown_h2]);

    iterator.parse_str(origin_string)
}
```

여기 보이는 `visitor`가 처음 말한 방문자이고, `markdown_h1`과 `markdown_h2`가 각 마크다운 패턴을 감별할 수 있는 정규표현식을 지닌 노드 객체를 말한다.
이것들이 `StringIterator`에 다함께 들어가 순회를 시작하면, `visitor`가 줄바꿈 단위로 분리된 문자열과 함께 모든 패턴을 훓으며 해당 문자열이 어떤 노드와 일치하는지를 파악하는 것이다. 이제
마크다운 규칙을 추가하고 싶을 때마다 나는 그저 객체를 하나씩 늘리며 `Iterator` 배열에 노드 객체를 추가하기만 하면 되는 것이다.

#### 마치며: 다시 한번 며칠을 꼬박 쉬면서

이제 해야 할 일은 다른 여러 패턴을 추가하는 것, 그리고 단순히 배열을 리턴하는 것이 아닌 런타임 동안에 주입받은 문자열을 트리 구조로 보관하면서 문자열의 변화에 따라 변화가 발생한 부분만 부분 업데이트 하는 것,
이 파서 트리를 html로 변환하는 것 등등 한도 끝도 없다. 그런데 완벽주의자인 나는 또다시 쉬고 있다. 이번엔 며칠이나 쉬게 될까? 이 불안한 휴식기를 줄일 수 있는 방법 같은 건 없는 걸까. 그래도 이제는
조금의 용기가 나긴 한다. 0에서 1로 나아가는, 가장 먼 길을 지나왔으니까.

프로젝트가 얼추 윤곽을 띄게 되면 여러분들께 공개하고 싶다. 그전에 크레이트 모듈을 퍼블리싱하는 법부터 배우고 와야겠다.
