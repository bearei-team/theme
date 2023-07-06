import color from '../color';
import font from '../font';
import shadow from '../shadow';
import spacing from '../spacing';
import type { ColorSchemeType } from './core.interface';

const theme = (colorScheme = 'light' as ColorSchemeType) => ({
  color: { ...color[colorScheme], neutral: color.neutral },
  font,
  shadow,
  spacing,
});

export default theme;
