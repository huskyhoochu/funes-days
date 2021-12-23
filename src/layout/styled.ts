import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';
import { ContainerClass } from '@/styles/container';

export const MainWrapper = styled.main<{ themeClass: SerializedStyles }>`
  ${ContainerClass};
  ${props => props.themeClass};
`;
