import type { Color, Radius, Size, SpacingStyle } from '@/types/styleTheme';

import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { styled, css } from 'styled-components';

import { brandColor } from '@/constants/theme';

type Variant = 'filled' | 'outlined' | 'text';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpacingStyle {
  variant?: Variant;
  color?: Color;
  size?: Size;
  fullWidth?: boolean;
  radius?: Radius;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  function Button(props, ref) {
    const { children, variant, color, size, fullWidth, radius, ...other } =
      props;
    return (
      <ButtonStyled
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        radius={radius}
        {...other}
      >
        {children}
      </ButtonStyled>
    );
  }
);

const sizeStyles = css<ButtonProps>`
  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 6px;
      font-size: 12px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 8px;
      font-size: 14px;
    `}

    ${(props) =>
    props.size === 'xlarge' &&
    css`
      padding: 10px;
      font-size: 16px;
    `}
`;

const getColorStyles = (color?: Color, theme?: Variant) => {
  let mainColor;
  let subColor;

  switch (color) {
    case 'white':
    case 'green':
    case 'success':
      mainColor = color;
      subColor = brandColor.black;
      break;
    case 'black':
    case 'grey':
    case 'red':
    case 'blue':
    case 'error':
      mainColor = color;
      subColor = brandColor.white;
      break;
    default:
      mainColor = brandColor.black;
      subColor = brandColor.white;
  }

  if (!theme || theme === 'filled') {
    return css`
      background-color: ${mainColor};
      color: ${subColor};
    `;
  }

  if (theme === 'outlined') {
    return css`
      border-radius: 1px solid ${mainColor};
      color: ${mainColor};
    `;
  }

  if (theme === 'text') {
    return css`
      background-color: transparent;
      color: ${mainColor};
    `;
  }
};

const ButtonStyled = styled.button<ButtonProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  border: none;
  ${sizeStyles};
  ${({ color, variant }) => getColorStyles(color, variant)};
`;

export default Button;
