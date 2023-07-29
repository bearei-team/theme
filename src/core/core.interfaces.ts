import type { Border } from '@/border/border.interfaces';
import type color from '../color/color';
import type font from '../font/font';
import type radius from '../radius/radius';
import type shadow from '../shadow/shadow';
import type spacing from '../spacing/spacing';

export type Color = (typeof color)['light'];

export interface ThemeOption {
  scheme?: 'light' | 'dark';
  color?: keyof Color;
}

export interface Theme {
  color: Color & { primary: Color['black'] };
  font: typeof font;
  shadow: typeof shadow;
  spacing: typeof spacing;
  radius: typeof radius;
  border: Border;
}
