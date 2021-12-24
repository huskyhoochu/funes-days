import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';

export const MainWrapper = styled.main<{ themeClass: SerializedStyles }>`
  ${props => props.themeClass};
`;
