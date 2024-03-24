import type {ThemeOptions} from './core'

interface Shadow {
    blur: number
    elevation: number
    opacity: number
    spread: number
    x: number
    y: number
}

type Level = Record<'shadow0' | 'shadow1', Shadow>
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
    level0: Level

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
    level1: Level

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
    level2: Level

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
    level3: Level

    /**
     * level4
     *      - not assigned as resting level
     */
    level4: Level

    /**
     * level5
     *      - not assigned as resting level
     */
    level5: Level
}

export type CreateElevationOptions = Required<Pick<ThemeOptions, 'scheme'>>
export const createElevation = ({
    scheme
}: CreateElevationOptions): Elevation => {
    const elevation = {
        dark: {
            level0: {
                shadow0: {
                    blur: 0,
                    elevation: 0,
                    opacity: 0,
                    spread: 0,
                    x: 0,
                    y: 0
                },
                shadow1: {
                    blur: 0,
                    elevation: 0,
                    opacity: 0,
                    spread: 0,
                    x: 0,
                    y: 0
                }
            },
            level1: {
                shadow0: {
                    blur: 2,
                    elevation: 2,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 1
                },
                shadow1: {
                    blur: 3,
                    elevation: 3,
                    opacity: 0.15,
                    spread: 1,
                    x: 0,
                    y: 1
                }
            },
            level2: {
                shadow0: {
                    blur: 2,
                    elevation: 2,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 1
                },
                shadow1: {
                    blur: 6,
                    elevation: 6,
                    opacity: 0.15,
                    spread: 2,
                    x: 0,
                    y: 2
                }
            },
            level3: {
                shadow0: {
                    blur: 3,
                    elevation: 3,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 1
                },
                shadow1: {
                    blur: 8,
                    elevation: 8,
                    opacity: 0.15,
                    spread: 3,
                    x: 0,
                    y: 4
                }
            },
            level4: {
                shadow0: {
                    blur: 3,
                    elevation: 3,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 2
                },
                shadow1: {
                    blur: 10,
                    elevation: 10,
                    opacity: 0.15,
                    spread: 4,
                    x: 0,
                    y: 6
                }
            },
            level5: {
                shadow0: {
                    blur: 4,
                    elevation: 4,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 4
                },
                shadow1: {
                    blur: 12,
                    elevation: 12,
                    opacity: 0.15,
                    spread: 6,
                    x: 0,
                    y: 8
                }
            }
        },
        light: {
            level0: {
                shadow0: {
                    blur: 0,
                    elevation: 0,
                    opacity: 0,
                    spread: 0,
                    x: 0,
                    y: 0
                },
                shadow1: {
                    blur: 0,
                    elevation: 0,
                    opacity: 0,
                    spread: 0,
                    x: 0,
                    y: 0
                }
            },
            level1: {
                shadow0: {
                    blur: 3,
                    elevation: 3,
                    opacity: 0.15,
                    spread: 1,
                    x: 0,
                    y: 1
                },
                shadow1: {
                    blur: 2,
                    elevation: 2,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 1
                }
            },

            level2: {
                shadow0: {
                    blur: 6,
                    elevation: 6,
                    opacity: 0.15,
                    spread: 2,
                    x: 0,
                    y: 2
                },
                shadow1: {
                    blur: 2,
                    elevation: 2,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 1
                }
            },
            level3: {
                shadow0: {
                    blur: 3,
                    elevation: 3,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 1
                },
                shadow1: {
                    blur: 8,
                    elevation: 8,
                    opacity: 0.15,
                    spread: 3,
                    x: 0,
                    y: 4
                }
            },
            level4: {
                shadow0: {
                    blur: 3,
                    elevation: 3,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 2
                },
                shadow1: {
                    blur: 10,
                    elevation: 10,
                    opacity: 0.15,
                    spread: 4,
                    x: 0,
                    y: 6
                }
            },
            level5: {
                shadow0: {
                    blur: 4,
                    elevation: 4,
                    opacity: 0.3,
                    spread: 0,
                    x: 0,
                    y: 4
                },
                shadow1: {
                    blur: 12,
                    elevation: 12,
                    opacity: 0.15,
                    spread: 6,
                    x: 0,
                    y: 8
                }
            }
        }
    }

    return elevation[scheme]
}
