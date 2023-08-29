const { render, screen } = require("@testing-library/react");
import About from "../About";
import "@testing-library/jest-dom";

test("should load about us component", () => {
    render(<About />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});