import border from '../border/border';
import color from '../color/color';
import font from '../font/font';
import radius from '../radius/radius';
import shadow from '../shadow/shadow';
import spacing from '../spacing/spacing';
import type { Theme, ThemeOption } from './core.interfaces';

const theme = (option?: ThemeOption): Theme => {
  const { scheme = 'light', color: primaryColor = 'black' } = option ?? {};
  const colorScheme = color[scheme];

  return {
    color: { ...colorScheme, primary: colorScheme[primaryColor] },
    font,
    shadow,
    spacing,
    radius,
    border: border(colorScheme.gray.colors[4]),
  };
};

export default theme;