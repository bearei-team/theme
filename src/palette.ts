import type {ThemeOptions} from './core';

export interface Color {
    scrim: {
        /**
         * Used for scrims which help separate floating components from the background
         */
        scrim: string;
    };
    primary: {
        /**
         * Main color used across screens and components
         */
        primary: string;

        /**
         * Standout container color for key components
         */
        container: string;

        /**
         * Text and icons shown against the primary color
         */
        on: string;

        /**
         * Contrast-passing color shown against the primary container
         */
        onContainer: string;

        /**
         * Displays opposite of the primary color
         */
        inverse: string;

        /**
         * Primary fixed
         */
        fixed: string;

        /**
         * Primary fixed dim
         */
        fixedDim: string;

        /**
         * On primary fixed
         */
        onFixed: string;

        /**
         * On primary fixed variant
         */
        onFixedVariant: string;
    };
    secondary: {
        /**
         * Accent color used across screens and components
         */
        secondary: string;

        /**
         * Less prominent container color, for components like tonal buttons
         */
        container: string;

        /**
         * Text and icons shown against the secondary color
         */
        on: string;

        /**
         * Contrast-passing color shown against the secondary container
         */
        onContainer: string;

        /**
         * Secondary fixed
         */
        fixed: string;

        /**
         * Secondary fixed dim
         */
        fixedDim: string;

        /**
         * On secondary fixed
         */
        onFixed: string;

        /**
         * On secondary fixed variant
         */
        onFixedVariant: string;
    };
    tertiary: {
        /**
         * Tertiary
         */
        tertiary: string;

        /**
         * Contrasting container color, for components like input fields
         */
        container: string;

        /**
         * On tertiary
         */
        on: string;

        /**
         * Contrast-passing color shown against the tertiary container
         */
        onContainer: string;

        /**
         * Tertiary fixed
         */
        fixed: string;

        /**
         * Tertiary fixed dim
         */
        fixedDim: string;

        /**
         * On tertiary fixed
         */
        onFixed: string;

        /**
         * On tertiary fixed variant
         */
        onFixedVariant: string;
    };
    surface: {
        /**
         * Surface color for components like cards, sheets, and menus
         */
        surface: string;

        /**
         * Alternate surface color, can be used for active states
         */
        variant: string;

        /**
         * Text and icons shown against the surface color
         */
        on: string;

        /**
         * For text and icons to indicate active or inactive component state
         */
        onVariant: string;

        /**
         * Displays opposite color of the surrounding UI
         */
        inverse: string;

        /**
         * Used for text and icons shown against the inverse surface color
         */
        inverseOn: string;

        /**
         * Surface tint
         */
        tint: string;

        /**
         * Surface Dim
         */
        dim: string;

        /**
         * Surface Bright
         */
        bright: string;

        /**
         * Surface Container Lowest
         */
        containerLowest: string;

        /**
         * Surface Container Low
         */
        containerLow: string;

        /**
         * Surface Container
         */
        container: string;

        /**
         * Surface Container High
         */
        containerHigh: string;

        /**
         * Surface Container Highest
         */
        containerHighest: string;
    };
    background: {
        /**
         * Note: Background is a legacy color role. It is recommended to use Surface instead of Background.
         */
        background: string;

        /**
         * Used for text and icons shown against the background color
         */
        on: string;
    };
    hairline: {
        /**
         * Subtle color used for boundaries
         */
        outline: string;

        /**
         * Outline-variant is used to define the border of a component where 3:1 contrast ratio isn’t required, a container, or a divider.
         */
        outlineVariant: string;
    };
    error: {
        /**
         * Indicates errors, such as invalid input in a date picker
         */
        error: string;

        /**
         * Error container
         */
        container: string;

        /**
         * Used for text and icons on the error color
         */
        on: string;

        /**
         * On error container
         */
        onContainer: string;
    };
    shadow: {
        /**
         * For shadows applied to elevated components
         */
        shadow: string;
    };
}

export interface PaletteOptions extends Pick<ThemeOptions, 'scheme'> {
    color?: 'deepTeal';
}

export interface Palette {
    light: Color;
    dark: Color;
}

export const PALETTE = ({color = 'deepTeal', scheme = 'light'}: PaletteOptions): Color => {
    const themeColor = {
        deepTeal: {
            source: '#88C0D0',
            primary: {
                primary0: '#000000',
                primary10: '#001f26',
                primary20: '#003640',
                primary25: '#00424e',
                primary30: '#004e5c',
                primary35: '#005b6b',
                primary40: '#00687a',
                primary50: '#008399',
                primary60: '#009eb9',
                primary70: '#2dbad8',
                primary80: '#56d6f4',
                primary90: '#acecff',
                primary95: '#d8f6ff',
                primary98: '#f0fbff',
                primary99: '#f8fdff',
                primary100: '#ffffff',
            },
            secondary: {
                secondary0: '#000000',
                secondary10: '#001d32',
                secondary20: '#003353',
                secondary25: '#003f64',
                secondary30: '#004a75',
                secondary35: '#005787',
                secondary40: '#00639a',
                secondary50: '#207cbb',
                secondary60: '#4597d6',
                secondary70: '#63b1f3',
                secondary80: '#95ccff',
                secondary90: '#cee5ff',
                secondary95: '#e8f2ff',
                secondary98: '#f7f9ff',
                secondary99: '#fcfcff',
                secondary100: '#ffffff',
            },
            tertiary: {
                tertiary0: '#000000',
                tertiary10: '#001c37',
                tertiary20: '#003259',
                tertiary25: '#003d6c',
                tertiary30: '#00497f',
                tertiary35: '#005592',
                tertiary40: '#0b61a4',
                tertiary50: '#357abf',
                tertiary60: '#5394da',
                tertiary70: '#70aff7',
                tertiary80: '#a0c9ff',
                tertiary90: '#d2e4ff',
                tertiary95: '#eaf1ff',
                tertiary98: '#f8f9ff',
                tertiary99: '#fdfcff',
                tertiary100: '#ffffff',
            },
            neutral: {
                neutral0: '#000000',
                neutral10: '#001b3d',
                neutral20: '#003062',
                neutral25: '#003b76',
                neutral30: '#00468a',
                neutral35: '#13529a',
                neutral40: '#265ea7',
                neutral50: '#4477c1',
                neutral60: '#6091dd',
                neutral70: '#7cacfa',
                neutral80: '#a8c8ff',
                neutral90: '#d6e3ff',
                neutral95: '#ecf0ff',
                neutral98: '#f9f9ff',
                neutral99: '#fdfbff',
                neutral100: '#ffffff',
            },
            neutralVariant: {
                neutralVariant0: '#000000',
                neutralVariant10: '#141d1f',
                neutralVariant20: '#293234',
                neutralVariant25: '#343d40',
                neutralVariant30: '#3f484b',
                neutralVariant35: '#4b5457',
                neutralVariant40: '#576063',
                neutralVariant50: '#70797c',
                neutralVariant60: '#899295',
                neutralVariant70: '#a4adb0',
                neutralVariant80: '#bfc8cb',
                neutralVariant90: '#dbe4e7',
                neutralVariant95: '#e9f2f5',
                neutralVariant98: '#f2fbfe',
                neutralVariant99: '#f8fdff',
                neutralVariant100: '#ffffff',
            },
            error: {
                error0: '#000000',
                error10: '#410002',
                error20: '#690005',
                error25: '#7e0007',
                error30: '#93000a',
                error35: '#a80710',
                error40: '#ba1a1a',
                error50: '#de3730',
                error60: '#ff5449',
                error70: '#ff897d',
                error80: '#ffb4ab',
                error90: '#ffdad6',
                error95: '#ffedea',
                error98: '#fff8f7',
                error99: '#fffbff',
                error100: '#ffffff',
            },
            surfaces: [],
        },
    };

    const paletteColor = themeColor[color];
    const result = {
        light: {
            scrim: {
                scrim: paletteColor.neutral.neutral0,
            },
            primary: {
                primary: paletteColor.primary.primary40,
                container: paletteColor.primary.primary90,
                on: paletteColor.primary.primary100,
                onContainer: paletteColor.primary.primary10,
                inverse: paletteColor.primary.primary80,
                fixed: paletteColor.primary.primary90,
                fixedDim: paletteColor.primary.primary80,
                onFixed: paletteColor.primary.primary10,
                onFixedVariant: paletteColor.primary.primary30,
            },
            secondary: {
                secondary: paletteColor.secondary.secondary40,
                container: paletteColor.secondary.secondary90,
                on: paletteColor.secondary.secondary100,
                onContainer: paletteColor.secondary.secondary10,
                fixed: paletteColor.secondary.secondary90,
                fixedDim: paletteColor.secondary.secondary80,
                onFixed: paletteColor.secondary.secondary10,
                onFixedVariant: paletteColor.secondary.secondary30,
            },
            tertiary: {
                tertiary: paletteColor.tertiary.tertiary40,
                container: paletteColor.tertiary.tertiary90,
                on: paletteColor.tertiary.tertiary100,
                onContainer: paletteColor.tertiary.tertiary10,
                fixed: paletteColor.tertiary.tertiary90,
                fixedDim: paletteColor.tertiary.tertiary80,
                onFixed: paletteColor.tertiary.tertiary10,
                onFixedVariant: paletteColor.tertiary.tertiary30,
            },
            surface: {
                surface: paletteColor.neutral.neutral98,
                variant: paletteColor.neutralVariant.neutralVariant90,
                on: paletteColor.neutral.neutral10,
                onVariant: paletteColor.neutralVariant.neutralVariant30,
                inverse: paletteColor.neutral.neutral20,
                inverseOn: paletteColor.neutral.neutral95,
                tint: paletteColor.primary.primary40,
                dim: paletteColor.neutral.neutral90,
                bright: paletteColor.neutral.neutral98,
                containerLowest: paletteColor.neutral.neutral100,
                containerLow: paletteColor.neutral.neutral95,
                container: paletteColor.neutral.neutral95,
                containerHigh: paletteColor.neutral.neutral90,
                containerHighest: paletteColor.neutral.neutral90,
            },
            background: {
                /**
                 * Note: Background is a legacy color role. It is recommended to use Surface instead of Background.
                 */
                background: paletteColor.neutral.neutral98,

                /**
                 * Used for text and icons shown against the background color
                 */
                on: paletteColor.neutral.neutral10,
            },
            hairline: {
                /**
                 * Subtle color used for boundaries
                 */
                outline: paletteColor.neutralVariant.neutralVariant50,

                /**
                 * Outline-variant is used to define the border of a component where 3:1 contrast ratio isn’t required, a container, or a divider.
                 */
                outlineVariant: paletteColor.neutralVariant.neutralVariant80,
            },
            error: {
                /**
                 * Indicates errors, such as invalid input in a date picker
                 */
                error: paletteColor.error.error40,

                /**
                 * Error container
                 */
                container: paletteColor.error.error90,

                /**
                 * Used for text and icons on the error color
                 */
                on: paletteColor.error.error100,

                /**
                 * On error container
                 */
                onContainer: paletteColor.error.error10,
            },
            shadow: {
                /**
                 * For shadows applied to elevated components
                 */
                shadow: paletteColor.neutral.neutral0,
            },
        },
        dark: {
            scrim: {
                scrim: paletteColor.neutral.neutral0,
            },
            primary: {
                primary: paletteColor.primary.primary80,
                container: paletteColor.primary.primary30,
                on: paletteColor.primary.primary20,
                onContainer: paletteColor.primary.primary90,
                inverse: paletteColor.primary.primary40,
                fixed: paletteColor.primary.primary90,
                fixedDim: paletteColor.primary.primary80,
                onFixed: paletteColor.primary.primary10,
                onFixedVariant: paletteColor.primary.primary30,
            },
            secondary: {
                secondary: paletteColor.secondary.secondary80,
                container: paletteColor.secondary.secondary30,
                on: paletteColor.secondary.secondary20,
                onContainer: paletteColor.secondary.secondary90,
                fixed: paletteColor.secondary.secondary90,
                fixedDim: paletteColor.secondary.secondary80,
                onFixed: paletteColor.secondary.secondary10,
                onFixedVariant: paletteColor.secondary.secondary30,
            },
            tertiary: {
                tertiary: paletteColor.tertiary.tertiary80,
                container: paletteColor.tertiary.tertiary30,
                on: paletteColor.tertiary.tertiary20,
                onContainer: paletteColor.tertiary.tertiary90,
                fixed: paletteColor.tertiary.tertiary90,
                fixedDim: paletteColor.tertiary.tertiary80,
                onFixed: paletteColor.tertiary.tertiary10,
                onFixedVariant: paletteColor.tertiary.tertiary30,
            },
            surface: {
                surface: paletteColor.neutral.neutral10,
                variant: paletteColor.neutralVariant.neutralVariant30,
                on: paletteColor.neutral.neutral90,
                onVariant: paletteColor.neutralVariant.neutralVariant80,
                inverse: paletteColor.neutral.neutral90,
                inverseOn: paletteColor.neutral.neutral20,
                tint: paletteColor.primary.primary80,
                dim: paletteColor.neutral.neutral10,
                bright: paletteColor.neutral.neutral25,
                containerLowest: paletteColor.neutral.neutral0,
                containerLow: paletteColor.neutral.neutral10,
                container: paletteColor.neutral.neutral10,
                containerHigh: paletteColor.neutral.neutral20,
                containerHighest: paletteColor.neutral.neutral20,
            },
            background: {
                background: paletteColor.neutral.neutral10,
                on: paletteColor.neutral.neutral90,
            },
            hairline: {
                outline: paletteColor.neutralVariant.neutralVariant60,
                outlineVariant: paletteColor.neutralVariant.neutralVariant30,
            },
            error: {
                error: paletteColor.error.error80,
                container: paletteColor.error.error30,
                on: paletteColor.error.error20,
                onContainer: paletteColor.error.error90,
            },
            shadow: {
                shadow: paletteColor.neutral.neutral0,
            },
        },
    };

    return result[scheme];
};
