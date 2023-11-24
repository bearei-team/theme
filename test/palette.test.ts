import {color} from '../src/color';
import {palette} from '../src/palette';

describe('palette', () => {
    it('should return default palette values for light scheme without options', () => {
        const lightTealColor = color({color: 'lightTeal'});
        const lightPalette = palette(lightTealColor)({scheme: 'light'});

        expect(lightPalette.primary).toEqual(expect.any(Object));
        expect(lightPalette.secondary).toEqual(expect.any(Object));
        expect(lightPalette.tertiary).toEqual(expect.any(Object));
        expect(lightPalette.surface).toEqual(expect.any(Object));
        expect(lightPalette.outline).toEqual(expect.any(Object));
        expect(lightPalette.error).toEqual(expect.any(Object));
        expect(lightPalette.inverse).toEqual(expect.any(Object));
        expect(lightPalette.scrim).toEqual(expect.any(Object));
        expect(lightPalette.shadow).toEqual(expect.any(Object));
    });

    it('should return palette values for dark scheme with default color options', () => {
        const lightTealColor = color({color: 'lightTeal'});
        const darkPalette = palette(lightTealColor)({scheme: 'dark'});

        expect(darkPalette.primary.primary).toEqual(lightTealColor.primary.primary80);
    });
});
