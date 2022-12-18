export interface ICoordinate {
    x: number;
    y: number;

    toString(): string;
}

export class Coordinate implements ICoordinate {
    _x: number;
    _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get x() {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y() {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    public toString(): string {
        return `${this.x.toFixed(1)},${this.y.toFixed(1)}`;
    }
}

export interface Characteristic {
    pointA: Coordinate;
    pointB: Coordinate;
    distance: number;
}

export interface CalculationResult {
    min: Characteristic;
    max: Characteristic;
    average: number;
}
