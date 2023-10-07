import {TRANSITION} from '../src/transition';

describe('transition', () => {
    it('should return transition object with correct properties for default values', () => {
        const transition = TRANSITION({});
        expect(transition.native.bezier).toBeDefined();
        expect(transition.native.duration).toBeDefined();
        expect(transition.web).toBeDefined();
    });

    it('should return transition object with correct properties for specified values', () => {
        const transition = TRANSITION({
            property: 'opacity',
            duration: 200,
            easing: 'emphasized',
        });

        expect(transition.native.bezier).toBeDefined();
        expect(transition.native.duration).toBe(200);
        expect(transition.web).toBe('opacity 0.2s cubic-bezier(0.2, 1, 0, 1)');
    });

    it('should return transition object with correct properties for legacy easing', () => {
        const transition = TRANSITION({
            easing: 'legacy',
        });

        expect(transition.native.bezier).toBeDefined();
        expect(transition.native.duration).toBeDefined();
        expect(transition.web).toBe('all 0.25s cubic-bezier(0.4, 1, 0.2, 1)');
    });

    it('should handle numeric duration correctly', () => {
        const transition = TRANSITION({
            duration: 500,
        });

        expect(transition.native.bezier).toBeDefined();
        expect(transition.native.duration).toBe(500);
        expect(transition.web).toBe('all 0.5s cubic-bezier(0.2, 1, 0, 1)');
    });
});
