import border from '../src/border';

describe('border', () => {
  test('returns the correct border object', () => {
    const color = '#FF0000';
    const expectedBorder = {
      width: 1,
      color,
      dotted: 'dotted',
      solid: 'solid',
      double: 'double',
      dashed: 'dashed',
    };

    const result = border(color);

    expect(result).toEqual(expectedBorder);
  });
});
