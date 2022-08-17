---
title: '2022년 상반기 근황'
description: '이직과 동시에 폭풍 코딩에 시달렸습니다'
date: 2022-08-17T14:41:05+09:00
draft: false
tags: ['diary']
slug: 'diary-2022'
category: 'journal'
---

#### 이직 - 노써치

2022년 6월, [가전제품 고민? 검색은 그만 노써치!](https://nosearch.com) 에 입사해 두 달간 정신없이 홈페이지 리뉴얼 작업에 매진했다.

프론트 리뉴얼의 가장 큰 목적은 성능 개선이었다. Next.js와 React Query를 조합해 최대한의 반응속도를 이끌어내고자 했고, SSR & SSG를 통해 SEO 개선은 물론 Layout Shifting도 방지하고자 했다.

###### 개선 내역

- Next.js 버전을 12로 올리면서 [SWC 트랜스파일러](https://nextjs.org/docs/advanced-features/compiler#why-swc)를 사용할 수 있게 되자 기존 5-10분에 달하던 빌드 타임이 2분 내외로 감소했다.
- getStaticProps 단계에서 [React Query를 이용한 prefetch](https://tanstack.com/query/v4/docs/guides/ssr#using-hydration)를 활용해 SSG 페이지를 최대한 많이 제작했다.
- 미처 제작할 여력이 없는 기능은 iframe을 이용해 기존 고도몰 페이지를 가져와 활용했다. 페이지 전체를 가져오는 경우도 있지만, 우리가 필요로 하는 컴포넌트 영역만 crop 해서 들고 오는 경우도 있었다.

#### 개발자 스터디 - React hook, React Query

새로 알게 된 개발자 친구들과 React hook의 원리와 React Query 라이브러리에 대해 공부했다. 이때 공부한 내용도 곧 정리해서 올릴 계획이다.

#### 오픈소스 작업 - 마크다운 파서 Ipsae

[num-to-korean](https://www.npmjs.com/package/num-to-korean)의 타입스크립트 지원 오류 이슈를 해결한 뒤 새로운 오픈소스를 제작하기로 했다.

마크다운 파서와 리액트 클라이언트를 직접 제작해보는 게 오랜 꿈이어서, 이참에 냅다 저장소부터 팠다.

저장소는 [ipsae - a minimal markdown parser for DIY lover](https://github.com/huskyhoochu/ipsae) 이곳에 세워놓긴 했는데 아직까진 빌드업 단계에 불과하다.

이름인 '잎새(Ipsae)'는 마크다운 파서가 갖는 트리 구조의 leaf node를 한글로 표현하면 예쁘겠다 싶어서 정하게 됐다.

#### 이 밖에는 수많은 시간 낭비를 저질렀습니다...

거창하게 뭔갈 한 것처럼 글을 썼지만, 지난 두 달은 어느 때보다도 시간낭비를 많이 한 시간이기도 했다. 의미없는 유튜브 서핑으로 몇 시간을 날렸는지 모르겠다. 타고난 완벽주의 탓에 선뜻 해야 할 일을 시작하지 못하는 나쁜 버릇이 있기 때문이다. 얼마 남지 않은 하반기 몇 달이라도 생산성 있게 보내야 할 것 같다. (제발!)
