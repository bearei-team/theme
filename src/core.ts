import {ELEVATION, Elevation} from './elevation';
import {Font, FONT} from './font';
import {TRANSITION} from './transition';
import {Typography, TYPOGRAPHY} from './typography';

export interface ThemeOptions {
    scheme?: 'light' | 'dark';
    family?: string;
    codeFamily?: string;
}

export interface Theme {
    elevation: Elevation;
    font: Font;
    typography: Typography;
    transition: typeof TRANSITION;
}

export const THEME = (options?: ThemeOptions): Theme => {
    const {scheme = 'light'} = options ?? {};

    return {
        elevation: ELEVATION({scheme}),
        font: FONT(),
        typography: TYPOGRAPHY(),
        transition: TRANSITION,
    };
};
