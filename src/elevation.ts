export interface ElevationOptions {
    shadowColorRgb?: string;
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
    level0: string;

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
    level1: string;

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
    level2: string;

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
    level3: string;

    /**
     * level4
     *      - not assigned as resting level
     */
    level4: string;

    /**
     * level5
     *      - not assigned as resting level
     */
    level5: string;
}

export const ELEVATION = (options?: ElevationOptions): Elevation => {
    const {shadowColorRgb = '0 0 0'} = options ?? {};

    return {
        level0: `0 0 0 0 rgb(${shadowColorRgb} / 0.2), 0 0 0 0 rgb(${shadowColorRgb} / 0.14), 0 0 0 0 rgb(${shadowColorRgb} / 0.12)`,
        level1: `0 3 1 -2 rgb(${shadowColorRgb} / 0.2), 0 2 2 0 rgb(${shadowColorRgb} / 0.14), 0 1 5 0 rgb(${shadowColorRgb} / 0.12)`,
        level2: `0 2 4 -1 rgb(${shadowColorRgb} / 0.2), 0 4 5 0 rgb(${shadowColorRgb} / 0.14), 0 1 10 0 rgb(${shadowColorRgb} / 0.12)`,
        level3: `0 5 5 -3 rgb(${shadowColorRgb} / 0.2), 0 8 10 1 rgb(${shadowColorRgb} / 0.14), 0 3 14 2 rgb(${shadowColorRgb} / 0.12)`,
        level4: `0 5 5 -3 rgb(${shadowColorRgb} / 0.2), 0 8 10 1 rgb(${shadowColorRgb} / 0.14), 0 3 14 2 rgb(${shadowColorRgb} / 0.12)`,
        level5: `0 8 10 -6 rgb(${shadowColorRgb} / 0.2), 0 16 24 2 rgb(${shadowColorRgb} / 0.14), 0 6 30 5 rgb(${shadowColorRgb} / 0.12)`,
    };
};
