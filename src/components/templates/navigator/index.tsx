import { Link } from 'gatsby';
import React from 'react';
import { NavigatorWrapper } from './styled';

interface Props {
  currentListPath: string;
  pageContext: PageContext;
}

const Navigator: React.FC<Props> = ({ pageContext, currentListPath }) => {
  return (
    <NavigatorWrapper>
      <ul>
        <li className="btn">
          {pageContext.prev ? (
            <Link
              to={`/${pageContext.prev?.frontmatter.category}/${pageContext.prev?.frontmatter.slug}`}
            >
              <p className="arrow">
                <span className="material-icons-outlined">navigate_before</span>
                &nbsp;Prev
              </p>
              <p className="title">{pageContext.prev?.frontmatter.title}</p>
            </Link>
          ) : (
            <p className="title end">첫번째 페이지</p>
          )}
        </li>
        <li className="btn" style={{ textAlign: 'center' }}>
          <Link to={currentListPath}>
            <p className="title">목록으로</p>
          </Link>
        </li>
        <li className="btn" style={{ textAlign: 'right' }}>
          {pageContext.next ? (
            <Link
              to={`/${pageContext.next?.frontmatter.category}/${pageContext.next?.frontmatter.slug}`}
            >
              <p className="arrow" style={{ justifyContent: 'right' }}>
                Next&nbsp;
                <span className="material-icons-outlined">navigate_next</span>
              </p>
              <p className="title">{pageContext.next?.frontmatter.title}</p>
            </Link>
          ) : (
            <p className="title end">마지막 페이지</p>
          )}
        </li>
      </ul>
    </NavigatorWrapper>
  );
};

export default Navigator;
