import {FONT} from '../src/font';

describe('font', () => {
    it('should return default font values without options', () => {
        const font = FONT();

        expect(font.size).toEqual(expect.any(Object));
        expect(font.lineHeight).toEqual(expect.any(Object));
        expect(font.letterSpacing).toEqual(expect.any(Object));
        expect(font.weight).toEqual(expect.any(Object));
        expect(font.style).toEqual(expect.any(Object));
        expect(font.family).toEqual(expect.any(String));
        expect(font.codeFamily).toEqual(expect.any(String));
    });

    it('should return font values with custom family and codeFamily options', () => {
        const customFamily = 'Custom Font, sans-serif';
        const customCodeFamily = 'Custom Code Font, monospace';
        const font = FONT({family: customFamily, codeFamily: customCodeFamily});

        expect(font.family).toEqual(customFamily);
        expect(font.codeFamily).toEqual(customCodeFamily);
    });

    it('should return font values with custom options', () => {
        const customOptions = {
            family: 'Custom Font, sans-serif',
            codeFamily: 'Custom Code Font, monospace',
        };

        const font = FONT(customOptions);

        expect(font.family).toEqual(customOptions.family);
        expect(font.codeFamily).toEqual(customOptions.codeFamily);
    });
});
