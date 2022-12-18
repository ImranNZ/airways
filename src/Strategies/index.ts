import { CalculationResult } from "../Models";
import { Coordinate, Characteristic } from "../Models";

function calculateDistance(coord1: Coordinate, coord2: Coordinate): number {
    return Math.sqrt((coord2.x - coord1.x) ** 2 + (coord2.y - coord1.y) ** 2);
}

export function bruteForceStrategy(input: Coordinate[]): CalculationResult {
    try {
        if (input?.length < 1) throw new Error("Empty array");

        let min = {
            pointA: new Coordinate(0, 0),
            pointB: new Coordinate(0, 0),
            distance: Number.POSITIVE_INFINITY,
        } as Characteristic;

        let max = {
            pointA: new Coordinate(0, 0),
            pointB: new Coordinate(0, 0),
            distance: Number.NEGATIVE_INFINITY,
        } as Characteristic;

        let average = 0;

        let totalDistance = 0;

        // Keep track of pair count so we don't need the cost of getting the length for the average
        let pairCount = 0;

        // brute force method since the number of pairs is only upto 10, so this would be o(n^2)
        // iterate through the list and check each coordinate against the others
        input.forEach((pointA, indexA, arr) => {
            arr.slice(indexA + 1).forEach((pointB) => {
                const distance = calculateDistance(pointA, pointB);
                totalDistance += distance;
                pairCount++;

                const characteristic = {
                    pointA,
                    pointB,
                    distance,
                } as Characteristic;

                if (distance < min.distance) {
                    min = characteristic;
                }

                if (distance > max.distance) {
                    max = characteristic;
                }
            });
        });

        average = totalDistance / pairCount;

        return { min, max, average } as CalculationResult;
    } catch (e) {
        throw e;
    }
}
