import React from 'react';
import { Global } from '@emotion/react';
import FaviconPackage from '@/components/atoms/faviconPackage';
import GlobalStyle from '@/styles/global';
import useTheme from '@/hooks/useTheme';
import { MainWrapper } from './styled';
import { BlogJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';

interface Props {
  title: string;
  children: React.ReactNode;
  posts: {
    node: PostNode;
  }[];
}

const HomeLayout: React.FC<Props> = ({ title, posts, children }) => {
  const [ThemeClass, screen, theme] = useTheme();

  return (
    <>
      <GatsbySeo
        title={`${title} | funes-days`}
        description="기억의 천재 푸네스와 함께하는 되새김의 여정"
        canonical="https://funes-days.com"
        openGraph={{
          type: 'website',
          url: 'https://funes-days.com',
          title: `${title} | funes-days`,
          description: '기억의 천재 푸네스와 함께하는 되새김의 여정',
          locale: 'ko_KR',
        }}
      />
      <BlogJsonLd
        url="https://funes-days.com"
        headline="funes-days"
        title={`${title} | funes-days`}
        posts={posts.map(({ node }) => ({
          headline: node.frontmatter.title,
          datePublished: node.frontmatter.date,
        }))}
        description="기억의 천재 푸네스와 함께하는 되새김의 여정"
        authorName="huskyhoochu"
        authorType="Person"
        publisherName="huskyhoochu"
        publisherLogo="https://avatars.githubusercontent.com/u/30363722?v=4"
      />
      <FaviconPackage screen={screen} theme={theme} />
      <Global styles={GlobalStyle} />
      <MainWrapper themeClass={ThemeClass}>{children}</MainWrapper>
    </>
  );
};

export default HomeLayout;
