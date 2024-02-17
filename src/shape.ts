export interface BorderRadius {
    bottomLeft: number;
    bottomRight: number;
    topLeft: number;
    topRight: number;
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

export const createShape = (): Shape => ({
    full: {
        bottomLeft: 1024,
        bottomRight: 1024,
        topLeft: 1024,
        topRight: 1024,
    },
    extraLarge: {
        bottomLeft: 28,
        bottomRight: 28,
        topLeft: 28,
        topRight: 28,
    },
    extraLargeTop: {
        bottomLeft: 0,
        bottomRight: 0,
        topLeft: 28,
        topRight: 28,
    },
    large: {
        bottomLeft: 16,
        bottomRight: 16,
        topLeft: 16,
        topRight: 16,
    },
    largeTop: {
        bottomLeft: 0,
        bottomRight: 0,
        topLeft: 16,
        topRight: 16,
    },
    largeStart: {
        bottomLeft: 16,
        bottomRight: 0,
        topLeft: 16,
        topRight: 0,
    },
    largeEnd: {
        bottomLeft: 0,
        bottomRight: 16,
        topLeft: 0,
        topRight: 16,
    },
    medium: {
        bottomLeft: 12,
        bottomRight: 12,
        topLeft: 12,
        topRight: 12,
    },
    small: {
        bottomLeft: 8,
        bottomRight: 8,
        topLeft: 8,
        topRight: 8,
    },
    extraSmall: {
        bottomLeft: 4,
        bottomRight: 4,
        topLeft: 4,
        topRight: 4,
    },
    extraSmallTop: {
        bottomLeft: 0,
        bottomRight: 0,
        topLeft: 4,
        topRight: 4,
    },
    none: {
        bottomLeft: 0,
        bottomRight: 0,
        topLeft: 0,
        topRight: 0,
    },
});
