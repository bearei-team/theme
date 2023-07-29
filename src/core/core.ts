import border from '../border/border';
import color from '../color/color';
import font from '../font/font';
import radius from '../radius/radius';
import shadow from '../shadow/shadow';
import spacing from '../spacing/spacing';
import transition from '../transition/transition';
import type { Theme, ThemeOption } from './core.interfaces';

const theme = (option?: ThemeOption): Theme => {
  const { scheme = 'light', color: primaryColor = 'black' } = option ?? {};
  const colorScheme = color[scheme];

  return {
    color: {
      ...colorScheme,
      primary: colorScheme[primaryColor].primary,
      colors: colorScheme[primaryColor].colors,
    },
    font,
    shadow,
    spacing,
    radius,
    border: border(colorScheme.gray.colors[4]),
    transition: { all: transition() },
  };
};

export default theme;
