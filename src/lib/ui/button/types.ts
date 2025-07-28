export const ButtonType = {
    Submit: 'submit',
    Button: 'button',
} as const;

export type ButtonType = (typeof ButtonType)[keyof typeof ButtonType];
