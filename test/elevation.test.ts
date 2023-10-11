import {ELEVATION} from '../src/elevation';

describe('elevation', () => {
    it('should return light elevation levels by default', () => {
        const elevation = ELEVATION({scheme: 'light'});

        expect(elevation.level0).toEqual(expect.any(Object));
        expect(elevation.level1).toEqual(expect.any(Object));
        expect(elevation.level2).toEqual(expect.any(Object));
        expect(elevation.level3).toEqual(expect.any(Object));
        expect(elevation.level4).toEqual(expect.any(Object));
        expect(elevation.level5).toEqual(expect.any(Object));
    });

    it('should return dark elevation levels when scheme is dark', () => {
        const elevation = ELEVATION({scheme: 'dark'});

        expect(elevation.level0).toEqual(expect.any(Object));
        expect(elevation.level1).toEqual(expect.any(Object));
        expect(elevation.level2).toEqual(expect.any(Object));
        expect(elevation.level3).toEqual(expect.any(Object));
        expect(elevation.level4).toEqual(expect.any(Object));
        expect(elevation.level5).toEqual(expect.any(Object));
    });
});
