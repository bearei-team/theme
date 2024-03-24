import {createSpacing} from '../src/spacing'

describe('spacing', () => {
    it('should return spacing values', () => {
        const defaultSpacing = createSpacing()

        expect(defaultSpacing.none).toBe(0)
        expect(defaultSpacing.extraSmall).toBe(4)
        expect(defaultSpacing.small).toBe(8)
        expect(defaultSpacing.medium).toBe(16)
        expect(defaultSpacing.large).toBe(24)
        expect(defaultSpacing.extraLarge).toBe(32)
    })
})
