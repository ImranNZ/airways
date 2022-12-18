import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
    render(<App />);
    const headerText = screen.getByText(/Airways Technical Exercise/i);
    expect(headerText).toBeInTheDocument();
});
