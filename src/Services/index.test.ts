import { getCharacteristics } from ".";
import { CalculationResult, Coordinate } from "../Models";

const simpleCoord1 = new Coordinate(0, 1);
const simpleCoord2 = new Coordinate(0, 2);
const simpleCoord3 = new Coordinate(0, 3);

const exCoord1 = new Coordinate(0, 1.234);
const exCoord3 = new Coordinate(4, 3);
const exCoord4 = new Coordinate(10, 13);

const negativeCoord1 = new Coordinate(0, -1);
const negativeCoord2 = new Coordinate(0, -2);
const negativeCoord3 = new Coordinate(0, -3);

const cases: Array<[string[], CalculationResult]> = [
    [
        ["0,1", "0,2", "0,3"],
        {
            min: {
                pointA: simpleCoord1,
                pointB: simpleCoord2,
                distance: 1,
            },
            max: {
                pointA: simpleCoord1,
                pointB: simpleCoord3,
                distance: 2,
            },
            average: (1 + 2 + 1) / 3,
        } as CalculationResult,
    ],
    [
        ["0,-1", "0,-2", "0,-3"],
        {
            min: {
                pointA: negativeCoord1,
                pointB: negativeCoord2,
                distance: 1,
            },
            max: {
                pointA: negativeCoord1,
                pointB: negativeCoord3,
                distance: 2,
            },
            average: (1 + 2 + 1) / 3,
        } as CalculationResult,
    ],
    [
        ["0,1.234", "3,8", "4,3", "10,13"],
        {
            min: {
                pointA: exCoord1,
                pointB: exCoord3,
                distance: 4.3724999714122355,
            },
            max: {
                pointA: exCoord1,
                pointB: exCoord4,
                distance: 15.441462236459344,
            },
            average: 8.76307966116618,
        } as CalculationResult,
    ],
];

describe("getCharacteristics", () => {
    test.each(cases)("Given %p, should return %o", (input, expected) => {
        const result = getCharacteristics(input);
        expect(result).toEqual(expected);
    });

    test("throws error for invalid character input", () => {
        expect(() => {
            getCharacteristics(["a", "a", "a"]);
        }).toThrow();
    });

    test("throws error for invalid point input", () => {
        expect(() => {
            getCharacteristics(["0", "0", "0"]);
        }).toThrow();
    });

    test("throws error for Infinity as input", () => {
        expect(() => {
            getCharacteristics(["Infinity", "Infinity", "Infinity"]);
        }).toThrow();
    });

    test("throws error for -Infinity as input", () => {
        expect(() => {
            getCharacteristics(["-Infinity", "-Infinity", "-Infinity"]);
        }).toThrow();
    });
});
