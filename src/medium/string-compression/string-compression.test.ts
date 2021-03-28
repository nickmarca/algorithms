import { stringCompression } from "./string-compression";

test('case #1', () => {
    expect(stringCompression(['a', 'a', 'b', 'c', 'c', 'c'])).toEqual(['a', '2', 'b', 'c', '3']);
});

test('case #2', () => {
    expect(stringCompression(['a'])).toEqual(['a']);
});

test('case #3', () => {
    expect(stringCompression(['a', 'b'])).toEqual(['a', 'b']);
});

test('case #4', () => {
    expect(stringCompression(['a', 'b', 'c', 'c', 'c', 'c'])).toEqual(['a', 'b', 'c', '4']);
});
