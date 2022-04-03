import React from 'react';
import { Global } from '@emotion/react';
import { GatsbySeo, BlogPostJsonLd } from 'gatsby-plugin-next-seo';
import FaviconPackage from '@/components/atoms/faviconPackage';
import Header from '@/components/atoms/header';
import GlobalStyle from '@/styles/global';
import useTheme from '@/hooks/useTheme';
import { MainWrapper } from './styled';
import { OpenGraphArticle } from 'gatsby-plugin-next-seo/lib/types';

interface Props {
  title: string;
  description: string;
  slug: string;
  articleInfo: OpenGraphArticle;
  children: React.ReactNode;
}

const PostLayout: React.FC<Props> = ({
  title,
  description,
  slug,
  articleInfo,
  children,
}) => {
  const [ThemeClass, screen, theme] = useTheme();

  return (
    <>
      <GatsbySeo
        title={`${title} | funes-days`}
        description={description}
        canonical={`https://funes-days.com${slug}`}
        openGraph={{
          type: 'article',
          url: `https://funes-days.com${slug}`,
          title: `${title} | funes-days`,
          description: description,
          locale: 'ko_KR',
          article: articleInfo,
        }}
      />
      <BlogPostJsonLd
        url={`https://funes-days.com${slug}`}
        title={`${title} | funes-days`}
        description={description}
        images={[]}
        keywords={articleInfo.tags}
        datePublished={articleInfo.publishedTime || ''}
        authorName="huskyhoochu"
        authorType="Person"
        publisherName="huskyhoochu"
        publisherLogo="https://avatars.githubusercontent.com/u/30363722?v=4"
      />
      <FaviconPackage screen={screen} theme={theme} />
      <Global styles={GlobalStyle} />
      <Header backgroundColor="transparent" />
      <MainWrapper themeClass={ThemeClass}>{children}</MainWrapper>
    </>
  );
};

export default PostLayout;
