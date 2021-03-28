export function threeSum(nums: number[]) {
    let result: number[][] = [];
    result.push([]);

    for (const n of nums) {
       const temp = [];

        for (const sub of result) {
            const aux = [...sub];
            aux.push(n);
            temp.push(aux);
        }

        result = [...result, ...temp];
    }

    const r = [];

    for (const sub of result) {
        if (sub.length === 3 && sum(sub) === 0) {
            r.push(sub);
        }
    }

    return r;
}

function sum(nums: number[]) {
    return nums.reduce((previous, current) => previous + current , 0);
}

function combinationUtil(arr: number[], r: number, index: number, data: number[], i: number) {
    if (index === r) {
        console.log(data);
        return;
    }

    if (i >= arr.length) {
        return;
    }

    data[index] = arr[i];
    combinationUtil(arr, r, index + 1, data, i + 1);
    combinationUtil(arr, r, index, data, i + 1);
}

export function printCombination(arr: number[], r: number) {
    const data = new Array();
    combinationUtil(arr, r, 0, data, 0);
}
