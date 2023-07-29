import type color from '@/color/color';

export interface ThemeOption {
  scheme?: 'light' | 'dark';
  color?: keyof (typeof color)['light'];
}
