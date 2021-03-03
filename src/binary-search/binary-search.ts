export function binarySearch (list: number[], target: number) {
    return go(list, target, 0, list.length - 1);
}

function go (list: number[], target: number, pL: number, pR: number): number {
    const pM = Math.floor(pL + ((pR - pL) / 2));

    if (list[pM] === target) {
        return pM;
    } else if ((pR - pL) === 0) {
        return -1;
    } else if (list[pM] > target) {
        return go(list, target, pL, pM);
    } else {
        return go(list, target, pM + 1, pR);
    }
}

// time complexity: O(log(n))
// space complexity: O(log(n))
