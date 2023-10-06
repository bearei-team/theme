import {ELEVATION, Elevation} from './elevation';

export interface ThemeOptions {
    scheme?: 'light' | 'dark';
}

export interface Theme {
    // palette: Color;
    // font: Font;
    // spacing: Spacing;
    // transition: (options: TransitionOptions) => Transition;
    // border: (options: BorderOptions) => Border;
    // shape: Shape;
    elevation: Elevation;
}

export const THEME = (options?: ThemeOptions): Theme => {
    const {scheme = 'light'} = options ?? {};
    // const paletteColor = PALETTE({scheme, color});

    return {
        elevation: ELEVATION({scheme}),
    };
};
