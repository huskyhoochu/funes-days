import styled from '@emotion/styled';
import { breakPoints, gridPoints } from '@/styles/screen';
import { H2Class, H3Class } from '@/styles/typography';
import { Gray } from '@/styles/theme';

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
    position: fixed;
    top: 50%;
    right: 0;
    width: 100%;
    transform: translateY(-50%);
    margin-inline: ${gridPoints.gutter}px;
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
  }
`;
