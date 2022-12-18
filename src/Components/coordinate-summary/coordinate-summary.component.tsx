import { Table } from "react-bootstrap";
import { CalculationResult } from "../../Models";

interface CoordinateSummaryProps {
    summary: CalculationResult;
    input: string[];
}

export function CoordinateSummary({ summary, input }: CoordinateSummaryProps) {
    return (
        <Table striped bordered hover>
            <caption>{`Characteristics for given input: ${input}`}</caption>
            <thead>
                <tr>
                    <th>Characteristics</th>
                    <th>Point A</th>
                    <th>Point B</th>
                    <th>Distance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Closest</td>
                    <td>{summary.min.pointA.toString()}</td>
                    <td>{summary.min.pointB.toString()}</td>
                    <td>{summary.min.distance.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Furthest</td>
                    <td>{`${summary.max.pointA}`}</td>
                    <td>{`${summary.max.pointB}`}</td>
                    <td>{`${summary.max.distance.toFixed(2)}`}</td>
                </tr>
                <tr>
                    <td>Average distance between all points</td>
                    <td>-</td>
                    <td>-</td>
                    <td>{`${summary.average.toFixed(2)}`}</td>
                </tr>
            </tbody>
        </Table>
    );
}
