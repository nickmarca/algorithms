export function stringCompression(str: string[]) {
    const map = new Map<string, number>();

    for (const char of str) {
        const current = map.get(char) || 0;
        map.set(char, current + 1);
    }

    const result = [];

    for (const char of str) {
        const length = map.get(char);

       if (length && length === 1) {
            result.push(char);
        } else if (length && length > 1) {
            result.push(char);
            result.push(`${length}`);
            map.delete(char);
        }
    }

    return result;
}

// time complexity: 2N where n is the input array length;
// space complexity: N for the worst case scenario, and constant for the best scenario where N is the input array length;
