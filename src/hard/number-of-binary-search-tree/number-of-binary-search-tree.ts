////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A binary tree is a tree which is characterized by any of the following properties:                                                                                 //
//                                                                                                                                                                    //
// 1 - It can be empty (null).                                                                                                                                        //
// 2 - It can contain a root node which contain some value and two subtree, left subtree and right subtree, which are also binary tree.                               //
//                                                                                                                                                                    //
//     A binary tree is a binary search tree (BST) if all the non-empty nodes follows both two properties:                                                            //
//                                                                                                                                                                    //
// 1 - If node has a left subtree, then all the values in its left subtree are smaller than the value of the current node.                                            //
// 2 - If node has a right subtree, then all the value in its right subtree are greater than the value of the current node.                                           //
// You are given N nodes, each having unique value ranging from [1, N], how many different binary search tree can be created using all of them.                       //
//                                                                                                                                                                    //
// Input                                                                                                                                                              //
// First line will contain an integer, T, number of test cases. Then T lines follow, where each line represent a test case. Each test case consists a single integer, //
// N, where N is the number of nodes in the binary search tree.                                                                                                       //
//                                                                                                                                                                    //
// Output                                                                                                                                                             //
// For each test case, find the number of different binary search trees that can be created using these nodes. Print the answer modulo (108+7).                       //
//                                                                                                                                                                    //
// Constraints                                                                                                                                                        //
// 1 <= T <= 1000                                                                                                                                                     //
// 1 <= N <= 1000                                                                                                                                                     //
//                                                                                                                                                                    //
// Sample Input                                                                                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Tree {
    value: number;
    left: Tree | null  = null;
    right: Tree | null = null;

    constructor(value: number, left: Tree | null, right: Tree | null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    static create(value: number, left: Tree | null, right: Tree | null) {
        return new Tree(value, left, right);
    }
}

export function numberOfBinaryTree(n: number) {}
