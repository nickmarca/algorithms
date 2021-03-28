import { intersection } from './intersection-of-lists';

test('case #1', () => {
    expect(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5])).toEqual([4]);
});

test('case #2', () => {
    expect(intersection([1, 2, 3, 4], [2, 4, 6, 8], [2, 3, 4, 5])).toEqual([2, 4]);
});

test('case #3', () => {
    expect(intersection([1], [2, 4, 6, 8], [2, 3, 4, 5])).toEqual([]);
});

test('case #3', () => {
    expect(intersection([23, 24, 25], [23, 24, 25], [23, 24, 25, 26])).toEqual([23, 24, 25]);
});
