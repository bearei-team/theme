import {Color, color as processColor} from './color';
import {Elevation, elevation} from './elevation';
import {Font, font as processFont} from './font';
import {Palette, palette} from './palette';
import {Shape, shape} from './shape';
import {Spacing, spacing} from './spacing';
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

export const theme = (options: ThemeOptions = {}): Theme => {
    const {color = 'lightTeal', scheme = 'light'} = options;
    const createdColor = processColor({color});
    const font = processFont();

    return {
        color: createdColor,
        elevation: elevation({scheme}),
        font,
        palette: palette(createdColor)({scheme}),
        shape: shape(),
        spacing: spacing(),
        transition: transition,
        typography: typography(font),
    };
};
