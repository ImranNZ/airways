import { validateInput, ValidationResult } from ".";

const cases: Array<[string, ValidationResult]> = [
    [
        "1,2 3,4 5,6",
        {
            success: true,
            message: "Valid input",
            result: "1,2 3,4 5,6".split(" "),
        } as ValidationResult,
    ],
    [
        "-1.123,-122.567 -3.453,-14.456 -5.057,-6.234",
        {
            success: true,
            message: "Valid input",
            result: "-1.123,-122.567 -3.453,-14.456 -5.057,-6.234".split(" "),
        } as ValidationResult,
    ],
    [
        "1.123,122.567 3.453,14.456 5.057,6.234",
        {
            success: true,
            message: "Valid input",
            result: "1.123,122.567 3.453,14.456 5.057,6.234".split(" "),
        } as ValidationResult,
    ],
    [
        "-1.123,-122.567 3.453,14.456 -5.057,6.234",
        {
            success: true,
            message: "Valid input",
            result: "-1.123,-122.567 3.453,14.456 -5.057,6.234".split(" "),
        } as ValidationResult,
    ],
    [
        "1.123,122.567",
        {
            success: false,
            message: "Please enter more than 1 point",
            result: [],
        } as ValidationResult,
    ],
    [
        "1.123,122.567 123.6546",
        {
            success: false,
            message: "Please make sure the input follows the format required",
            result: [],
        } as ValidationResult,
    ],
    [
        "Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY",
        {
            success: false,
            message: "Please make sure the input follows the format required",
            result: [],
        } as ValidationResult,
    ],
    [
        "0,0 0,0",
        {
            success: true,
            message: "Valid input",
            result: "0,0 0,0".split(" "),
        } as ValidationResult,
    ],
    [
        "",
        {
            success: false,
            message: "Please enter some coordinate points",
            result: [],
        } as ValidationResult,
    ],
];

describe("validateInput", () => {
    test.each(cases)("Given %s, should return %o", (inputString, expected) => {
        const result = validateInput(inputString);
        expect(result).toEqual(expected);
    });
});
