import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  screen: ScreenType;
  theme: ThemeType;
}

const FaviconPackage: React.FC<Props> = ({ screen, theme }) => {
  return (
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`/${theme}-${screen}-favicon/apple-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`/${theme}-${screen}-favicon/apple-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`/${theme}-${screen}-favicon/apple-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`/${theme}-${screen}-favicon/apple-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`/${theme}-${screen}-favicon/apple-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`/${theme}-${screen}-favicon/apple-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`/${theme}-${screen}-favicon/apple-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`/${theme}-${screen}-favicon/apple-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/${theme}-${screen}-favicon/apple-icon-180x180.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`/${theme}-${screen}-favicon/android-icon-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/${theme}-${screen}-favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`/${theme}-${screen}-favicon/favicon-96x96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/${theme}-${screen}-favicon/favicon-16x16.png`}
      />
      <link rel="manifest" href={`/${theme}-${screen}-favicon/manifest.json`} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`/${theme}-${screen}-favicon/ms-icon-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default FaviconPackage;
