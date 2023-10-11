import {FONT, Font} from './font';

export interface Style {
    weight: number;
    size: number;
    lineHeight: number;
    letterSpacing: number;
    style: string;
    prominent?: {weight: number};
}

export interface TypographyStyle {
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
     * For display type, consider choosing a more expressive font, such as a handwritten or script font.
     *
     * If available, set the appropriate optical size to your usage.
     */
    display: TypographyStyle;

    /**
     * Headline
     *
     * Headlines are best-suited for short, high-emphasis text on smaller screens.
     * These styles can be good for marking primary passages of text or important regions of content.
     *
     * Headlines can also make use of expressive typefaces, provided that appropriate line height and letter spacing is also integrated to maintain readability.
     */
    headline: TypographyStyle;

    /**
     * Title
     *
     * Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short.
     * For example, consider using title styles to divide secondary passages of text or secondary regions of content.
     *
     * For titles, use caution when using expressive fonts, including display, handwritten, and script styles.
     */
    title: TypographyStyle;

    /**
     * Body
     *
     * Body styles are used for longer passages of text in your app.
     *
     * Use typefaces intended for body styles, which are readable at smaller sizes and can be comfortably read in longer passages.
     *
     * Avoid expressive or decorative fonts for body text because these can be harder to read at small sizes.
     */
    body: TypographyStyle;

    /**
     * Label
     *
     * Label styles are smaller, utilitarian styles, used for things like the text inside components or for very small text in the content body, such as captions.
     *
     * Buttons, for example, use the label large font.
     */
    label: TypographyStyle;
}

const typography = (font: Font) => (): Typography => ({
    display: {
        large: {
            weight: font.weight.regular,
            size: font.size.size10,
            lineHeight: font.lineHeight.lineHeight9,
            letterSpacing: font.letterSpacing.letterSpacing0,
            style: font.style.normal,
        },
        medium: {
            weight: font.weight.regular,
            size: font.size.size9,
            lineHeight: font.lineHeight.lineHeight8,
            letterSpacing: font.letterSpacing.letterSpacing1,
            style: font.style.normal,
        },
        small: {
            weight: font.weight.regular,
            size: font.size.size8,
            lineHeight: font.lineHeight.lineHeight7,
            letterSpacing: font.letterSpacing.letterSpacing1,
            style: font.style.normal,
        },
    },
    headline: {
        large: {
            weight: font.weight.regular,
            size: font.size.size7,
            lineHeight: font.lineHeight.lineHeight6,
            letterSpacing: font.letterSpacing.letterSpacing1,
            style: font.style.normal,
        },
        medium: {
            weight: font.weight.regular,
            size: font.size.size6,
            lineHeight: font.lineHeight.lineHeight5,
            letterSpacing: font.letterSpacing.letterSpacing1,
            style: font.style.normal,
        },
        small: {
            weight: font.weight.regular,
            size: font.size.size5,
            lineHeight: font.lineHeight.lineHeight4,
            letterSpacing: font.letterSpacing.letterSpacing1,
            style: font.style.normal,
        },
    },
    title: {
        large: {
            weight: font.weight.regular,
            size: font.size.size4,
            lineHeight: font.lineHeight.lineHeight3,
            letterSpacing: font.letterSpacing.letterSpacing1,
            style: font.style.normal,
        },
        medium: {
            weight: font.weight.medium,
            size: font.size.size3,
            lineHeight: font.lineHeight.lineHeight2,
            letterSpacing: font.letterSpacing.letterSpacing4,
            style: font.style.normal,
        },
        small: {
            weight: font.weight.medium,
            size: font.size.size2,
            lineHeight: font.lineHeight.lineHeight1,
            letterSpacing: font.letterSpacing.letterSpacing3,
            style: font.style.normal,
        },
    },
    body: {
        large: {
            weight: font.weight.regular,
            size: font.size.size3,
            lineHeight: font.lineHeight.lineHeight2,
            letterSpacing: font.letterSpacing.letterSpacing6,
            style: font.style.normal,
        },
        medium: {
            weight: font.weight.regular,
            size: font.size.size2,
            lineHeight: font.lineHeight.lineHeight1,
            letterSpacing: font.letterSpacing.letterSpacing2,
            style: font.style.normal,
        },
        small: {
            weight: font.weight.regular,
            size: font.size.size1,
            lineHeight: font.lineHeight.lineHeight0,
            letterSpacing: font.letterSpacing.letterSpacing5,
            style: font.style.normal,
        },
    },
    label: {
        large: {
            weight: font.weight.medium,
            size: font.size.size2,
            lineHeight: font.lineHeight.lineHeight1,
            letterSpacing: font.letterSpacing.letterSpacing3,
            prominent: {weight: font.weight.bold},
            style: font.style.normal,
        },
        medium: {
            weight: font.weight.medium,
            size: font.size.size1,
            lineHeight: font.lineHeight.lineHeight0,
            letterSpacing: font.letterSpacing.letterSpacing6,
            prominent: {weight: font.weight.bold},
            style: font.style.normal,
        },
        small: {
            weight: font.weight.medium,
            size: font.size.size0,
            lineHeight: font.lineHeight.lineHeight0,
            letterSpacing: font.letterSpacing.letterSpacing6,
            style: font.style.normal,
        },
    },
});

export const TYPOGRAPHY = typography(FONT());
