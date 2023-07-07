import border from '../border';
import color from '../color';
import font from '../font';
import radius from '../radius';
import shadow from '../shadow';
import spacing from '../spacing';
import type { ColorSchemeType } from './core.interface';

const theme = (colorScheme = 'light' as ColorSchemeType) => {
  const scheme = color[colorScheme];

  return {
    color: { ...scheme, neutral: color.neutral },
    font,
    shadow,
    spacing,
    radius,
    border: border(scheme.gray.colors[4]),
  };
};

export default theme;
