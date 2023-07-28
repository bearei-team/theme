import * as border from '../src/border';
import color from '../src/color';
import theme from '../src/core';
import font from '../src/font';
import radius from '../src/radius';
import shadow from '../src/shadow';
import spacing from '../src/spacing';

describe('theme', () => {
  test('returns the correct theme object for light color scheme', () => {
    const colorScheme = 'light';
    const expectedTheme = {
      color: { ...color[colorScheme] },
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

    const result = theme(colorScheme);
    expect(result).toEqual(expectedTheme);
  });

  test('returns the correct theme object for dark color scheme', () => {
    const colorScheme = 'dark';
    const expectedTheme = {
      color: { ...color[colorScheme] },
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

    const result = theme(colorScheme);
    expect(result).toEqual(expectedTheme);
  });
});
