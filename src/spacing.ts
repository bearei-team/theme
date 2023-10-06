import type {Shape} from './shape';

export type Spacing = Omit<Shape, 'full'>;
export const SPACING = (): Spacing => ({
    none: 0,
    extraSmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
});
