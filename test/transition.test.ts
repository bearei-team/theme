import {TRANSITION} from '../src/transition';

describe('transition', () => {
    it('should return transition object with correct properties for default values', () => {
        const transition = TRANSITION({});
        expect(transition.bezier).toBeDefined();
        expect(transition.duration).toBeDefined();
    });

    it('should return transition object with correct properties for specified values', () => {
        const transition = TRANSITION({
            property: 'opacity',
            duration: 200,
            easing: 'emphasized',
        });

        expect(transition.bezier).toBeDefined();
        expect(transition.duration).toBe(200);
    });

    it('should return transition object with correct properties for legacy easing', () => {
        const transition = TRANSITION({
            easing: 'legacy',
        });

        expect(transition.bezier).toBeDefined();
        expect(transition.duration).toBeDefined();
    });

    it('should handle numeric duration correctly', () => {
        const transition = TRANSITION({
            duration: 500,
        });

        expect(transition.bezier).toBeDefined();
        expect(transition.duration).toBe(500);
    });
});
