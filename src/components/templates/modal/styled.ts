import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { SerializedStyles } from '@emotion/react';
import { breakPoints, gridPoints } from '@/styles/screen';
import radius from '@/styles/radius';

export const ModalWrapper = styled(motion.div)<{
  themeClass: SerializedStyles;
}>`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-background {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-body {
    ${props => props.themeClass};
    z-index: 1;
    padding-block: 16px;
    padding-inline: 24px;
    margin-inline: ${gridPoints.gutter}px;
    border-radius: ${radius['12']}px;

    @media (min-width: ${breakPoints.tablet}px) {
      max-width: calc(${gridPoints.col * 6}px + ${gridPoints.gutter * 5}px);
    }

    @media (min-width: ${breakPoints.mobile}px) {
      width: 100%;
    }

    .title-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 8px;
      margin-bottom: 16px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: inherit;

      .material-icons-outlined {
        font-size: 33px;
      }
    }

    .content {
    }
  }
`;
