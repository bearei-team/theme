import {COLOR} from '../src/color';

describe('color', () => {
    it('should return the correct color object based on input', () => {
        const themeColor = COLOR({color: 'lightTeal'});

        expect(themeColor).toEqual(expect.any(Object));
    });
});
