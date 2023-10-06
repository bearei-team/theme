export interface Shape {
    /**
     *  None
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
     */
    none: number;

    /**
     *  Extra small
     *      - Autocomplete menu
     *      - Select menu
     *      - Snackbars
     *      - Standard menu
     *      - Text fields
     */
    extraSmall: number;

    /**
     *  Small
     *      - Chips
     *      - Rich tooltip
     */
    small: number;

    /**
     *  Medium
     *      - Cards
     *      - Small FABs
     */
    medium: number;

    /**
     *  Large
     *      - Extended FABs
     *      - FABs
     *      - Navigation drawers
     */
    large: number;

    /**
     *  Extra large
     *      - Bottom sheets (docked)
     *      - Dialogs
     *      - Floating sheets
     *      - Large FABs
     *      - Search view (docked)
     *      - Time picker
     *      - Time input
     */
    extraLarge: number;

    /**
     *  Full
     *      - Badge
     *      - Buttons
     *      - Icon buttons
     *      - Sliders
     *      - Switches
     *      - Search bar
     */
    full: string;
}

export const SHAPE = (): Shape => ({
    none: 0,
    extraSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    extraLarge: 28,
    full: '50%',
});
