/**
 * None
 *      - Banners
 *      - Bottom app bars
 *      - Full-screen dialogs
 *      - Lists
 *      - Navigation bars
 *      - Navigation rails
 *      - Progress indicators
 *      - Search view (full-screen)
 *      - Side sheets (docked)
 *      - Tabs
 *      - Top app bars
 * Extra small
 *      - Autocomplete menu
 *      - Select menu
 *      - Snackbars
 *      - Standard menu
 *      - Text fields
 * Small
 *      - Chips
 *      - Rich tooltip
 * Medium
 *      - Cards
 *      - Small FABs
 * Large
 *      - Extended FABs
 *      - FABs
 *      - Navigation drawers
 * Extra large
 *      - Bottom sheets (docked)
 *      - Dialogs
 *      - Floating sheets
 *      - Large FABs
 *      - Search view (docked)
 *      - Time picker
 *      - Time input
 * Full
 *      - Badge
 *      - Buttons
 *      - Icon buttons
 *      - Sliders
 *      - Switches
 *      - Search bar
 */

export interface ShapeOptions {
    size: 'none' | 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'full';
    position: 'verticalStart' | 'verticalEnd' | 'horizontalStart' | 'horizontalEnd';
    unit?: 'px' | 'dp' | 'rem' | 'em';
}

export const shape = ({size, position, unit}: ShapeOptions): string => {
    const shapeSize = {
        none: 0,
        extraSmall: 4,
        small: 8,
        medium: 12,
        large: 16,
        extraLarge: 28,
        full: '50%',
    };

    const sizeNum = shapeSize[size];
    const shapePosition = {
        verticalStart: `${sizeNum} ${sizeNum} 0 0`,
        verticalEnd: `0 0 ${sizeNum} ${sizeNum}`,
        horizontalStart: `${sizeNum} 0 0 ${sizeNum}`,
        horizontalEnd: `0 ${sizeNum} ${sizeNum} 0`,
    };

    const result = shapePosition[position] ?? `${sizeNum}`;

    return unit
        ? result
              .split(' ')
              .map(num => `${num}${unit}`)
              .join(' ')
        : result;
};
