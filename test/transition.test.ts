import {createTransition} from '../src/transition';

describe('transition', () => {
    it('should return transition object with correct properties for default values', () => {
        const defaultTransition = createTransition({});

        expect(defaultTransition.bezier).toBeDefined();
        expect(defaultTransition.duration).toBeDefined();
    });

    it('should return transition object with correct properties for specified values', () => {
        const defaultTransition = createTransition({
            property: 'opacity',
            duration: 200,
            easing: 'emphasized',
        });

        expect(defaultTransition.bezier).toBeDefined();
        expect(defaultTransition.duration).toBe(200);
    });

    it('should return transition object with correct properties for legacy easing', () => {
        const defaultTransition = createTransition({
            easing: 'legacy',
        });

        expect(defaultTransition.bezier).toBeDefined();
        expect(defaultTransition.duration).toBeDefined();
    });

    it('should handle numeric duration correctly', () => {
        const defaultTransition = createTransition({
            duration: 500,
        });

        expect(defaultTransition.bezier).toBeDefined();
        expect(defaultTransition.duration).toBe(500);
    });
});
