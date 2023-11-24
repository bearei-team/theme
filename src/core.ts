import {Color, color as themeColor} from './color';
import {elevation, Elevation} from './elevation';
import {Font, font} from './font';
import {palette, Palette} from './palette';
import {Shape, shape} from './shape';
import {spacing, Spacing} from './spacing';
import {transition} from './transition';
import {Typography, typography} from './typography';

export interface ThemeOptions {
    codeFamily?: string;
    color?: 'lightTeal';
    family?: string;
    scheme?: 'light' | 'dark';
}

export interface Theme {
    color: Color;
    elevation: Elevation;
    font: Font;
    palette: Palette;
    shape: Shape;
    spacing: Spacing;
    transition: typeof transition;
    typography: Typography;
}

export const theme = (options?: ThemeOptions): Theme => {
    const {color = 'lightTeal', scheme = 'light'} = options ?? {};
    const createdColor = themeColor({color});

    return {
        color: createdColor,
        elevation: elevation({scheme}),
        font: font(),
        palette: palette(createdColor)({scheme}),
        shape: shape(),
        spacing: spacing(),
        transition: transition,
        typography: typography(),
    };
};
