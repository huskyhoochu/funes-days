import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { SerializedStyles } from '@emotion/react';

export const SidebarWrapper = styled(motion.div)<{
  themeClass: SerializedStyles;
}>`
  position: fixed;
  inset: 0;

  .sidebar-background {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .sidebar-body {
    ${props => props.themeClass};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    height: 100vh;
    padding-block: 24px;
    padding-inline: 16px;

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
  }
`;
