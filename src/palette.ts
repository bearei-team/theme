import type {Color} from './color';
import type {ThemeOptions} from './core';

export interface Palette {
    primary: {
        primary: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        primaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixed: string;
        onPrimaryFixedVariant: string;
    };
    secondary: {
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        secondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixed: string;
        onSecondaryFixedVariant: string;
    };
    tertiary: {
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        tertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixed: string;
        onTertiaryFixedVariant: string;
    };
    surface: {
        surface: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
        onSurface: string;
        onSurfaceVariant: string;
    };
    outline: {
        outline: string;
        outlineVariant: string;
    };
    error: {
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
    };
    inverse: {
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
    };
    scrim: {
        scrim: string;
    };
    shadow: {
        shadow: string;
    };
}

export type PaletteOptions = Required<Pick<ThemeOptions, 'scheme'>>;
export const PALETTE =
    (color: Color) =>
    ({scheme}: PaletteOptions): Palette => {
        const palette = {
            light: {
                primary: {
                    primary: color.primary.primary40,
                    onPrimary: color.primary.primary100,
                    primaryContainer: color.primary.primary90,
                    onPrimaryContainer: color.primary.primary10,
                    primaryFixed: color.primary.primary90,
                    primaryFixedDim: color.primary.primary80,
                    onPrimaryFixed: color.primary.primary10,
                    onPrimaryFixedVariant: color.primary.primary30,
                },
                secondary: {
                    secondary: color.secondary.secondary40,
                    onSecondary: color.secondary.secondary100,
                    secondaryContainer: color.secondary.secondary90,
                    onSecondaryContainer: color.secondary.secondary10,
                    secondaryFixed: color.secondary.secondary90,
                    secondaryFixedDim: color.secondary.secondary80,
                    onSecondaryFixed: color.secondary.secondary10,
                    onSecondaryFixedVariant: color.secondary.secondary30,
                },
                tertiary: {
                    tertiary: color.tertiary.tertiary40,
                    onTertiary: color.tertiary.tertiary100,
                    tertiaryContainer: color.tertiary.tertiary90,
                    onTertiaryContainer: color.tertiary.tertiary10,
                    tertiaryFixed: color.tertiary.tertiary90,
                    tertiaryFixedDim: color.tertiary.tertiary80,
                    onTertiaryFixed: color.tertiary.tertiary10,
                    onTertiaryFixedVariant: color.tertiary.tertiary30,
                },
                surface: {
                    surface: color.neutral.neutral98,
                    surfaceDim: color.neutral.neutral87,
                    surfaceBright: color.neutral.neutral98,
                    surfaceContainerLowest: color.neutral.neutral100,
                    surfaceContainerLow: color.neutral.neutral96,
                    surfaceContainer: color.neutral.neutral94,
                    surfaceContainerHigh: color.neutral.neutral92,
                    surfaceContainerHighest: color.neutral.neutral90,
                    onSurface: color.neutral.neutral10,
                    onSurfaceVariant: color.neutralVariant.neutralVariant30,
                },
                outline: {
                    outline: color.neutralVariant.neutralVariant50,
                    outlineVariant: color.neutralVariant.neutralVariant80,
                },
                error: {
                    error: color.error.error40,
                    onError: color.error.error100,
                    errorContainer: color.error.error90,
                    onErrorContainer: color.error.error10,
                },
                inverse: {
                    inverseSurface: color.neutral.neutral20,
                    inverseOnSurface: color.neutral.neutral95,
                    inversePrimary: color.primary.primary80,
                },
                scrim: {scrim: color.neutral.neutral0},
                shadow: {shadow: color.neutral.neutral0},
            },
            dark: {
                primary: {
                    primary: color.primary.primary80,
                    onPrimary: color.primary.primary20,
                    primaryContainer: color.primary.primary30,
                    onPrimaryContainer: color.primary.primary90,
                    primaryFixed: color.primary.primary90,
                    primaryFixedDim: color.primary.primary80,
                    onPrimaryFixed: color.primary.primary10,
                    onPrimaryFixedVariant: color.primary.primary30,
                },
                secondary: {
                    secondary: color.secondary.secondary80,
                    onSecondary: color.secondary.secondary20,
                    secondaryContainer: color.secondary.secondary30,
                    onSecondaryContainer: color.secondary.secondary90,
                    secondaryFixed: color.secondary.secondary90,
                    secondaryFixedDim: color.secondary.secondary80,
                    onSecondaryFixed: color.secondary.secondary10,
                    onSecondaryFixedVariant: color.secondary.secondary30,
                },
                tertiary: {
                    tertiary: color.tertiary.tertiary80,
                    onTertiary: color.tertiary.tertiary20,
                    tertiaryContainer: color.tertiary.tertiary30,
                    onTertiaryContainer: color.tertiary.tertiary90,
                    tertiaryFixed: color.tertiary.tertiary90,
                    tertiaryFixedDim: color.tertiary.tertiary80,
                    onTertiaryFixed: color.tertiary.tertiary10,
                    onTertiaryFixedVariant: color.tertiary.tertiary30,
                },
                surface: {
                    surface: color.neutral.neutral6,
                    surfaceDim: color.neutral.neutral6,
                    surfaceBright: color.neutral.neutral24,
                    surfaceContainerLowest: color.neutral.neutral4,
                    surfaceContainerLow: color.neutral.neutral10,
                    surfaceContainer: color.neutral.neutral12,
                    surfaceContainerHigh: color.neutral.neutral17,
                    surfaceContainerHighest: color.neutral.neutral22,
                    onSurface: color.neutral.neutral80,
                    onSurfaceVariant: color.neutralVariant.neutralVariant80,
                },
                outline: {
                    outline: color.neutralVariant.neutralVariant60,
                    outlineVariant: color.neutralVariant.neutralVariant30,
                },
                error: {
                    error: color.error.error80,
                    onError: color.error.error20,
                    errorContainer: color.error.error30,
                    onErrorContainer: color.error.error90,
                },
                inverse: {
                    inverseSurface: color.neutral.neutral90,
                    inverseOnSurface: color.neutral.neutral10,
                    inversePrimary: color.primary.primary40,
                },
                scrim: {scrim: color.neutral.neutral0},
                shadow: {shadow: color.neutral.neutral0},
            },
        };

        return palette[scheme];
    };
