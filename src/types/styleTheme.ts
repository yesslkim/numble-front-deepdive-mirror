import { brandColor, fontSize, fontWeight } from '@/constants/theme';

export type Color = keyof typeof brandColor;

export type Size = 'small' | 'large' | 'xlarge';

export type Radius = 4 | 8 | 12 | 16;

export type SpacingUnit = `${number}px` | `${number}%` | 'auto';

export type Margin = {
  mt?: SpacingUnit;
  mr?: SpacingUnit;
  ml?: SpacingUnit;
  mb?: SpacingUnit;
};

export type Padding = {
  pt?: SpacingUnit;
  pr?: SpacingUnit;
  pl?: SpacingUnit;
  pb?: SpacingUnit;
};

export type SpacingStyle = Margin & Padding;

export type FontWeight = keyof typeof fontWeight;

export type FontSize = keyof typeof fontSize;
