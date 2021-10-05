export const tuple = (...args) => args;

const buttonVariants = tuple("primary", "secondary", "elevation");
const buttonSizes = tuple("big", "normal", "small");
const counterSizes = tuple("big", "normal");

export const ButtonVariants = typeof buttonVariants;
export const ButtonSizes = typeof buttonSizes;

export const CounterSizes = typeof counterSizes;
