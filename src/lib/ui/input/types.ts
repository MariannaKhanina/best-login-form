export const InputType = {
    Text: 'text',
    Password: 'password',
    Email: 'email',
    Number: 'number',
    Tel: 'tel',
    Url: 'url',
    Search: 'search',
    Date: 'date',
    Time: 'time',
};

export type InputType = (typeof InputType)[keyof typeof InputType];
