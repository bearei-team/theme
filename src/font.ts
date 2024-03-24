import type {ThemeOptions} from './core'

type LetterSpacing =
    | 'letterSpacing0'
    | 'letterSpacing1'
    | 'letterSpacing2'
    | 'letterSpacing3'
    | 'letterSpacing4'
    | 'letterSpacing5'
    | 'letterSpacing6'

type LineHeight =
    | 'lineHeight0'
    | 'lineHeight1'
    | 'lineHeight2'
    | 'lineHeight3'
    | 'lineHeight4'
    | 'lineHeight5'
    | 'lineHeight6'
    | 'lineHeight7'
    | 'lineHeight8'
    | 'lineHeight9'

type Size =
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
    | 'size10'

export interface Font {
    codeFamily: string
    family: string
    letterSpacing: Record<LetterSpacing, number>
    lineHeight: Record<LineHeight, number>
    size: Record<Size, number>
    style: {normal: string}
    weight: {bold: number; medium: number; regular: number}
}

export type CreateFontOptions = Pick<ThemeOptions, 'family' | 'codeFamily'>
export const createFont = ({
    family,
    codeFamily
}: CreateFontOptions = {}): Font => ({
    codeFamily:
        codeFamily ??
        `Zed Mono, Zed Sans, source-code-pro, Menlo, Monaco, Consolas,'Courier New', monospace`,

    family:
        family ??
        `Zed Mono, Zed Sans, NotoSansSC, -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, 
        'Helvetica Neue', Arial, 'Noto Sans', sans-serif,'Apple Color Emoji', 'Segoe UI Emoji', 
        'Segoe UI Symbol', 'Noto Color Emoji'`,
    letterSpacing: {
        letterSpacing0: -0.25,
        letterSpacing1: 0,
        letterSpacing2: 0.25,
        letterSpacing3: 0.1,
        letterSpacing4: 0.15,
        letterSpacing5: 0.4,
        letterSpacing6: 0.5
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
        lineHeight9: 64
    },
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
        size10: 57
    },
    style: {normal: 'normal'},
    weight: {
        bold: 700,
        medium: 500,
        regular: 400
    }
})
