export type Bezier = {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
};

export interface TransitionOptions {
    property?: string;
    duration?:
        | 'short1'
        | 'short2'
        | 'short3'
        | 'short4'
        | 'medium1'
        | 'medium2'
        | 'medium3'
        | 'medium4'
        | 'long1'
        | 'long2'
        | 'long3'
        | 'long4'
        | 'extraLong1'
        | 'extraLong2'
        | 'extraLong3'
        | 'extraLong4'
        | number;
    easing?:
        | 'linear'
        | 'emphasized' // Begin and end on screen 500ms
        | 'emphasizedDecelerate' // Enter the screen 400ms
        | 'emphasizedAccelerate' // Exit the screen 200ms
        | 'standard' // Begin and end on screen 300ms
        | 'standardDecelerate' // Enter the screen 250ms
        | 'standardAccelerate' // Exit the screen 200ms
        | 'legacy'
        | 'legacyAccelerate'
        | 'legacyDecelerate';
}

export interface Transition {
    bezier: Bezier;
    duration: number;
}

export const TRANSITION = ({
    duration = 'medium1',
    easing = 'standard',
}: TransitionOptions): Transition => {
    const transitionDuration = {
        short1: 50,
        short2: 100,
        short3: 150,
        short4: 200,
        medium1: 250,
        medium2: 300,
        medium3: 350,
        medium4: 400,
        long1: 450,
        long2: 500,
        long3: 550,
        long4: 600,
        extraLong1: 700,
        extraLong2: 800,
        extraLong3: 900,
        extraLong4: 1000,
    };

    const transitionBezier = {
        emphasized: {
            x0: 0.2,
            y0: 0,
            x1: 0,
            y1: 1,
        },
        emphasizedAccelerate: {
            x0: 0.3,
            y0: 0,
            x1: 0.8,
            y1: 0.15,
        },
        emphasizedDecelerate: {
            x0: 0.05,
            y0: 0.7,
            x1: 0.1,
            y1: 1,
        },
        standard: {
            x0: 0.2,
            y0: 0,
            x1: 0,
            y1: 1,
        },
        standardAccelerate: {
            x0: 0.3,
            y0: 0,
            x1: 1,
            y1: 1,
        },
        standardDecelerate: {
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 1,
        },
        legacy: {
            x0: 0.4,
            y0: 0,
            x1: 0.2,
            y1: 1,
        },
        legacyAccelerate: {
            x0: 0.4,
            y0: 0,
            x1: 1,
            y1: 1,
        },
        legacyDecelerate: {
            x0: 0,
            y0: 0,
            x1: 0.2,
            y1: 1,
        },
        linear: {
            x0: 0,
            y0: 0,
            x1: 1,
            y1: 1,
        },
    };

    const bezier = transitionBezier[easing];
    const durationMillisecond =
        typeof duration === 'number' ? duration : transitionDuration[duration];

    return {bezier, duration: durationMillisecond};
};
