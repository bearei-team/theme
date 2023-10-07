import {THEME} from '../src/core'; // 替换为实际的文件路径

describe('core', () => {
    it('should return the default theme with light scheme and lightTeal color', () => {
        const theme = THEME();

        expect(theme).toEqual({
            font: expect.any(Object),
            color: expect.any(Object),
            typography: expect.any(Object),
            elevation: expect.any(Object),
            transition: expect.any(Function),
            palette: expect.any(Object),
            shape: expect.any(Object),
            spacing: expect.any(Object),
        });

        expect(theme.color).toEqual(expect.any(Object));
        expect(theme.color.source).toEqual('#88C0D0');
    });

    it('should return the theme with dark scheme and lightTeal color', () => {
        const theme = THEME({scheme: 'dark'});

        expect(theme.elevation).toEqual(expect.any(Object));
        expect(theme.color).toEqual(expect.any(Object));
        expect(theme.color.source).toEqual('#88C0D0');
    });

    it('should return the theme with light scheme and custom color', () => {
        const customColor = 'lightTeal';
        const theme = THEME({color: customColor});

        expect(theme.elevation).toEqual(expect.any(Object));
        expect(theme.color).toEqual(expect.any(Object));
        expect(theme.color.source).toEqual('#88C0D0');
    });
});
