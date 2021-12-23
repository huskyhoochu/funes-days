import React from 'react';
import { Link } from 'gatsby';
import StaticLayout from '@/layout/static';
import { css } from '@emotion/css';
import { Body1Class } from '@/styles/typography';

const NotFoundClass = css`
  word-break: keep-all;

  p {
    ${Body1Class};
  }

  a {
    ${Body1Class};
    display: inline-block;
    margin-block: 32px;
    text-decoration: underline;
  }
`;

const NotFoundPage = () => {
  return (
    <StaticLayout title="404 Not Found">
      <div className={NotFoundClass}>
        <h1>404 Not Found</h1>
        <h4>“나의 기억력은 마치 쓰레기 하차장과도 같아요.”</h4>
        <p>- [기억의 천재 푸네스] 본문 중에서 -</p>
        <Link to="/">기억의 원천으로 돌아가기</Link>
      </div>
    </StaticLayout>
  );
};

export default NotFoundPage;
