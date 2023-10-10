import type {ThemeOptions} from './core';

export type ElevationOptions = Required<Pick<ThemeOptions, 'scheme'>>;
export interface Shadow {
    x: number;
    y: number;
    blur: number;
    spread: number;
    opacity: number;
    elevation: number;
}

export interface Elevation {
    /**
     * level0
     *      - Assist Chip (Flat)
     *      - Carousel Item
     *      - Filled Button
     *      - Filled Card
     *      - Filter Chip (Flat)
     *      - Full Screen Dialog
     *      - List Item
     *      - List Input Chip
     *      - List Navigation Rail
     *      - Primary Navigation Tabs
     *      - Secondary Navigation Tabs
     *      - Outlined Card
     *      - Side Sheet (Docked)
     *      - Slider (Track)
     *      - Suggestion Chip (Flat)
     *      - Top App Bar
     */
    level0: Shadow[];

    /**
     * level1
     *      - Assist Chip (Elevated)
     *      - Banner
     *      - Bottom Sheet (Modal)
     *      - Elevated Button
     *      - Elevated Card
     *      - Extended FAB (Lowered)
     *      - FAB (Lowered)
     *      - Filter Chip (Elevated)
     *      - Navigation Drawer (Modal)
     *      - Side Sheet (Modal)
     *      - Slider (Handle)
     *      - Suggestion Chip (Elevated)
     */
    level1: Shadow[];

    /**
     * level2
     *      - Autocomplete Menu
     *      - Bottom App Bar
     *      - Dropdown Menu
     *      - Menu
     *      - Navigation Bar
     *      - Select Menu
     *      - Rich Tooltip
     *      - Top App Bar (Scrolled)
     */
    level2: Shadow[];

    /**
     * level3
     *      - FAB
     *      - Extended FAB
     *      - Modal Date Picker
     *      - Docked Date Picker
     *      - Modal Date Input
     *      - Dialog
     *      - Search Bar
     *      - Search View
     *      - Time Picker
     *      - Time Input
     */
    level3: Shadow[];

    /**
     * level4
     *      - not assigned as resting level
     */
    level4: Shadow[];

    /**
     * level5
     *      - not assigned as resting level
     */
    level5: Shadow[];
}

export const ELEVATION = ({scheme}: ElevationOptions): Elevation => {
    const elevation = {
        light: {
            level0: [
                {
                    x: 0,
                    y: 0,
                    blur: 0,
                    spread: 0,
                    opacity: 0,
                    elevation: 0,
                },
                {
                    x: 0,
                    y: 0,
                    blur: 0,
                    spread: 0,
                    opacity: 0,
                    elevation: 0,
                },
            ],
            level1: [
                {
                    x: 0,
                    y: 1,
                    blur: 3,
                    spread: 1,
                    opacity: 0.15,
                    elevation: 3,
                },
                {
                    x: 0,
                    y: 1,
                    blur: 2,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 2,
                },
            ],
            level2: [
                {
                    x: 0,
                    y: 2,
                    blur: 6,
                    spread: 2,
                    opacity: 0.15,
                    elevation: 6,
                },
                {
                    x: 0,
                    y: 1,
                    blur: 2,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 2,
                },
            ],
            level3: [
                {
                    x: 0,
                    y: 1,
                    blur: 3,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 3,
                },
                {
                    x: 0,
                    y: 4,
                    blur: 8,
                    spread: 3,
                    opacity: 0.15,
                    elevation: 8,
                },
            ],
            level4: [
                {
                    x: 0,
                    y: 2,
                    blur: 3,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 3,
                },
                {
                    x: 0,
                    y: 6,
                    blur: 10,
                    spread: 4,
                    opacity: 0.15,
                    elevation: 10,
                },
            ],
            level5: [
                {
                    x: 0,
                    y: 4,
                    blur: 4,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 4,
                },
                {
                    x: 0,
                    y: 8,
                    blur: 12,
                    spread: 6,
                    opacity: 0.15,
                    elevation: 12,
                },
            ],
        },
        dark: {
            level0: [
                {
                    x: 0,
                    y: 0,
                    blur: 0,
                    spread: 0,
                    opacity: 0,
                    elevation: 0,
                },
                {
                    x: 0,
                    y: 0,
                    blur: 0,
                    spread: 0,
                    opacity: 0,
                    elevation: 0,
                },
            ],
            level1: [
                {
                    x: 0,
                    y: 1,
                    blur: 2,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 2,
                },
                {
                    x: 0,
                    y: 1,
                    blur: 3,
                    spread: 1,
                    opacity: 0.15,
                    elevation: 3,
                },
            ],
            level2: [
                {
                    x: 0,
                    y: 1,
                    blur: 2,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 2,
                },
                {
                    x: 0,
                    y: 2,
                    blur: 6,
                    spread: 2,
                    opacity: 0.15,
                    elevation: 6,
                },
            ],
            level3: [
                {
                    x: 0,
                    y: 1,
                    blur: 3,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 3,
                },
                {
                    x: 0,
                    y: 4,
                    blur: 8,
                    spread: 3,
                    opacity: 0.15,
                    elevation: 8,
                },
            ],
            level4: [
                {
                    x: 0,
                    y: 2,
                    blur: 3,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 3,
                },
                {
                    x: 0,
                    y: 6,
                    blur: 10,
                    spread: 4,
                    opacity: 0.15,
                    elevation: 10,
                },
            ],
            level5: [
                {
                    x: 0,
                    y: 4,
                    blur: 4,
                    spread: 0,
                    opacity: 0.3,
                    elevation: 4,
                },
                {
                    x: 0,
                    y: 8,
                    blur: 12,
                    spread: 6,
                    opacity: 0.15,
                    elevation: 12,
                },
            ],
        },
    };

    return elevation[scheme];
};
