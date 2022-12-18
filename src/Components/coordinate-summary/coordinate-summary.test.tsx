import React from "react";
import { render, screen } from "@testing-library/react";
import { CoordinateSummary } from "./coordinate-summary.component";
import { CalculationResult, Coordinate } from "../../Models";

const summary = {
    min: {
        pointA: new Coordinate(0, 0),
        pointB: new Coordinate(0, 0),
        distance: Number.POSITIVE_INFINITY,
    },
    max: {
        pointA: new Coordinate(0, 0),
        pointB: new Coordinate(0, 0),
        distance: Number.NEGATIVE_INFINITY,
    },
    average: 0,
} as CalculationResult;

test("renders coordinate summary", () => {
    render(<CoordinateSummary summary={summary} input={[""]} />);
    const helloWorldText = screen.getByText(/Characteristics for given input/i);
    expect(helloWorldText).toBeInTheDocument();
});
