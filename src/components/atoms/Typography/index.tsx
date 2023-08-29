import { Color, FontSize, FontWeight, SpacingStyle } from '@/types/styleTheme';

import { forwardRef } from 'react';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import { styled } from 'styled-components';

import { brandColor, fontSize, fontWeight } from '@/constants/theme';

interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    SpacingStyle {
  variant?: FontSize;
  color?: Color;
  weight?: FontWeight;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span' | 'p' | 'article';
  ellipsis?: boolean;
}

const Typography = forwardRef<
  HTMLParagraphElement,
  PropsWithChildren<TypographyProps>
>(function Typography(props, ref) {
  const {
    children,
    variant,
    color,
    weight,
    component,
    ellipsis,
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
    <TypographyStyled
      ref={ref}
      variant={variant}
      color={color}
      weight={weight}
      as={component}
      ellipsis={ellipsis}
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
    </TypographyStyled>
  );
});

const TypographyStyled = styled.p<TypographyProps>`
  font-weight: ${({ weight }) => (weight ? fontWeight[weight] : 400)};
  color: ${({ color }) => (color ? brandColor[color] : brandColor.black)};
  font-size: ${({ variant }) => (variant ? fontSize[variant] : 14)}px;
  ${({ ellipsis }) =>
    ellipsis
      ? {
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical'
        }
      : undefined};
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

export default Typography;
