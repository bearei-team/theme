export interface BorderRadius {
    native: {topLeft: number; topRight: number; bottomRight: number; bottomLeft: number};
    web: string;
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
        native: {
            topLeft: 9999,
            topRight: 9999,
            bottomRight: 9999,
            bottomLeft: 9999,
        },
        web: '9999 9999 9999 999',
    },
    extraLarge: {
        native: {
            topLeft: 28,
            topRight: 28,
            bottomRight: 28,
            bottomLeft: 28,
        },
        web: '28 28 28 28',
    },
    extraLargeTop: {
        native: {
            topLeft: 28,
            topRight: 28,
            bottomRight: 0,
            bottomLeft: 0,
        },
        web: '28 28 0 0',
    },
    large: {
        native: {
            topLeft: 16,
            topRight: 16,
            bottomRight: 16,
            bottomLeft: 16,
        },
        web: '16 16 16 16',
    },
    largeTop: {
        native: {
            topLeft: 16,
            topRight: 16,
            bottomRight: 0,
            bottomLeft: 0,
        },
        web: '16 16 0 0',
    },
    largeStart: {
        native: {
            topLeft: 16,
            topRight: 0,
            bottomRight: 0,
            bottomLeft: 16,
        },
        web: '16 0 0 16',
    },
    largeEnd: {
        native: {
            topLeft: 0,
            topRight: 16,
            bottomRight: 16,
            bottomLeft: 0,
        },
        web: '0 16 16 0',
    },
    medium: {
        native: {
            topLeft: 12,
            topRight: 12,
            bottomRight: 12,
            bottomLeft: 12,
        },
        web: '12 12 12 12',
    },
    small: {
        native: {
            topLeft: 8,
            topRight: 8,
            bottomRight: 8,
            bottomLeft: 8,
        },
        web: '8 8 8 8',
    },
    extraSmall: {
        native: {
            topLeft: 4,
            topRight: 4,
            bottomRight: 4,
            bottomLeft: 4,
        },
        web: '4 4 4 4',
    },
    extraSmallTop: {
        native: {
            topLeft: 4,
            topRight: 4,
            bottomRight: 0,
            bottomLeft: 0,
        },
        web: '4 4 0 0',
    },
    none: {
        native: {
            topLeft: 0,
            topRight: 0,
            bottomRight: 0,
            bottomLeft: 0,
        },
        web: '0 0 0 0',
    },
});
