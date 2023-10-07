import {Color, COLOR} from './color';
import {ELEVATION, Elevation} from './elevation';
import {Font, FONT} from './font';
import {Palette, PALETTE} from './palette';
import {Shape, SHAPE} from './shape';
import {SPACING, Spacing} from './spacing';
import {TRANSITION} from './transition';
import {Typography, TYPOGRAPHY} from './typography';

export interface ThemeOptions {
    scheme?: 'light' | 'dark';
    family?: string;
    codeFamily?: string;
    color?: 'lightTeal';
}

export interface Theme {
    elevation: Elevation;
    font: Font;
    typography: Typography;
    transition: typeof TRANSITION;
    color: Color;
    palette: Palette;
    shape: Shape;
    spacing: Spacing;
}

export const THEME = (options?: ThemeOptions): Theme => {
    const {scheme = 'light', color = 'lightTeal'} = options ?? {};
    const createdColor = COLOR({color});

    return {
        elevation: ELEVATION({scheme}),
        font: FONT(),
        typography: TYPOGRAPHY(),
        transition: TRANSITION,
        color: createdColor,
        palette: PALETTE(createdColor)({scheme}),
        shape: SHAPE(),
        spacing: SPACING(),
    };
};
