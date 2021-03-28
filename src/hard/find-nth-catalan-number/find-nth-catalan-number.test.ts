import { findNthCatalanNumber } from  './find-nth-catalan-number';

test('case #1', () => {
    expect(findNthCatalanNumber(0)).toBe(1);
});

test('case #2', () => {
    expect(findNthCatalanNumber(1)).toBe(1);
});

test('case #3', () => {
    expect(findNthCatalanNumber(2)).toBe(2);
});

test('case #4', () => {
    expect(findNthCatalanNumber(3)).toBe(5);
});

test('case #3', () => {
    expect(findNthCatalanNumber(4)).toBe(14);
});

test('case #3', () => {
    expect(findNthCatalanNumber(5)).toBe(42);
});

test('case #3', () => {
    expect(findNthCatalanNumber(6)).toBe(132);
});

test('case #3', () => {
    expect(findNthCatalanNumber(7)).toBe(429);
});
