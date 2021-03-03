///////////////////////////////////////////////////////////////////
// Given 3 sorted lists, find the intersection of those 3 lists. //
//                                                               //
// Here's an example and some starter code.                      //
//                                                               //
// def intersection(list1, list2, list3):                        //
//   # Fill this in.                                             //
//                                                               //
// print(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]))    //
// # [4]                                                         //
///////////////////////////////////////////////////////////////////

import { binarySearch } from "../binary-search/binary-search";

export function intersection(l1: number[], l2: number[], l3: number[]) {
    const result = [];

    for (const n of l1) {
        if (binarySearch(l2, n) > -1 && binarySearch(l3, n) > -1) {
            result.push(n);
        }
    }

    return result;
}

// time complexy: n * (log(m) + log(p)) where n is l1 length, m is l2 length and p is l3 length
// space complexity: n + O(log(m)) + O(log(p)) where n is the smallest list length and m and p are the other lists length
