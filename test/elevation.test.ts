import {createElevation} from '../src/elevation';

describe('elevation', () => {
    it('should return light elevation levels by default', () => {
        const lightElevation = createElevation({scheme: 'light'});

        expect(lightElevation.level0).toEqual(expect.any(Object));
        expect(lightElevation.level1).toEqual(expect.any(Object));
        expect(lightElevation.level2).toEqual(expect.any(Object));
        expect(lightElevation.level3).toEqual(expect.any(Object));
        expect(lightElevation.level4).toEqual(expect.any(Object));
        expect(lightElevation.level5).toEqual(expect.any(Object));
    });

    it('should return dark elevation levels when scheme is dark', () => {
        const darkElevation = createElevation({scheme: 'dark'});

        expect(darkElevation.level0).toEqual(expect.any(Object));
        expect(darkElevation.level1).toEqual(expect.any(Object));
        expect(darkElevation.level2).toEqual(expect.any(Object));
        expect(darkElevation.level3).toEqual(expect.any(Object));
        expect(darkElevation.level4).toEqual(expect.any(Object));
        expect(darkElevation.level5).toEqual(expect.any(Object));
    });
});
