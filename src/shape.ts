export interface BorderRadius {
    topLeft: number;
    topRight: number;
    bottomRight: number;
    bottomLeft: number;
}

export interface Shape {
    /**
     *  Extra small
     *      - Autocomplete menu
     *      - Select menu
     *      - Snackbars
     *      - Standard menu
     *      - Text fields
     */
    extraSmall: BorderRadius;
    extraSmallTop: BorderRadius;

    /**
     *  Small
     *      - Chips
     *      - Rich tooltip
     */
    small: BorderRadius;

    /**
     *  Medium
     *      - Cards
     *      - Small FABs
     */
    medium: BorderRadius;

    /**
     *  Large
     *      - Extended FABs
     *      - FABs
     *      - Navigation drawers
     */
    large: BorderRadius;
    largeTop: BorderRadius;
    largeStart: BorderRadius;
    largeEnd: BorderRadius;

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
    extraLarge: BorderRadius;
    extraLargeTop: BorderRadius;

    /**
     *  Full
     *      - Badge
     *      - Buttons
     *      - Icon buttons
     *      - Sliders
     *      - Switches
     *      - Search bar
     */
    full: BorderRadius;

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
    none: BorderRadius;
}

export const SHAPE = (): Shape => ({
    full: {
        topLeft: 9999,
        topRight: 9999,
        bottomRight: 9999,
        bottomLeft: 9999,
    },
    extraLarge: {
        topLeft: 28,
        topRight: 28,
        bottomRight: 28,
        bottomLeft: 28,
    },
    extraLargeTop: {
        topLeft: 28,
        topRight: 28,
        bottomRight: 0,
        bottomLeft: 0,
    },
    large: {
        topLeft: 16,
        topRight: 16,
        bottomRight: 16,
        bottomLeft: 16,
    },
    largeTop: {
        topLeft: 16,
        topRight: 16,
        bottomRight: 0,
        bottomLeft: 0,
    },
    largeStart: {
        topLeft: 16,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 16,
    },
    largeEnd: {
        topLeft: 0,
        topRight: 16,
        bottomRight: 16,
        bottomLeft: 0,
    },
    medium: {
        topLeft: 12,
        topRight: 12,
        bottomRight: 12,
        bottomLeft: 12,
    },
    small: {
        topLeft: 8,
        topRight: 8,
        bottomRight: 8,
        bottomLeft: 8,
    },
    extraSmall: {
        topLeft: 4,
        topRight: 4,
        bottomRight: 4,
        bottomLeft: 4,
    },
    extraSmallTop: {
        topLeft: 4,
        topRight: 4,
        bottomRight: 0,
        bottomLeft: 0,
    },
    none: {
        topLeft: 0,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 0,
    },
});
