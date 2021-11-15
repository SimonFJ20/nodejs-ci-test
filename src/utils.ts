
export const toUppercaseIfLowercase = (char: string, code: number): string => 
    code <= 122 && code >= 97 ? String.fromCharCode(code - 32) : char

export const toUppercase = (text: string): string => 
    text.split('').map(char => toUppercaseIfLowercase(char, char.charCodeAt(0))).join('');
