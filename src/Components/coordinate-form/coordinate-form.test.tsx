import { render, screen } from "@testing-library/react";
import { CoordinateForm } from "./coordinate-form.component";

test("renders coordinate form", () => {
    render(<CoordinateForm />);
    const labelText = screen.getByText(/Coordinate List/i);
    expect(labelText).toBeInTheDocument();
});
