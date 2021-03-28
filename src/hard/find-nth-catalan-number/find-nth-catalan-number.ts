export function findNthCatalanNumber(n: number) {
    if (n === 0 || n === 1) {
        return 1;
    }

    const catalan =  new Array(n + 2);

    catalan[0] = 1;
    catalan[1] = 1;

    for (let i = 2; i <= n ; i++) {
        catalan[i] = 0;

        for (let j = 0; j < i; j++) {
            catalan[i] = catalan[i] + (catalan[j] * catalan[i - j - 1]);
        }
    }

    return catalan[n];
}
