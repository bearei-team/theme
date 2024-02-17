import {createShape} from '../src/shape';

describe('SHAPE function', () => {
    it('should return default shape values', () => {
        const defaultShape = createShape();

        expect(defaultShape.full).toEqual(expect.any(Object));
        expect(defaultShape.extraLarge).toEqual(expect.any(Object));
        expect(defaultShape.extraLargeTop).toEqual(expect.any(Object));
        expect(defaultShape.large).toEqual(expect.any(Object));
        expect(defaultShape.largeTop).toEqual(expect.any(Object));
        expect(defaultShape.largeStart).toEqual(expect.any(Object));
        expect(defaultShape.largeEnd).toEqual(expect.any(Object));
        expect(defaultShape.medium).toEqual(expect.any(Object));
        expect(defaultShape.small).toEqual(expect.any(Object));
        expect(defaultShape.extraSmall).toEqual(expect.any(Object));
        expect(defaultShape.extraSmallTop).toEqual(expect.any(Object));
        expect(defaultShape.none).toEqual(expect.any(Object));
    });
});
