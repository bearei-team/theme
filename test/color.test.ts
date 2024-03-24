import {createColor} from '../src/color'

describe('color', () => {
    it('should return the correct color object based on input', () => {
        const lightTealColor = createColor({color: 'lightTeal'})

        expect(lightTealColor).toEqual(expect.any(Object))
    })
})
