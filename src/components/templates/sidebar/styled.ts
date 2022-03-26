import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';
import easings from '@/styles/easings';

export const SidebarWrapper = styled.div<{
  theme: SerializedStyles;
}>`
  position: fixed;
  inset: 0;
  z-index: 0;

  .sidebar-background {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
    opacity: 0;
    animation-name: visible;
    animation-timing-function: ${easings.easeOutCubic};
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &.inactive {
      animation-name: hidden;
      animation-timing-function: ${easings.easeOutCubic};
      animation-duration: 0.2s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  @keyframes visible {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes hidden {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .sidebar-body {
    ${props => props.theme};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    height: 100vh;
    padding-block: 24px;
    padding-inline: 16px;
    will-change: transform;
    z-index: 1;
    transform: translateX(100%);
    animation-name: showX;
    animation-timing-function: ${easings.easeOutCubic};
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &.inactive {
      animation-name: hideX;
      animation-timing-function: ${easings.easeOutCubic};
      animation-duration: 0.2s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    @keyframes showX {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes hideX {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
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
  }
`;
