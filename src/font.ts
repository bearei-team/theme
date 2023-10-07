import type {ThemeOptions} from './core';

export type FontOptions = Pick<ThemeOptions, 'family' | 'codeFamily'>;
export interface Font {
    size: Record<
        | 'size0'
        | 'size1'
        | 'size2'
        | 'size3'
        | 'size4'
        | 'size5'
        | 'size6'
        | 'size7'
        | 'size8'
        | 'size9'
        | 'size10',
        number
    >;
    lineHeight: Record<
        | 'lineHeight0'
        | 'lineHeight1'
        | 'lineHeight2'
        | 'lineHeight3'
        | 'lineHeight4'
        | 'lineHeight5'
        | 'lineHeight6'
        | 'lineHeight7'
        | 'lineHeight8'
        | 'lineHeight9',
        number
    >;
    letterSpacing: Record<
        | 'letterSpacing0'
        | 'letterSpacing1'
        | 'letterSpacing2'
        | 'letterSpacing3'
        | 'letterSpacing4'
        | 'letterSpacing5'
        | 'letterSpacing6',
        number
    >;
    weight: {
        regular: number;
        medium: number;
        bold: number;
    };
    style: {
        normal: string;
    };
    family: string;
    codeFamily: string;
}

export const FONT = ({family, codeFamily}: FontOptions = {}): Font => ({
    size: {
        size0: 11,
        size1: 12,
        size2: 14,
        size3: 16,
        size4: 22,
        size5: 24,
        size6: 28,
        size7: 32,
        size8: 36,
        size9: 45,
        size10: 57,
    },
    lineHeight: {
        lineHeight0: 16,
        lineHeight1: 20,
        lineHeight2: 24,
        lineHeight3: 28,
        lineHeight4: 32,
        lineHeight5: 36,
        lineHeight6: 40,
        lineHeight7: 44,
        lineHeight8: 52,
        lineHeight9: 64,
    },
    letterSpacing: {
        letterSpacing0: -0.25,
        letterSpacing1: 0,
        letterSpacing2: 0.25,
        letterSpacing3: 0.1,
        letterSpacing4: 0.15,
        letterSpacing5: 0.4,
        letterSpacing6: 0.5,
    },
    weight: {regular: 400, medium: 500, bold: 700},
    style: {normal: 'normal'},
    family:
        family ??
        `Zed Mono, NotoSansSC, -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,

    codeFamily:
        codeFamily ??
        `Zed Mono, source-code-pro, Menlo, Monaco, Consolas,
  'Courier New', monospace`,
});
