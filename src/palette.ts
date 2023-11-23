import type {Color} from './color';
import type {ThemeOptions} from './core';

export interface Palette {
    primary: {
        /**
         * Primary base color
         */
        primary: string;

        /**
         * On-primary is applied to content (icons, text, etc.) that sits on top of primary
         */
        onPrimary: string;

        /**
         * On-primary container is applied to content (icons, text, etc.) that sits on top of primary container
         */
        onPrimaryContainer: string;
        onPrimaryFixed: string;
        onPrimaryFixedVariant: string;

        /**
         * Primary container is applied to elements needing less emphasis than primary
         */
        primaryContainer: string;
        primaryFixed: string;
        primaryFixedDim: string;
    };
    secondary: {
        onSecondary: string;
        onSecondaryContainer: string;
        onSecondaryFixed: string;
        onSecondaryFixedVariant: string;
        secondary: string;
        secondaryContainer: string;
        secondaryFixed: string;
        secondaryFixedDim: string;
    };
    tertiary: {
        onTertiary: string;
        onTertiaryContainer: string;
        onTertiaryFixed: string;
        onTertiaryFixedVariant: string;
        tertiary: string;
        tertiaryContainer: string;
        tertiaryFixed: string;
        tertiaryFixedDim: string;
    };
    surface: {
        onSurface: string;
        onSurfaceVariant: string;
        surface: string;
        surfaceBright: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
        surfaceContainerLow: string;
        surfaceContainerLowest: string;
        surfaceDim: string;
    };
    outline: {
        outline: string;
        outlineVariant: string;
    };
    error: {
        error: string;
        errorContainer: string;
        onError: string;
        onErrorContainer: string;
    };
    inverse: {
        inverseOnSurface: string;
        inversePrimary: string;
        inverseSurface: string;
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
                    onPrimary: color.primary.primary100,
                    onPrimaryContainer: color.primary.primary10,
                    onPrimaryFixed: color.primary.primary10,
                    onPrimaryFixedVariant: color.primary.primary30,
                    primary: color.primary.primary40,
                    primaryContainer: color.primary.primary90,
                    primaryFixed: color.primary.primary90,
                    primaryFixedDim: color.primary.primary80,
                },
                secondary: {
                    onSecondary: color.secondary.secondary100,
                    onSecondaryContainer: color.secondary.secondary10,
                    onSecondaryFixed: color.secondary.secondary10,
                    onSecondaryFixedVariant: color.secondary.secondary30,
                    secondary: color.secondary.secondary40,
                    secondaryContainer: color.secondary.secondary90,
                    secondaryFixed: color.secondary.secondary90,
                    secondaryFixedDim: color.secondary.secondary80,
                },
                tertiary: {
                    onTertiary: color.tertiary.tertiary100,
                    onTertiaryContainer: color.tertiary.tertiary10,
                    onTertiaryFixed: color.tertiary.tertiary10,
                    onTertiaryFixedVariant: color.tertiary.tertiary30,
                    tertiary: color.tertiary.tertiary40,
                    tertiaryContainer: color.tertiary.tertiary90,
                    tertiaryFixed: color.tertiary.tertiary90,
                    tertiaryFixedDim: color.tertiary.tertiary80,
                },
                surface: {
                    onSurface: color.neutral.neutral10,
                    onSurfaceVariant: color.neutralVariant.neutralVariant30,
                    surface: color.neutral.neutral98,
                    surfaceBright: color.neutral.neutral98,
                    surfaceContainer: color.neutral.neutral94,
                    surfaceContainerHigh: color.neutral.neutral92,
                    surfaceContainerHighest: color.neutral.neutral90,
                    surfaceContainerLow: color.neutral.neutral96,
                    surfaceContainerLowest: color.neutral.neutral100,
                    surfaceDim: color.neutral.neutral87,
                },
                outline: {
                    outline: color.neutralVariant.neutralVariant50,
                    outlineVariant: color.neutralVariant.neutralVariant80,
                },
                error: {
                    error: color.error.error40,
                    errorContainer: color.error.error90,
                    onError: color.error.error100,
                    onErrorContainer: color.error.error10,
                },
                inverse: {
                    inverseOnSurface: color.neutral.neutral95,
                    inversePrimary: color.primary.primary80,
                    inverseSurface: color.neutral.neutral20,
                },
                scrim: {scrim: color.neutral.neutral0},
                shadow: {shadow: color.neutral.neutral0},
            },
            dark: {
                primary: {
                    onPrimary: color.primary.primary20,
                    onPrimaryContainer: color.primary.primary90,
                    onPrimaryFixed: color.primary.primary10,
                    onPrimaryFixedVariant: color.primary.primary30,
                    primary: color.primary.primary80,
                    primaryContainer: color.primary.primary30,
                    primaryFixed: color.primary.primary90,
                    primaryFixedDim: color.primary.primary80,
                },
                secondary: {
                    onSecondary: color.secondary.secondary20,
                    onSecondaryContainer: color.secondary.secondary90,
                    onSecondaryFixed: color.secondary.secondary10,
                    onSecondaryFixedVariant: color.secondary.secondary30,
                    secondary: color.secondary.secondary80,
                    secondaryContainer: color.secondary.secondary30,
                    secondaryFixed: color.secondary.secondary90,
                    secondaryFixedDim: color.secondary.secondary80,
                },
                tertiary: {
                    onTertiary: color.tertiary.tertiary20,
                    onTertiaryContainer: color.tertiary.tertiary90,
                    onTertiaryFixed: color.tertiary.tertiary10,
                    onTertiaryFixedVariant: color.tertiary.tertiary30,
                    tertiary: color.tertiary.tertiary80,
                    tertiaryContainer: color.tertiary.tertiary30,
                    tertiaryFixed: color.tertiary.tertiary90,
                    tertiaryFixedDim: color.tertiary.tertiary80,
                },
                surface: {
                    onSurface: color.neutral.neutral80,
                    onSurfaceVariant: color.neutralVariant.neutralVariant80,
                    surface: color.neutral.neutral6,
                    surfaceBright: color.neutral.neutral24,
                    surfaceContainer: color.neutral.neutral12,
                    surfaceContainerHigh: color.neutral.neutral17,
                    surfaceContainerHighest: color.neutral.neutral22,
                    surfaceContainerLow: color.neutral.neutral10,
                    surfaceContainerLowest: color.neutral.neutral4,
                    surfaceDim: color.neutral.neutral6,
                },
                outline: {
                    outline: color.neutralVariant.neutralVariant60,
                    outlineVariant: color.neutralVariant.neutralVariant30,
                },
                error: {
                    error: color.error.error80,
                    errorContainer: color.error.error30,
                    onError: color.error.error20,
                    onErrorContainer: color.error.error90,
                },
                inverse: {
                    inverseOnSurface: color.neutral.neutral10,
                    inversePrimary: color.primary.primary40,
                    inverseSurface: color.neutral.neutral90,
                },
                scrim: {scrim: color.neutral.neutral0},
                shadow: {shadow: color.neutral.neutral0},
            },
        };

        return palette[scheme];
    };
