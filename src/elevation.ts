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

export interface Level {
    natives: Shadow[];
    web: string;
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
    level0: Level;

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
    level1: Level;

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
    level2: Level;

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
    level3: Level;

    /**
     * level4
     *      - not assigned as resting level
     */
    level4: Level;

    /**
     * level5
     *      - not assigned as resting level
     */
    level5: Level;
}

export const ELEVATION = ({scheme}: ElevationOptions): Elevation => {
    const elevation = {
        light: {
            level0: {
                natives: [
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
                web: `0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)`,
            },
            level1: {
                natives: [
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
                web: `0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)`,
            },
            level2: {
                natives: [
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
                web: `0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)`,
            },
            level3: {
                natives: [
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
                web: `0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)`,
            },
            level4: {
                natives: [
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
                web: `0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)`,
            },
            level5: {
                natives: [
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
                web: '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
            },
        },
        dark: {
            level0: {
                natives: [
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
                web: `0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)`,
            },
            level1: {
                natives: [
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
                web: `0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)`,
            },
            level2: {
                natives: [
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
                web: `0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)`,
            },
            level3: {
                natives: [
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
                web: `0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)`,
            },
            level4: {
                natives: [
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
                web: `0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)`,
            },
            level5: {
                natives: [
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
                web: '0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
            },
        },
    };

    return elevation[scheme];
};
