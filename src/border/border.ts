import type { Border } from './border.interfaces';

const border = (color: string): Border => ({
  width: 1,
  color,
  dotted: 'dotted',
  solid: 'solid',
  double: 'double',
  dashed: 'dashed',
});

export default border;
