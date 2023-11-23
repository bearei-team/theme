import {Color, COLOR} from './color';
import {ELEVATION, Elevation} from './elevation';
import {Font, FONT} from './font';
import {Palette, PALETTE} from './palette';
import {Shape, SHAPE} from './shape';
import {SPACING, Spacing} from './spacing';
import {TRANSITION} from './transition';
import {Typography, TYPOGRAPHY} from './typography';

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
    transition: typeof TRANSITION;
    typography: Typography;
}

export const THEME = (options?: ThemeOptions): Theme => {
    const {color = 'lightTeal', scheme = 'light'} = options ?? {};
    const createdColor = COLOR({color});

    return {
        color: createdColor,
        elevation: ELEVATION({scheme}),
        font: FONT(),
        palette: PALETTE(createdColor)({scheme}),
        shape: SHAPE(),
        spacing: SPACING(),
        transition: TRANSITION,
        typography: TYPOGRAPHY(),
    };
};
