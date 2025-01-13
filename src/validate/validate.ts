export const isValidName = (value: string )=> value.length >= 3;

export const isValidEmail = (value: string) => value.includes('@');

export const isValidPassword = (value:string) => value.length > 4