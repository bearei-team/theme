import {SHAPE} from '../src/shape';

describe('SHAPE function', () => {
    it('should return default shape values', () => {
        const shape = SHAPE();

        expect(shape.full).toEqual(expect.any(Object));
        expect(shape.extraLarge).toEqual(expect.any(Object));
        expect(shape.extraLargeTop).toEqual(expect.any(Object));
        expect(shape.large).toEqual(expect.any(Object));
        expect(shape.largeTop).toEqual(expect.any(Object));
        expect(shape.largeStart).toEqual(expect.any(Object));
        expect(shape.largeEnd).toEqual(expect.any(Object));
        expect(shape.medium).toEqual(expect.any(Object));
        expect(shape.small).toEqual(expect.any(Object));
        expect(shape.extraSmall).toEqual(expect.any(Object));
        expect(shape.extraSmallTop).toEqual(expect.any(Object));
        expect(shape.none).toEqual(expect.any(Object));
    });
});
