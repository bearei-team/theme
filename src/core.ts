import {Color, createColor} from './color';
import {Elevation, createElevation} from './elevation';
import {Font, createFont} from './font';
import {Palette, createPalette} from './palette';
import {Shape, createShape} from './shape';
import {Spacing, createSpacing} from './spacing';
import {createTransition} from './transition';
import {Typography, createTypography} from './typography';

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
    createTransition: typeof createTransition;
    typography: Typography;
}

export const theme = ({color = 'lightTeal', scheme = 'light'}: ThemeOptions = {}): Theme => {
    const createdColor = createColor({color});
    const font = createFont();

    return {
        color: createdColor,
        createTransition,
        elevation: createElevation({scheme}),
        font,
        palette: createPalette(createdColor, {scheme}),
        shape: createShape(),
        spacing: createSpacing(),
        typography: createTypography(font),
    };
};
