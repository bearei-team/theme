import {createColor} from '../src/color';
import {createPalette} from '../src/palette';

describe('palette', () => {
    it('should return default palette values for light scheme without options', () => {
        const lightTealColor = createColor({color: 'lightTeal'});
        const lightPalette = createPalette(lightTealColor, {scheme: 'light'});

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
        const lightTealColor = createColor({color: 'lightTeal'});
        const darkPalette = createPalette(lightTealColor, {scheme: 'dark'});

        expect(darkPalette.primary.primary).toEqual(lightTealColor.primary.primary80);
    });
});
