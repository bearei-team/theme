import {typography} from '../src/typography';

describe('typography function', () => {
    it('should return typography object with correct properties for default font', () => {
        const defaultTypography = typography();

        expect(defaultTypography.display.large).toBeDefined();
        expect(defaultTypography.headline.medium).toBeDefined();
        expect(defaultTypography.title.small).toBeDefined();
        expect(defaultTypography.body.medium).toBeDefined();
        expect(defaultTypography.label.large).toBeDefined();
    });

    it('should return typography object with correct properties for custom font', () => {
        const defaultTypography = typography();

        expect(defaultTypography.display.large).toBeDefined();
        expect(defaultTypography.headline.medium).toBeDefined();
        expect(defaultTypography.title.small).toBeDefined();
        expect(defaultTypography.body.medium).toBeDefined();
        expect(defaultTypography.label.large).toBeDefined();
    });

    it('should return typography object with correct prominent property for label styles', () => {
        const defaultTypography = typography();

        expect(defaultTypography.label.large.prominent).toBeDefined();
        expect(defaultTypography.label.medium.prominent).toBeDefined();
        expect(defaultTypography.label.small.prominent).not.toBeDefined();
    });
});
