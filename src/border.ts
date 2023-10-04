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

export const border = ({width = 1, color = '#000000', style = 'solid'}: BorderOptions): Border => ({
    width,
    color,
    style,
});
