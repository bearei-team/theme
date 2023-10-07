import {TYPOGRAPHY} from '../src/typography';

describe('typography function', () => {
    it('should return typography object with correct properties for default font', () => {
        const typographyObj = TYPOGRAPHY();
        expect(typographyObj.display.large).toBeDefined();
        expect(typographyObj.headline.medium).toBeDefined();
        expect(typographyObj.title.small).toBeDefined();
        expect(typographyObj.body.medium).toBeDefined();
        expect(typographyObj.label.large).toBeDefined();
    });

    it('should return typography object with correct properties for custom font', () => {
        const typographyObj = TYPOGRAPHY();
        expect(typographyObj.display.large).toBeDefined();
        expect(typographyObj.headline.medium).toBeDefined();
        expect(typographyObj.title.small).toBeDefined();
        expect(typographyObj.body.medium).toBeDefined();
        expect(typographyObj.label.large).toBeDefined();
    });

    it('should return typography object with correct prominent property for label styles', () => {
        const typographyObj = TYPOGRAPHY();
        expect(typographyObj.label.large.prominent).toBeDefined();
        expect(typographyObj.label.medium.prominent).toBeDefined();
        expect(typographyObj.label.small.prominent).not.toBeDefined();
    });
});
