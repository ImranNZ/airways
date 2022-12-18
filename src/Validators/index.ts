export interface ValidationResult {
    success?: boolean;
    message: string;
    result: string[];
}

export function validateInput(input: string): ValidationResult {
    input = input.trim();

    if (input.length < 1)
        return {
            success: false,
            message: "Please enter some coordinate points",
            result: [],
        };

    const regex =
        /^(-?\d+(\.\d+)?,-?\d+(\.\d+)?)(\s(-?\d+(\.\d+)?,-?\d+(\.\d+)?))*$/g;
    const regExMatches = input.match(regex);

    if (regExMatches === null)
        return {
            success: false,
            message: "Please make sure the input follows the format required",
            result: [],
        };

    const points = regExMatches[0].split(" ");

    if (points?.length < 2)
        return {
            success: false,
            message: "Please enter more than 1 point",
            result: [],
        };

    return {
        success: true,
        message: "Valid input",
        result: points,
    };
}
