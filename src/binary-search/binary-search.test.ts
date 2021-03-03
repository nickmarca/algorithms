import { binarySearch } from './binary-search';

test('case #1', () => {
    const list = [1, 2, 3, 4];

    expect(binarySearch(list, 3)).toBe(2);
});

test('case #2', () => {
    const list = [1, 2, 3, 4];

    expect(binarySearch(list, 5)).toBe(-1);
});

test('case #3', () => {
    const list = [1, 2, 3, 4];

    expect(binarySearch(list, 1)).toBe(0);
});

test('case #4', () => {
    const list = [3, 6, 12, 24];

    expect(binarySearch(list, 6)).toBe(1);
});
