import type { SpacingStyle } from '@/types/styleTheme';

import { forwardRef } from 'react';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import { styled } from 'styled-components';

interface FlexboxProps extends HTMLAttributes<HTMLDivElement>, SpacingStyle {
  direction?: 'column' | 'row';
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline';
  justify?:
    | 'center'
    | 'space-between'
    | 'flex-end'
    | 'flex-start'
    | 'space-around';
  gap?: number;
  component?: 'div' | 'section' | 'ul' | 'article' | 'main' | 'li';
  style?: React.CSSProperties;
}

const Flexbox = forwardRef<HTMLDivElement, PropsWithChildren<FlexboxProps>>(
  function Flexbox(props, ref) {
    const {
      children,
      direction,
      align,
      justify,
      gap,
      component,
      style,
      mt,
      mr,
      ml,
      mb,
      pt,
      pr,
      pl,
      pb,
      ...other
    } = props;
    return (
      <FlexboxStyled
        ref={ref}
        direction={direction}
        align={align}
        justify={justify}
        gap={gap}
        as={component || 'div'}
        style={style}
        mt={mt}
        mr={mr}
        ml={ml}
        mb={mb}
        pt={pt}
        pr={pr}
        pl={pl}
        pb={pb}
        {...other}
      >
        {children}
      </FlexboxStyled>
    );
  }
);

const FlexboxStyled = styled.div<FlexboxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'initial'};
  justify-content: ${({ justify }) => justify || 'initial'};
  align-items: ${({ align }) => align || 'initial'};
  gap: ${({ gap }) => gap || 0}px;
  ${({ mt }) =>
    mt
      ? {
          marginTop: mt
        }
      : undefined}
  ${({ mr }) =>
    mr
      ? {
          marginRight: mr
        }
      : undefined}
      ${({ ml }) =>
    ml
      ? {
          marginLeft: ml
        }
      : undefined}
      ${({ mb }) =>
    mb
      ? {
          marginBottom: mb
        }
      : undefined}
      ${({ pt }) =>
    pt
      ? {
          paddingTop: pt
        }
      : undefined}
  ${({ pr }) =>
    pr
      ? {
          paddingRight: pr
        }
      : undefined}
      ${({ pl }) =>
    pl
      ? {
          paddingLeft: pl
        }
      : undefined}
      ${({ pb }) =>
    pb
      ? {
          paddingBottom: pb
        }
      : undefined}
`;

export default Flexbox;
