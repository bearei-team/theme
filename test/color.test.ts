import {color} from '../src/color';

describe('color', () => {
    it('should return the correct color object based on input', () => {
        const lightTealColor = color({color: 'lightTeal'});

        expect(lightTealColor).toEqual(expect.any(Object));
    });
});
