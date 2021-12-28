import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { graphql } from 'gatsby';
import PostLayout from '@/layout/post';
import { NarrowContainerWrapper } from '@/styles/container';
import { MarkdownWrapper } from '@/components/pages/dev/styled';
import useTheme from '@/hooks/useTheme';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      timeToRead: number;
      tableOfContents: string;
      frontmatter: {
        title: string;
        description: string;
        date: string;
        tags: string[];
        slug: string;
      };
    };
  };
}

const DevTemplate: React.FC<Props> = ({ data }) => {
  const [, screen] = useTheme();
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead, tableOfContents } = markdownRemark;
  const [curScroll, setCurScroll] = useState<number>(0);

  useEffect(() => {
    const getCurScroll = (e: Event) => {
      const curScroll = (e.target as Document).documentElement.scrollTop;
      setCurScroll(curScroll);
    };

    const headingsH4 = document.querySelectorAll('h4');
    const headingsH6 = document.querySelectorAll('h6');
    const headings = Array.from(headingsH4).concat(Array.from(headingsH6));
    const toc = document.getElementById('toc');
    const navList = toc?.children[0].children as HTMLCollection;
    const navArray = Array.from(navList);

    headings.forEach((heading, idx, arr) => {
      const top = heading.offsetTop;
      const text = heading.innerText;
      const nextHeadingTop =
        arr[idx + 1]?.offsetTop || document.documentElement.offsetHeight;
      const replacedText =
        '#' + text.replace(/\s/g, '-').replace(/[^가-힣0-9a-zA-Z-]/g, '');

      const getDecodedHash = (el: Element): string => {
        let decodedHash;
        if (el instanceof HTMLAnchorElement) {
          decodedHash = decodeURIComponent((el as HTMLAnchorElement)?.hash);
        } else if (
          el.children.length > 1 &&
          el.children[1] instanceof HTMLUListElement
        ) {
          const nestedArr = Array.from(
            el.children[1].children as HTMLCollection,
          );
          toggleActive(nestedArr);
          decodedHash = getDecodedHash(el.children[0]);
        } else if (
          el.children.length === 1 &&
          el.children[0] instanceof HTMLUListElement
        ) {
          const nestedArr = Array.from(
            el.children[0].children as HTMLCollection,
          );
          toggleActive(nestedArr);
          decodedHash = '';
        } else {
          decodedHash = getDecodedHash(el.children[0]);
        }
        return decodedHash;
      };

      const toggleActive = (navArr: Element[]) => {
        if (curScroll >= top - 1 && curScroll < nextHeadingTop) {
          const activeNav = navArr
            .filter(nav => getDecodedHash(nav) === replacedText)
            .pop();

          (activeNav as HTMLLIElement)?.classList?.add('active');

          const inactiveNav = navArr.filter(
            nav => getDecodedHash(nav) !== replacedText,
          );

          inactiveNav.forEach(nav =>
            (nav as HTMLLIElement)?.classList?.remove('active'),
          );
        }

        // 전체 텍스트보다 위로 벗어났을 경우
        if (curScroll < arr[0].offsetTop - 1) {
          navArr.forEach(nav =>
            (nav as HTMLLIElement)?.classList?.remove('active'),
          );
        }
      };

      toggleActive(navArray);
    });

    window.addEventListener('scroll', getCurScroll);

    return () => {
      window.removeEventListener('scroll', getCurScroll);
    };
  }, [curScroll, setCurScroll]);

  return (
    <PostLayout title={frontmatter.title}>
      <MarkdownWrapper screen={screen}>
        <NarrowContainerWrapper>
          <div className="title-group">
            <h3>{frontmatter.title}</h3>
            <h5>{frontmatter.description}</h5>
            <h5>
              {dayjs(frontmatter.date).format('YYYY-MM-DD')} ∙ {timeToRead} min
            </h5>
            <div className="tag-group">
              {frontmatter.tags.map((tag, idx) => (
                <p key={idx} className="tag">
                  #{tag}
                </p>
              ))}
            </div>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </NarrowContainerWrapper>
        <div className="toc-group">
          <h5>Table of Contents</h5>
          <div id="toc" dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        </div>
      </MarkdownWrapper>
    </PostLayout>
  );
};

export default DevTemplate;

export const pageQuery = graphql`
  query ($frontmatter__slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;
