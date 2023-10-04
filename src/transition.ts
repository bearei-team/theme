export interface TransitionOptions {
    property?: string;
    duration?: number;
    easing?:
        | 'ease'
        | 'linear'
        | 'easeIn'
        | 'emphasized' // Begin and end on screen
        | 'emphasizedDecelerate' // Enter the screen
        | 'emphasizedAccelerate' // Exit the screen
        | 'standard' // Begin and end on screen
        | 'standardDecelerate' // Enter the screen
        | 'standardAccelerate'; // Exit the screen;
}

export const transition = ({
    property = 'all',
    duration,
    easing = 'standard',
}: TransitionOptions): string => {
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

    const timingFunction = {
        ease: 'ease',
        linear: 'linear',
        easeIn: 'ease-in',
        emphasized: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        emphasizedAccelerate: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
        standard: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
        standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
    };

    const timing = timingFunction[easing];
    const durationSeconds =
        (typeof duration === 'number' ? duration : transitionDuration[easing]) / 1000;

    return `${property} ${durationSeconds}s ${timing}`;
};
