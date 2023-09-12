/* eslint-disable react/no-unknown-property */
import './button.css';

type Variant = 'filled' | 'outlined' | 'text';
type Color =
  | 'success'
  | 'error'
  | 'blue'
  | 'red'
  | 'green'
  | 'grey'
  | 'black'
  | 'white';

interface ButtonProps {
  variant?: Variant;
  color?: Color;
  size?: 'small' | 'large' | 'xlarge';
  fullWidth?: boolean;
  radius?: 4 | 8 | 12 | 16;
  label: string;
  startIcon?: 'IconUser' | 'IconHome';
  endIcon?: 'IconUser' | 'IconHome';
}

const brandColor = {
  success: '#3068e9',
  error: '#e02525',
  blue: '#0d24cf',
  red: '#b80b0b',
  green: '#31d022',
  grey: '#787878',
  black: '#1e1e1e',
  white: '#ffffff'
};

const getColorStyles = (color?: Color) => {
  let mainColor;
  let subColor;

  switch (color) {
    case 'white':
    case 'green':
    case 'success':
      mainColor = brandColor[color];
      subColor = brandColor.black;
      break;
    case 'black':
    case 'grey':
    case 'red':
    case 'blue':
    case 'error':
      mainColor = brandColor[color];
      subColor = brandColor.white;
      break;
    default:
      mainColor = brandColor.black;
      subColor = brandColor.white;
  }

  return {
    mainColor,
    subColor
  };
};

const getThemeStyle = (theme: Variant, mainColor: string, subColor: string) => {
  if (!theme || theme === 'filled') {
    return {
      backgroundColor: `${mainColor}`,
      color: `${subColor}`
    };
  }

  if (theme === 'outlined') {
    return {
      border: `1px solid ${mainColor}`,
      color: `${mainColor}`
    };
  }

  if (theme === 'text') {
    return {
      backgroundColor: 'transparent',
      color: `${mainColor}`
    };
  }
};

export const Button = ({
  variant = 'filled',
  size = 'large',
  color = 'black',
  label = 'Button',
  fullWidth = false,
  radius = 4,
  startIcon,
  endIcon
}: ButtonProps) => {
  const { mainColor, subColor } = getColorStyles(color);
  const themeStyle = getThemeStyle(variant, mainColor, subColor);
  const width = fullWidth ? 'btn-fullWidth' : '';
  return (
    <button
      type="button"
      style={themeStyle}
      className={[`btn-size-${size}`, width, `btn-radius-${radius}`].join(' ')}
    >
      {startIcon && <i className={`icon-start ${startIcon}`}></i>}
      {label}
      {endIcon && <i className={`icon-end ${endIcon}`}></i>}
    </button>
  );
};
