import { getRegions, Coords, countMatchRegions } from './grid-regions';
import { grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8 } from './grids';

const sumX = (region: Coords[]) => region.reduce((previous, current) => previous + current.x, 0);
const sumY = (region: Coords[]) => region.reduce((previous, current) => previous + current.y, 0);

const orderRegion = ({ x: x0, y: y0 }: Coords, { x: x1, y: y1 }: Coords) => (x0 - x1) !== 0 ? (x0 - x1) : (y0 - y1);
const orderRegions = (a: Coords[], b: Coords[]) => (sumX(a) - sumX(b)) !== 0 ? (sumX(a) - sumX(b)) : (sumY(a) - sumY(b));

test('get regions for grid1', () => {
    const output = getRegions(grid1.grid);
    const expected = grid1.regions.slice();

    output.forEach(region => region.sort(orderRegion));
    output.sort(orderRegions);

    expected.forEach(region => region.sort(orderRegion));
    expected.sort(orderRegions)

    expect(output).toEqual(expected);
});

test('get regions for grid2', () => {
    const output = getRegions(grid2.grid);
    const expected = grid2.regions;

    output.forEach(region => region.sort(orderRegion));
    output.sort(orderRegions);

    expected.forEach(region => region.sort(orderRegion));
    expected.sort(orderRegions)

    expect(output).toEqual(expected);
});

test('get regions for grid3', () => {
    const output = getRegions(grid3.grid);
    const expected = grid3.regions;

    output.forEach(region => region.sort(orderRegion));
    output.sort(orderRegions);

    expected.forEach(region => region.sort(orderRegion));
    expected.sort(orderRegions);

    expect(output).toEqual(expected);
});

test('get regions for grid4', () => {
    const output = getRegions(grid4.grid);
    const expected = grid4.regions;

    output.forEach(region => region.sort(orderRegion));
    output.sort(orderRegions);

    expected.forEach(region => region.sort(orderRegion));
    expected.sort(orderRegions);

    expect(output).toEqual(expected);
});

test('get regions for grid5', () => {
    const output = getRegions(grid5.grid);
    const expected = grid5.regions;

    output.forEach(region => region.sort(orderRegion));
    output.sort(orderRegions);

    expected.forEach(region => region.sort(orderRegion));
    expected.sort(orderRegions);

    expect(output).toEqual(expected);
});

test('get regions for grid6', () => {
    const output = getRegions(grid6.grid);
    const expected = grid6.regions;

    output.forEach(region => region.sort(orderRegion));
    output.sort(orderRegions);

    expected.forEach(region => region.sort(orderRegion));
    expected.sort(orderRegions);

    expect(output).toEqual(expected);
});

test('get regions for grid7', () => {
    const output = getRegions(grid7.grid);
    const expected = grid7.regions;

    output.forEach(region => region.sort(orderRegion));
    output.sort(orderRegions);

    expected.forEach(region => region.sort(orderRegion));
    expected.sort(orderRegions);

    expect(output).toEqual(expected);
});

test('get regions for grid8', () => {
    const output = getRegions(grid8.grid);
    const expected = grid8.regions;

    output.forEach(region => region.sort(orderRegion));
    output.sort(orderRegions);

    expected.forEach(region => region.sort(orderRegion));
    expected.sort(orderRegions);

    expect(output).toEqual(expected);
});

test('given grid1 and grid2, none region should match', () => {
    expect(countMatchRegions(grid1.grid, grid2.grid)).toBe(0);
});

test('given grid3 and grid4, only one region should match', () => {
    expect(countMatchRegions(grid3.grid, grid4.grid)).toBe(1);
});

test('given grid5 and grid6, three regions should match', () => {
    expect(countMatchRegions(grid5.grid, grid6.grid)).toBe(3);
});

test('given grid7 and grid8, two regions should match', () => {
    expect(countMatchRegions(grid7.grid, grid8.grid)).toBe(2);
});
