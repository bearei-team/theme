import {SPACING} from '../src/spacing';

describe('spacing', () => {
    it('should return spacing values', () => {
        const spacing = SPACING();

        expect(spacing.none).toBe(0);
        expect(spacing.extraSmall).toBe(4);
        expect(spacing.small).toBe(8);
        expect(spacing.medium).toBe(16);
        expect(spacing.large).toBe(24);
        expect(spacing.extraLarge).toBe(32);
    });
});
