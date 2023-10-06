export interface Style {
    weight: number;
    size: number;
    lineHeight: number;
    letterSpacing: number;
    prominent?: {weight: number};
}

export interface FontStyle {
    large: Style;
    medium: Style;
    small: Style;
}

export interface Typography {
    /**
     * Display
     *
     * There are three display styles in the default type scale: Large, medium, and small.
     * As the largest text on the screen,display styles are reserved for short, important text or numerals.
     * They work best on large screens.
     *
     * For display type, consider choosing a more expressive font, such as a handwritten or script style.
     *
     * If available, set the appropriate optical size to your usage.
     */
    display: FontStyle;

    /**
     * Headline
     *
     * Headlines are best-suited for short, high-emphasis text on smaller screens.
     * These styles can be good for marking primary passages of text or important regions of content.
     *
     * Headlines can also make use of expressive typefaces, provided that appropriate line height and letter spacing is also integrated to maintain readability.
     */
    headline: FontStyle;

    /**
     * Title
     *
     * Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short.
     * For example, consider using title styles to divide secondary passages of text or secondary regions of content.
     *
     * For titles, use caution when using expressive fonts, including display, handwritten, and script styles.
     */
    title: FontStyle;

    /**
     * Body
     *
     * Body styles are used for longer passages of text in your app.
     *
     * Use typefaces intended for body styles, which are readable at smaller sizes and can be comfortably read in longer passages.
     *
     * Avoid expressive or decorative fonts for body text because these can be harder to read at small sizes.
     */
    body: FontStyle;

    /**
     * Label
     *
     * Label styles are smaller, utilitarian styles, used for things like the text inside components or for very small text in the content body, such as captions.
     *
     * Buttons, for example, use the label large style.
     */
    label: FontStyle;
}

export interface FontOptions {
    rootFontSize?: number;
}

export interface Font {
    style: typeof style;
    typography: Typography;
}

const style = {
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
        lineHeight1: 16,
        lineHeight2: 20,
        lineHeight3: 24,
        lineHeight4: 28,
        lineHeight5: 32,
        lineHeight6: 36,
        lineHeight7: 40,
        lineHeight8: 44,
        lineHeight9: 52,
        lineHeight10: 64,
    },
    tracking: {
        tracking0: -0.25,
        tracking1: 0,
        tracking2: 0.25,
        tracking3: 0.1,
        tracking4: 0.15,
        tracking5: 0.4,
        tracking6: 0.5,
    },
    weight: {regular: 400, medium: 500, bold: 700},
    family: `Zed Mono, NotoSansSC, -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,

    codeFamily: `Zed Mono, source-code-pro, Menlo, Monaco, Consolas,
  'Courier New', monospace`,
};

const createFont =
    (style: Font['style']) =>
    ({rootFontSize = 16}: FontOptions): Font => {
        const processLetterSpacing = (tracking: number) => tracking / rootFontSize;
        const typography = {
            display: {
                large: {
                    weight: style.weight.regular,
                    size: style.size.size10,
                    lineHeight: style.lineHeight.lineHeight10,
                    letterSpacing: processLetterSpacing(style.tracking.tracking0),
                },
                medium: {
                    weight: style.weight.regular,
                    size: style.size.size9,
                    lineHeight: style.lineHeight.lineHeight9,
                    letterSpacing: processLetterSpacing(style.tracking.tracking1),
                },
                small: {
                    weight: style.weight.regular,
                    size: style.size.size8,
                    lineHeight: style.lineHeight.lineHeight8,
                    letterSpacing: processLetterSpacing(style.tracking.tracking1),
                },
            },
            headline: {
                large: {
                    weight: style.weight.regular,
                    size: style.size.size7,
                    lineHeight: style.lineHeight.lineHeight7,
                    letterSpacing: processLetterSpacing(style.tracking.tracking1),
                },
                medium: {
                    weight: style.weight.regular,
                    size: style.size.size6,
                    lineHeight: style.lineHeight.lineHeight6,
                    letterSpacing: processLetterSpacing(style.tracking.tracking1),
                },
                small: {
                    weight: style.weight.regular,
                    size: style.size.size5,
                    lineHeight: style.lineHeight.lineHeight5,
                    letterSpacing: processLetterSpacing(style.tracking.tracking1),
                },
            },
            title: {
                large: {
                    weight: style.weight.regular,
                    size: style.size.size4,
                    lineHeight: style.lineHeight.lineHeight4,
                    letterSpacing: processLetterSpacing(style.tracking.tracking1),
                },
                medium: {
                    weight: style.weight.medium,
                    size: style.size.size3,
                    lineHeight: style.lineHeight.lineHeight3,
                    letterSpacing: processLetterSpacing(style.tracking.tracking4),
                },
                small: {
                    weight: style.weight.medium,
                    size: style.size.size2,
                    lineHeight: style.lineHeight.lineHeight2,
                    letterSpacing: processLetterSpacing(style.tracking.tracking3),
                },
            },
            body: {
                large: {
                    weight: style.weight.regular,
                    size: style.size.size3,
                    lineHeight: style.lineHeight.lineHeight3,
                    letterSpacing: processLetterSpacing(style.tracking.tracking6),
                },
                medium: {
                    weight: style.weight.regular,
                    size: style.size.size2,
                    lineHeight: style.lineHeight.lineHeight2,
                    letterSpacing: processLetterSpacing(style.tracking.tracking2),
                },
                small: {
                    weight: style.weight.regular,
                    size: style.size.size1,
                    lineHeight: style.lineHeight.lineHeight1,
                    letterSpacing: processLetterSpacing(style.tracking.tracking5),
                },
            },
            label: {
                large: {
                    weight: style.weight.medium,
                    size: style.size.size2,
                    lineHeight: style.lineHeight.lineHeight2,
                    letterSpacing: processLetterSpacing(style.tracking.tracking3),
                    prominent: {weight: style.weight.bold},
                },
                medium: {
                    weight: style.weight.medium,
                    size: style.size.size1,
                    lineHeight: style.lineHeight.lineHeight1,
                    letterSpacing: processLetterSpacing(style.tracking.tracking6),
                    prominent: {weight: style.weight.bold},
                },
                small: {
                    weight: style.weight.medium,
                    size: style.size.size0,
                    lineHeight: style.lineHeight.lineHeight0,
                    letterSpacing: processLetterSpacing(style.tracking.tracking6),
                },
            },
        };

        return {
            style,
            typography,
        };
    };

export const FONT = createFont(style);
