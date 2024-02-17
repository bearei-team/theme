import {createFont} from '../src/font';

describe('font', () => {
    it('should return default font values without options', () => {
        const defaultFont = createFont();

        expect(defaultFont.size).toEqual(expect.any(Object));
        expect(defaultFont.lineHeight).toEqual(expect.any(Object));
        expect(defaultFont.letterSpacing).toEqual(expect.any(Object));
        expect(defaultFont.weight).toEqual(expect.any(Object));
        expect(defaultFont.style).toEqual(expect.any(Object));
        expect(defaultFont.family).toEqual(expect.any(String));
        expect(defaultFont.codeFamily).toEqual(expect.any(String));
    });

    it('should return font values with custom family and codeFamily options', () => {
        const customFamily = 'Custom Font, sans-serif';
        const customCodeFamily = 'Custom Code Font, monospace';
        const customFont = createFont({family: customFamily, codeFamily: customCodeFamily});

        expect(customFont.family).toEqual(customFamily);
        expect(customFont.codeFamily).toEqual(customCodeFamily);
    });

    it('should return font values with custom options', () => {
        const customOptions = {
            family: 'Custom Font, sans-serif',
            codeFamily: 'Custom Code Font, monospace',
        };

        const customFont = createFont(customOptions);

        expect(customFont.family).toEqual(customOptions.family);
        expect(customFont.codeFamily).toEqual(customOptions.codeFamily);
    });
});
