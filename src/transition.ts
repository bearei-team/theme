type Bezier = {
    x0: number
    x1: number
    y0: number
    y1: number
}

export interface CreateTransitionOptions {
    property?: string
    duration?:
        | 'short0'
        | 'short1'
        | 'short2'
        | 'short3'
        | 'medium0'
        | 'medium1'
        | 'medium2'
        | 'medium3'
        | 'long0'
        | 'long1'
        | 'long2'
        | 'long3'
        | 'extraLong0'
        | 'extraLong1'
        | 'extraLong2'
        | 'extraLong3'
        | number
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
        | 'legacyDecelerate'
}

export interface Transition {
    bezier: Bezier
    duration: number
}

export const createTransition = ({
    duration = 'medium1',
    easing = 'standard'
}: CreateTransitionOptions): Transition => {
    const transitionDuration = {
        extraLong0: 700,
        extraLong1: 800,
        extraLong2: 900,
        extraLong3: 1000,
        long0: 450,
        long1: 500,
        long2: 550,
        long3: 600,
        medium0: 250,
        medium1: 300,
        medium2: 350,
        medium3: 400,
        short0: 50,
        short1: 100,
        short2: 150,
        short3: 200
    }

    const transitionBezier = {
        emphasized: {
            x0: 0.2,
            x1: 0,
            y0: 0,
            y1: 1
        },
        emphasizedAccelerate: {
            x0: 0.3,
            x1: 0.8,
            y0: 0,
            y1: 0.15
        },
        emphasizedDecelerate: {
            x0: 0.05,
            x1: 0.1,
            y0: 0.7,
            y1: 1
        },
        standard: {
            x0: 0.2,
            x1: 0,
            y0: 0,
            y1: 1
        },
        standardAccelerate: {
            x0: 0.3,
            x1: 1,
            y0: 0,
            y1: 1
        },
        standardDecelerate: {
            x0: 0,
            x1: 0,
            y0: 0,
            y1: 1
        },
        legacy: {
            x0: 0.4,
            x1: 0.2,
            y0: 0,
            y1: 1
        },
        legacyAccelerate: {
            x0: 0.4,
            x1: 1,
            y0: 0,
            y1: 1
        },
        legacyDecelerate: {
            x0: 0,
            x1: 0.2,
            y0: 0,
            y1: 1
        },
        linear: {
            x0: 0,
            x1: 1,
            y0: 0,
            y1: 1
        }
    }

    const bezier = transitionBezier[easing]
    const durationMillisecond =
        typeof duration === 'number' ? duration : transitionDuration[duration]

    return {bezier, duration: durationMillisecond}
}
