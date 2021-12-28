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

    const headings = document.querySelectorAll('h4');
    const toc = document.getElementById('toc');
    const navList = toc?.firstChild?.childNodes as NodeListOf<ChildNode>;
    const navArray = Array.from(navList);

    headings.forEach((heading, idx, arr) => {
      const top = heading.offsetTop;
      const text = heading.innerText;
      const nextHeadingTop =
        arr[idx + 1]?.offsetTop || document.documentElement.offsetHeight;

      if (curScroll >= top - 1 && curScroll < nextHeadingTop) {
        const activeNav = navArray
          .filter(nav => {
            const decodedHash = decodeURIComponent(
              (nav.firstChild as HTMLAnchorElement)?.hash,
            );
            const replacedText =
              '#' + text.replace(/\s/g, '-').replace(/[^가-힣0-9a-zA-Z-]/g, '');
            return decodedHash === replacedText;
          })
          .pop();

        (activeNav as HTMLLIElement)?.classList?.add('active');

        const inactiveNav = navArray.filter(nav => {
          const decodedHash = decodeURIComponent(
            (nav.firstChild as HTMLAnchorElement)?.hash,
          );
          const replacedText =
            '#' + text.replace(/\s/g, '-').replace(/[^가-힣0-9a-zA-Z-]/g, '');
          return decodedHash !== replacedText;
        });

        inactiveNav.forEach(nav =>
          (nav as HTMLLIElement)?.classList?.remove('active'),
        );
      }

      if (curScroll < arr[0].offsetTop - 1) {
        navArray.forEach(nav =>
          (nav as HTMLLIElement)?.classList?.remove('active'),
        );
      }
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
