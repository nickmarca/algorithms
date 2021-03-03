import { threeSum, printCombination } from "./three-sum";

const asc = (a: number, b: number) => a - b;

test('case #1', () => {
    expect(threeSum([0, -1, 2, -3, 1].sort(asc))).toEqual([[0, -1, 1].sort(asc), [2, -3, 1].sort(asc)]);
});

test('case #2', () => {
    expect(threeSum([1, -2, 1, 0, 5].sort(asc))).toEqual([[-2, 1, 1].sort(asc)]);
});

test('case #3', () => {
    printCombination([10, 20, 30, 40, 50], 3);
});
