import * as border from '../src/border/border';
import color from '../src/color/color';
import theme from '../src/core/core';
import font from '../src/font/font';
import radius from '../src/radius/radius';
import shadow from '../src/shadow/shadow';
import spacing from '../src/spacing/spacing';

describe('theme', () => {
  test('returns the correct theme object for light color scheme', () => {
    const colorScheme = 'light';
    const expectedTheme = {
      color: {
        ...color[colorScheme],
        primary: color[colorScheme]['black'].primary,
        colors: color[colorScheme]['black'].colors,
      },
      font,
      shadow,
      spacing,
      radius,
      border: {
        width: 1,
        color: color[colorScheme].gray.colors[4],
        dotted: 'dotted',
        solid: 'solid',
        double: 'double',
        dashed: 'dashed',
      },
      transition: {
        all: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    };

    const mockBorder = {
      width: 1,
      color: color[colorScheme].gray.colors[4],
      dotted: 'dotted',
      solid: 'solid',
      double: 'double',
      dashed: 'dashed',
    };

    jest.spyOn(border, 'default').mockReturnValue(mockBorder);

    const result = theme({ scheme: colorScheme });
    expect(result).toEqual(expectedTheme);
  });

  test('returns the correct theme object for dark color scheme', () => {
    const colorScheme = 'dark';
    const expectedTheme = {
      color: {
        ...color[colorScheme],
        primary: color[colorScheme]['black'].primary,
        colors: color[colorScheme]['black'].colors,
      },
      font,
      shadow,
      spacing,
      radius,
      border: {
        width: 1,
        color: color[colorScheme].gray.colors[4],
        dotted: 'dotted',
        solid: 'solid',
        double: 'double',
        dashed: 'dashed',
      },
      transition: {
        all: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    };

    const mockBorder = {
      width: 1,
      color: color[colorScheme].gray.colors[4],
      dotted: 'dotted',
      solid: 'solid',
      double: 'double',
      dashed: 'dashed',
    };

    jest.spyOn(border, 'default').mockReturnValue(mockBorder);

    const result = theme({ scheme: colorScheme });
    expect(result).toEqual(expectedTheme);
  });
});
