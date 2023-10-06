import {Border, BorderOptions, CREATE_BORDER} from '../src/border'; // 替换为你的文件路径
import type {Color} from '../src/palette';

describe('CREATE_BORDER', () => {
    const mockPalette = {
        surface: {
            dim: 'mock-dim-color',
        },
    } as Color;

    it('should create a border with default options', () => {
        const createBorder = CREATE_BORDER(mockPalette);
        const border: Border = createBorder({});

        expect(border).toEqual({
            width: 1,
            color: 'mock-dim-color',
            style: 'solid',
        });
    });

    it('should create a border with custom options', () => {
        const createBorder = CREATE_BORDER(mockPalette);
        const borderOptions: BorderOptions = {
            width: 2,
            color: 'custom-color',
            style: 'dotted',
        };
        const border: Border = createBorder(borderOptions);

        expect(border).toEqual({
            width: 2,
            color: 'custom-color',
            style: 'dotted',
        });
    });

    it('should create a border with default color if color is not provided', () => {
        const createBorder = CREATE_BORDER(mockPalette);
        const borderOptions: BorderOptions = {
            width: 3,
            style: 'double',
        };
        const border: Border = createBorder(borderOptions);

        expect(border).toEqual({
            width: 3,
            color: 'mock-dim-color',
            style: 'double',
        });
    });
});
