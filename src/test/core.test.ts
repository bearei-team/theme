import * as border from '../border';
import color from '../color';
import theme from '../core';
import font from '../font';
import radius from '../radius';
import shadow from '../shadow';
import spacing from '../spacing';

describe('theme', () => {
  test('returns the correct theme object for light color scheme', () => {
    const colorScheme = 'light';
    const expectedTheme = {
      color: { ...color[colorScheme], neutral: color.neutral },
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
      color: { ...color[colorScheme], neutral: color.neutral },
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
