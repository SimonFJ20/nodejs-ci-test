import { toUppercase, toUppercaseIfLowercase } from "./utils";

describe('toUppercase', () => {

    it('should convert lowercase char to uppercase', () => {
        const input = 'a';
        expect(toUppercaseIfLowercase(input, input.charCodeAt(0))).toBe('A');
    });

    it('should conserve uppercase', () => {
        const input = 'A';
        expect(toUppercaseIfLowercase(input, input.charCodeAt(0))).toBe('A');
    });

    it('should conserve non-letters', () => {
        const input = '1';
        expect(toUppercaseIfLowercase(input, input.charCodeAt(0))).toBe('1');
    });

    test('it should convert string to uppercase', () => {
        expect(toUppercase('hEllo! 123')).toBe('HELLO! 123');
    });

});
