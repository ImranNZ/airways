import { FormEvent, useState } from "react";
import { Button, Collapse, Form, InputGroup } from "react-bootstrap";
import { CoordinateSummary } from "../coordinate-summary/coordinate-summary.component";
import { validateInput, ValidationResult } from "../../Validators";
import { getCharacteristics } from "../../Services";
import { CalculationResult, Coordinate } from "../../Models";

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
type WithGeneric = Parameters<
    NonNullable<React.ComponentProps<typeof Form.Control>["onChange"]>
>[0];
type ExtractGeneric<Type> = Type extends React.ChangeEvent<infer X> ? X : never;
type FormControlElement = ExtractGeneric<WithGeneric>;

const initialValidationResult = {
    success: false,
    message: "Input is required.",
    result: [""],
} as ValidationResult;

const initialResult = {
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

export function CoordinateForm() {
    const [validationResult, setValidationResult] = useState(
        initialValidationResult
    );
    const [summaryResult, setSummaryResult] = useState(initialResult);
    const [showSummary, setShowSummary] = useState(false);
    const [coordinates, setCoordinates] = useState([""]);

    const changeHandler = (event: FormEvent<FormControlElement>) => {
        const result = validateInput(event.currentTarget.value);
        setValidationResult(result);
    };

    const clickHandler = () => {
        if (validationResult.success) {
            const summary = getCharacteristics(validationResult.result);
            setSummaryResult(summary);
            setCoordinates(validationResult.result);
            setShowSummary(true);
        }
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text>Coordinate List</InputGroup.Text>
                <Form.Control
                    name="input"
                    placeholder="x,y x,y x,y"
                    onChange={changeHandler}
                    isInvalid={!validationResult.success}
                    isValid={validationResult.success}
                />
                <Form.Control.Feedback
                    type={validationResult.success ? "valid" : "invalid"}
                >
                    {validationResult.message}
                </Form.Control.Feedback>
            </InputGroup>
            <Button
                className="mb-3"
                variant="primary"
                onClick={clickHandler}
                disabled={!validationResult.success}
            >
                Analyze
            </Button>
            <Collapse in={showSummary}>
                <div>
                    <CoordinateSummary
                        summary={summaryResult}
                        input={coordinates}
                    ></CoordinateSummary>
                </div>
            </Collapse>
        </div>
    );
}
