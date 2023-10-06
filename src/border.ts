import type {Color} from './palette';

export type BorderStyle = 'dotted' | 'solid' | 'double' | 'dashed';
export interface BorderOptions {
    width?: number;
    color?: string;
    style?: BorderStyle;
}

export interface Border {
    width: number;
    color: string;
    style: BorderStyle;
}

export const CREATE_BORDER =
    (palette: Color) =>
    ({width = 1, color, style = 'solid'}: BorderOptions): Border => ({
        width,
        color: color ?? palette.surface.dim,
        style,
    });
