import {COLOR} from '../src/color';
import {PALETTE} from '../src/palette';

describe('palette', () => {
    it('should return default palette values for light scheme without options', () => {
        const color = COLOR({color: 'lightTeal'});
        const palette = PALETTE(color)({scheme: 'light'});

        expect(palette.primary).toEqual(expect.any(Object));
        expect(palette.secondary).toEqual(expect.any(Object));
        expect(palette.tertiary).toEqual(expect.any(Object));
        expect(palette.surface).toEqual(expect.any(Object));
        expect(palette.outline).toEqual(expect.any(Object));
        expect(palette.error).toEqual(expect.any(Object));
        expect(palette.inverse).toEqual(expect.any(Object));
        expect(palette.scrim).toEqual(expect.any(Object));
        expect(palette.shadow).toEqual(expect.any(Object));
    });

    it('should return palette values for dark scheme with default color options', () => {
        const color = COLOR({color: 'lightTeal'});
        const palette = PALETTE(color)({scheme: 'dark'});

        expect(palette.primary.primary).toEqual(color.primary.primary80);
    });
});
