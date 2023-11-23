export interface Spacing {
    extraLarge: number;
    extraSmall: number;
    large: number;
    medium: number;
    none: number;
    small: number;
}

export const SPACING = (): Spacing => ({
    extraLarge: 32,
    extraSmall: 4,
    large: 24,
    medium: 16,
    none: 0,
    small: 8,
});
