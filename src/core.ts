import {border} from './border';
import {color} from './color';
import {font} from './font';
import {radius} from './radius';
import {shadow} from './shadow';
import {spacing} from './spacing';
import {transition} from './transition';

export type Color = (typeof color)['light'];
export interface ThemeOptions {
    scheme?: 'light' | 'dark';
    color?: keyof Color;
}

export interface Theme {
    color: Color & {primary: string; colors: string[]};
    font: typeof font;
    shadow: typeof shadow;
    spacing: typeof spacing;
    radius: typeof radius;
    transition: typeof transition;
    border: typeof border;
}

export const theme = (options?: ThemeOptions): Theme => {
    const {scheme = 'light', color: primaryColor = 'black'} = options ?? {};
    const colorScheme = color[scheme];

    return {
        color: {
            ...colorScheme,
            primary: colorScheme[primaryColor].primary,
            colors: colorScheme[primaryColor].colors,
        },
        font,
        shadow,
        spacing,
        radius,
        border,
        transition,
    };
};
