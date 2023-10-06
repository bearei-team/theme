import {Border, BorderOptions, CREATE_BORDER} from './border';
import {ELEVATION, Elevation} from './elevation';
import {FONT, Font, FontOptions} from './font';
import {Color, PALETTE, PaletteOptions} from './palette';
import {SHAPE, Shape} from './shape';
import {Spacing, SPACING} from './spacing';
import {CREATE_TRANSITION, Transition, TransitionOptions} from './transition';

export interface ThemeOptions extends Partial<PaletteOptions & FontOptions> {
    os?: 'android' | 'ios' | 'web';
}

export interface Theme {
    palette: Color;
    font: Font;
    spacing: Spacing;
    transition: (options: TransitionOptions) => Transition;
    border: (options: BorderOptions) => Border;
    shape: Shape;
    elevation: Elevation;
}

export const THEME = (options?: ThemeOptions): Theme => {
    const {scheme, color, rootFontSize, os} = options ?? {};
    const paletteColor = PALETTE({scheme, color});

    return {
        palette: paletteColor,
        font: FONT({rootFontSize}),
        shape: SHAPE(),
        spacing: SPACING(),
        border: CREATE_BORDER(paletteColor),
        transition: CREATE_TRANSITION(os),
        elevation: ELEVATION(),
    };
};
