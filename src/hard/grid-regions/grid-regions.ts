export type Coords = {
    x: number;
    y: number;
};

function cell(grid: number[][], { x, y }: Coords) {
    return grid[y] && grid[y][x];
}

function pushToRegion(region: Coords[], { x, y }: Coords) {
    if (!region.find(({ x: x0, y: y0 }) => (x === x0) && (y === y0))) {
        region.push({ x, y });
    }
}

function regionIncludes(region: Coords[], { x, y}: Coords) {
    return !!region.find(({ x: x0, y: y0 }) => (x === x0) && (y === y0));
}

function equals({ x: x0, y: y0 }: Coords, { x: x1, y: y1 }: Coords) {
    return (x0 === x1) && (y0 === y1);
}

function go(grid: number[][], { x, y }: Coords, region: Coords[], index = 0, visited: Map<string, boolean>): Coords[] {
    pushToRegion(region, { x, y });
    visited.set(`${x},${y}`, true);

    const top =  { x, y: y + 1 };
    const right =  { x: x + 1, y };
    const bottom = { x, y: y - 1 };
    const left = { x: x - 1, y };

    // check top
    if (!regionIncludes(region, top) && cell(grid, top)) {
        return go(grid, top, region, index + 1, visited);
    }
    // check right
    else if (!regionIncludes(region, right) && cell(grid, right)) {
        return go(grid, right, region, index + 1, visited);
    }
    // check bottom
    else if (!regionIncludes(region, bottom) && cell(grid, bottom)) {
        return go(grid, bottom, region, index + 1, visited);
    }
    // check left
    else if (!regionIncludes(region, left) && cell(grid, left)) {
        return go(grid, left, region, index + 1, visited);
    }
    // go back if possible
    else if (!equals({ x, y }, region[0])) {
        return go(grid, region[index - 1], region, index - 1, visited);
    } else {
        return region;
    }
}

export function getRegions(grid: number[][]) {
    const visited = new Map<string, boolean>();
    const regions: Coords[][] = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (!visited.get(`${j},${i}`) && grid[i][j]) {
                const region = go(grid, { x: j, y: i }, [], 0, visited);
                regions.push(region);
            }
        }
    }

    return regions;
}


export function countMatchRegions(grid1: number[][], grid2: number[][]) {
    const regions1 = getRegions(grid1);
    const regions2 = getRegions(grid2);

    let count = 0;

    regions1.forEach(region1 => {

        regions2.forEach(region2 => {

            if (compareRegions(region1, region2)) {
                count++;
            }

        });
    });

    return count;
}

function compareRegions(region1: Coords[], region2: Coords[]) {
    if (region1.length !== region2.length) return false;

    for (let i = 0; i < region1.length; i++) {
        const coord1 = region1[i];
        const coord2 = region2[i];

        if ((coord1.x !== coord2.x) || (coord1.y !== coord2.y)) {
            return false;
        }
    }

    return true;
}
