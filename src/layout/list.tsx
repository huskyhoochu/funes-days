import React from 'react';
import { Global } from '@emotion/react';
import { BreadcrumbJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';
import FaviconPackage from '@/components/atoms/faviconPackage';
import GlobalStyle from '@/styles/global';
import useTheme from '@/hooks/useTheme';
import { MainWrapper } from './styled';
import Header from '@/components/atoms/header';

interface Props {
  title: string;
  category: string;
  backgroundUrl: string;
  children: React.ReactNode;
  posts: {
    node: PostNode;
  }[];
}

const ListLayout: React.FC<Props> = ({
  title,
  category,
  backgroundUrl,
  posts,
  children,
}) => {
  const [ThemeClass, screen, theme] = useTheme();

  return (
    <>
      <GatsbySeo
        title={`${title} | funes-days`}
        description="기억의 천재 푸네스와 함께하는 되새김의 여정"
        canonical={`https://funes-days.com/${category}`}
        openGraph={{
          type: 'website',
          url: `https://funes-days.com/${category}`,
          title: `${title} | funes-days`,
          description: '기억의 천재 푸네스와 함께하는 되새김의 여정',
          locale: 'ko_KR',
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={posts.map(({ node }, idx) => ({
          position: idx,
          name: node.frontmatter.title,
          item: `https://funes-days.com/${node.frontmatter.category}/${node.frontmatter.slug}`,
        }))}
      />
      <FaviconPackage screen={screen} theme={theme} />
      <Global styles={GlobalStyle} />
      <MainWrapper themeClass={ThemeClass}>
        <Header backgroundColor="transparent" />
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: `url("${backgroundUrl}")`,
            zIndex: 0,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {children}
      </MainWrapper>
    </>
  );
};

export default ListLayout;
