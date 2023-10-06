export type Easing = 'ease' | 'linear' | 'easeIn';
export type Bezier =
    | Easing
    | {
          x1: number;
          y1: number;
          x2: number;
          y2: number;
      };

export interface TransitionOptions {
    property?: string;
    duration?: number;
    easing?:
        | Easing
        | 'emphasized' // Begin and end on screen
        | 'emphasizedDecelerate' // Enter the screen
        | 'emphasizedAccelerate' // Exit the screen
        | 'standard' // Begin and end on screen
        | 'standardDecelerate' // Enter the screen
        | 'standardAccelerate'; // Exit the screen;
}

export interface Transition {
    native: {
        bezier: Bezier;
        duration: number;
    };
    web?: string;
}

const processBezier = (bezier: string | Bezier): string =>
    typeof bezier === 'string'
        ? bezier
        : `cubic-bezier(${bezier.x1}, ${bezier.y1}, ${bezier.x2}, ${bezier.y2})`;

export const TRANSITION = ({
    property = 'all',
    duration,
    easing = 'standard',
}: TransitionOptions): Transition => {
    const transitionDuration = {
        ease: 300,
        linear: 300,
        easeIn: 300,
        emphasized: 500,
        emphasizedDecelerate: 400,
        emphasizedAccelerate: 200,
        standard: 300,
        standardDecelerate: 250,
        standardAccelerate: 200,
    };

    const transitionBezier = {
        ease: 'ease',
        linear: 'linear',
        easeIn: 'ease-in',
        emphasized: {x1: 0.2, y1: 0, x2: 0, y2: 1.0},
        emphasizedDecelerate: {x1: 0.5, y1: 0.7, x2: 0.1, y2: 1.0},
        emphasizedAccelerate: {x1: 0.3, y1: 0, x2: 0.8, y2: 0.15},
        standard: {x1: 0.2, y1: 0, x2: 0.8, y2: 1.0},
        standardDecelerate: {x1: 0, y1: 0, x2: 0, y2: 1},
        standardAccelerate: {x1: 0.3, y1: 0, x2: 1, y2: 1},
    };

    const bezier = transitionBezier[easing] as Bezier;
    const durationMillisecond =
        typeof duration === 'number' ? duration : transitionDuration[easing];

    return {
        native: {bezier, duration: durationMillisecond},
        web: `${property} ${durationMillisecond / 1000}s ${processBezier(bezier)}`,
    };
};
