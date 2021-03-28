import { timeConversion } from './time-conversion';

const scenarios = [
    ["12:00:01PM", "12:00:01"],
    ["12:00:01AM", "00:00:01"],
    ["01:05:02PM", "13:05:02"],
    ["11:00:01PM", "23:00:01"],
    ["01:00:01AM", "01:00:01"],
    ["07:30:00AM", "07:30:00"],
];

describe("timeConversion", () => {
    for (const pair of scenarios) {
        const [input, expected] = pair;

        it(`for input: ${input} should have the output: ${expected}`, () => {
            expect(timeConversion(input)).toBe(expected);
        });
    }
});
