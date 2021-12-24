import React from 'react';
import useAutoScroll from '@/hooks/useAutoScroll';
import useActivePage from '@/hooks/useActivePage';
import { SectionWrapper } from './styled';

interface Props {
  forwardedRef: React.RefObject<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
  index: number;
  children?: React.ReactNode;
}

export const FullPageSection: React.FC<Props> = ({
  forwardedRef,
  style,
  className,
  children,
}) => {
  return (
    <SectionWrapper ref={forwardedRef} className={className} style={style}>
      {children}
    </SectionWrapper>
  );
};

function withActiveScroll(WrappedComponent: React.FC<Props>) {
  const ActiveScroll: React.FC<Props> = props => {
    useActivePage(props.forwardedRef, props.index);
    return <WrappedComponent {...props} />;
  };
  return ActiveScroll;
}

export const ActiveScrollSection = withActiveScroll(FullPageSection);

function withAutoScroll(WrappedComponent: React.FC<Props>) {
  const AutoScroll: React.FC<Props> = props => {
    useAutoScroll(props.forwardedRef, 600);
    return <WrappedComponent {...props} />;
  };
  return AutoScroll;
}

export const AutoScrollSection = withAutoScroll(ActiveScrollSection);
