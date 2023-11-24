import {theme} from '../src/core';

describe('core', () => {
    it('should return the default theme with light scheme and lightTeal color', () => {
        const defaultTheme = theme();

        expect(defaultTheme).toEqual({
            font: expect.any(Object),
            color: expect.any(Object),
            typography: expect.any(Object),
            elevation: expect.any(Object),
            transition: expect.any(Function),
            palette: expect.any(Object),
            shape: expect.any(Object),
            spacing: expect.any(Object),
        });

        expect(defaultTheme.color).toEqual(expect.any(Object));
        expect(defaultTheme.color.source).toEqual('#88C0D0');
    });

    it('should return the theme with dark scheme and lightTeal color', () => {
        const darkTheme = theme({scheme: 'dark'});

        expect(darkTheme.elevation).toEqual(expect.any(Object));
        expect(darkTheme.color).toEqual(expect.any(Object));
        expect(darkTheme.color.source).toEqual('#88C0D0');
    });

    it('should return the theme with light scheme and custom color', () => {
        const lightTealColor = 'lightTeal';
        const lightTheme = theme({color: lightTealColor});

        expect(lightTheme.elevation).toEqual(expect.any(Object));
        expect(lightTheme.color).toEqual(expect.any(Object));
        expect(lightTheme.color.source).toEqual('#88C0D0');
    });
});
