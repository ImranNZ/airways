import { Coordinate } from "../Models";
import { CalculationResult } from "../Models";
import { bruteForceStrategy } from "../Strategies";

function mapToCoordinates(coords: string[]): Coordinate[] {
    try {
        let coordinates: Coordinate[] = [];

        coords.forEach((item) => {
            let points = item.split(",");
            const x = Number.parseFloat(points[0]);
            const y = Number.parseFloat(points[1]);

            // Since parseFloat returns NaN instead of throwing
            if (!Number.isFinite(x) || !Number.isFinite(y))
                throw new Error("Could not parse number");

            coordinates.push(new Coordinate(x, y));
        });

        return coordinates;
    } catch (e) {
        throw e;
    }
}

export function getCharacteristics(input: string[]): CalculationResult {
    let coordinates = mapToCoordinates(input);
    const result = bruteForceStrategy(coordinates);
    return result;
}
