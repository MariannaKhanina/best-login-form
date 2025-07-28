export const AlertType = {
    Success: 'success',
    Error: 'error',
} as const;

export type AlertType = (typeof AlertType)[keyof typeof AlertType];
