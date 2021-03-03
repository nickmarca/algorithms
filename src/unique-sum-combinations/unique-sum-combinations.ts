////////////////////////////////////////////////////////
//  Given a list of numbers and a target number,      //
//  find all possible unique subsets of the list of   //
//  numbers that sum up to the target number.         //
//  The numbers will all be positive numbers.         //
//                                                    //
// def sum_combinations(nums, target):                //
//   # Fill this in.                                  //
//                                                    //
// print(sum_combinations([10, 1, 2, 7, 6, 1, 5], 8)) //
// # [(2, 6), (1, 1, 6), (1, 2, 5), (1, 7)]           //
////////////////////////////////////////////////////////

function sumCombinations(nums: number[], target: number) {
    const subset = new Array(nums.length).fill(null);
    return go(nums, subset, 0, target, []);
}

function go(nums: number[], subset: (number|null)[], index: number, target: number, subsets: (number|null)[][]) {
    if (index === nums.length) {
        const sum = subset.reduce((p, c) => (c ?? 0) + (p ?? 0), 0);

        if (sum === target) {
            subsets.push(subset.slice());
        }
    } else {
        subset[index] = null;
        go(nums, subset, index + 1, target, subsets);
        subset[index] = nums[index];
        go(nums, subset, index + 1, target, subsets);

        return subsets;
    }
}

//console.log(sumCombinations([10, 1, 2, 7, 6, 1, 5], 8));

// run time complexity = O(2^n)
// space complexity = 0(2^n)

function sumCombinations2(nums: number[], target: number) {
    let result: number[][] = [];
    result.push([]);

    for(const n of nums) {
        const temp = [];

        for(const sub of result) {
            const s = Array.from(sub);
            s.push(n);
            temp.push(s);
        }
        result = [...result, ...temp];
    }

    return result;
}


console.log(sumCombinations2([1, 2, 3], 8));
