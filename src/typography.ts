import {Font} from './font';

interface Style {
    letterSpacing: number;
    lineHeight: number;
    prominent?: {weight: number};
    size: number;
    style: string;
    weight: number;
}

interface TypographyStyle {
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

export const createTypography = (font: Font): Typography => ({
    display: {
        large: {
            letterSpacing: font.letterSpacing.letterSpacing0,
            lineHeight: font.lineHeight.lineHeight9,
            size: font.size.size10,
            style: font.style.normal,
            weight: font.weight.regular,
        },
        medium: {
            letterSpacing: font.letterSpacing.letterSpacing1,
            lineHeight: font.lineHeight.lineHeight8,
            size: font.size.size9,
            style: font.style.normal,
            weight: font.weight.regular,
        },
        small: {
            letterSpacing: font.letterSpacing.letterSpacing1,
            lineHeight: font.lineHeight.lineHeight7,
            size: font.size.size8,
            style: font.style.normal,
            weight: font.weight.regular,
        },
    },
    headline: {
        large: {
            letterSpacing: font.letterSpacing.letterSpacing1,
            lineHeight: font.lineHeight.lineHeight6,
            size: font.size.size7,
            style: font.style.normal,
            weight: font.weight.regular,
        },
        medium: {
            letterSpacing: font.letterSpacing.letterSpacing1,
            lineHeight: font.lineHeight.lineHeight5,
            size: font.size.size6,
            style: font.style.normal,
            weight: font.weight.regular,
        },
        small: {
            letterSpacing: font.letterSpacing.letterSpacing1,
            lineHeight: font.lineHeight.lineHeight4,
            size: font.size.size5,
            style: font.style.normal,
            weight: font.weight.regular,
        },
    },
    title: {
        large: {
            letterSpacing: font.letterSpacing.letterSpacing1,
            lineHeight: font.lineHeight.lineHeight3,
            size: font.size.size4,
            style: font.style.normal,
            weight: font.weight.regular,
        },
        medium: {
            letterSpacing: font.letterSpacing.letterSpacing4,
            lineHeight: font.lineHeight.lineHeight2,
            size: font.size.size3,
            style: font.style.normal,
            weight: font.weight.medium,
        },
        small: {
            letterSpacing: font.letterSpacing.letterSpacing3,
            lineHeight: font.lineHeight.lineHeight1,
            size: font.size.size2,
            style: font.style.normal,
            weight: font.weight.medium,
        },
    },
    body: {
        large: {
            letterSpacing: font.letterSpacing.letterSpacing6,
            lineHeight: font.lineHeight.lineHeight2,
            size: font.size.size3,
            style: font.style.normal,
            weight: font.weight.regular,
        },
        medium: {
            letterSpacing: font.letterSpacing.letterSpacing2,
            lineHeight: font.lineHeight.lineHeight1,
            size: font.size.size2,
            style: font.style.normal,
            weight: font.weight.regular,
        },
        small: {
            letterSpacing: font.letterSpacing.letterSpacing5,
            lineHeight: font.lineHeight.lineHeight0,
            size: font.size.size1,
            style: font.style.normal,
            weight: font.weight.regular,
        },
    },
    label: {
        large: {
            letterSpacing: font.letterSpacing.letterSpacing3,
            lineHeight: font.lineHeight.lineHeight1,
            prominent: {weight: font.weight.bold},
            size: font.size.size2,
            style: font.style.normal,
            weight: font.weight.medium,
        },
        medium: {
            letterSpacing: font.letterSpacing.letterSpacing6,
            lineHeight: font.lineHeight.lineHeight0,
            prominent: {weight: font.weight.bold},
            size: font.size.size1,
            style: font.style.normal,
            weight: font.weight.medium,
        },
        small: {
            letterSpacing: font.letterSpacing.letterSpacing6,
            lineHeight: font.lineHeight.lineHeight0,
            size: font.size.size0,
            style: font.style.normal,
            weight: font.weight.medium,
        },
    },
});
