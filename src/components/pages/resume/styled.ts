import styled from '@emotion/styled';
import { breakPoints, gridPoints } from '@/styles/screen';
import {
  H2Class,
  H3Class,
  H4Class,
  H5Class,
  H6Class,
  Subtitle1Class,
} from '@/styles/typography';
import { Gray } from '@/styles/theme';
import { motion } from 'framer-motion';
import radius from '@/styles/radius';

export const ResumeWrapper = styled.div`
  background-color: ${Gray['700']};
  color: ${Gray['100']};
`;

export const WhyMeWrapper = styled.div`
  position: relative;
  height: 500vh;

  h1 {
    text-align: right;
    word-break: keep-all;

    @media (max-width: ${breakPoints.tablet}px) {
      ${H2Class};
    }

    @media (max-width: ${breakPoints.mobile}px) {
      ${H3Class};
    }
  }

  .why {
    position: sticky;
    top: 50%;
    right: 0;
    width: 100%;
    transform: translateY(-50%);
    padding-inline: ${gridPoints.gutter}px;
    z-index: 1;
  }

  .books {
    position: sticky;
    inset: 0;
    height: 300vh;
    z-index: 0;
    background-image: url('https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bright {
    position: sticky;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: ${Gray['200']};
    z-index: 2;
  }

  .arrow {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .material-icons-outlined {
      ${H3Class};
      animation-name: wave;
      animation-iteration-count: infinite;
      animation-duration: 1.6s;
      animation-timing-function: ease;
    }

    @keyframes wave {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15%);
      }
    }
  }
`;

export const BecauseWrapper = styled.div`
  position: relative;
  height: 500vh;

  h1 {
    word-break: keep-all;

    @media (max-width: ${breakPoints.tablet}px) {
      ${H2Class};
    }

    @media (max-width: ${breakPoints.mobile}px) {
      ${H3Class};
    }
  }

  .language {
    text-align: center;
    position: sticky;
    inset: 0;
    height: 100vh;
    width: 60vw;
    margin-inline: auto;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    mix-blend-mode: difference;
  }

  .mac {
    position: relative;
    inset: 0;
    height: 400vh;
    z-index: 0;
    background-image: url('https://images.unsplash.com/photo-1611264327630-8090373c8cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1254&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const LangPowerWrapper = styled.div`
  position: relative;
  height: 500vh;
  display: grid;
  margin-top: 50vh;
  padding-inline: ${gridPoints.gutter}px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${gridPoints.gutter * 2}px;
  background-image: linear-gradient(
    180deg,
    hsl(0deg 0% 21%) 0%,
    hsl(58deg 11% 24%) 21%,
    hsl(60deg 19% 27%) 30%,
    hsl(61deg 27% 30%) 39%,
    hsl(62deg 34% 33%) 46%,
    hsl(63deg 41% 35%) 54%,
    hsl(64deg 47% 38%) 61%,
    hsl(64deg 54% 41%) 69%,
    hsl(64deg 61% 43%) 79%,
    hsl(65deg 69% 45%) 100%
  );

  h1 {
    word-break: keep-all;

    @media (max-width: ${breakPoints.tablet}px) {
      ${H3Class};
    }

    @media (max-width: ${breakPoints.mobile}px) {
      ${H4Class};
    }
  }

  .words {
    flex: 1;
    text-align: right;

    h1 {
      height: 50vh;
      opacity: 0;
      transition: opacity 2s ease;

      &.active {
        opacity: 1;
      }
    }
  }

  .needs {
    flex: 1;
    position: sticky;
    top: 25vh;
    right: 0;
    height: 100vh;

    @media (max-width: ${breakPoints.mobile}px) {
      top: 35vh;
    }
  }
`;

export const HelloWrapper = styled(motion.div)`
  position: relative;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1632576883732-f131be0be48a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h2 {
    word-break: keep-all;

    @media (max-width: ${breakPoints.tablet}px) {
      ${H3Class};
    }

    @media (max-width: ${breakPoints.mobile}px) {
      ${H4Class};
    }
  }

  h4 {
    word-break: keep-all;

    @media (max-width: ${breakPoints.tablet}px) {
      ${H5Class};
    }

    @media (max-width: ${breakPoints.mobile}px) {
      ${H6Class};
    }
  }

  .outer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hello {
    padding: 36px;
    border-radius: ${radius['16']}px;
    backdrop-filter: blur(10px) saturate(80%) contrast(60%);

    @media (max-width: ${breakPoints.tablet}px) {
      padding: 24px;
      border-radius: 0;
    }

    @media (max-width: ${breakPoints.mobile}px) {
      padding: 32px 16px;
    }

    .soo {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 9999px;
      @media (max-width: ${breakPoints.mobile}px) {
        width: 80px;
        height: 80px;
      }
    }

    .more {
      margin-block: 32px;
      ${H5Class};
      text-decoration: underline;
      @media (max-width: ${breakPoints.mobile}px) {
        ${H6Class};
      }
    }

    .links {
      margin-top: 16px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      ${Subtitle1Class};

      a {
        text-decoration: underline;
      }
    }
  }
`;
