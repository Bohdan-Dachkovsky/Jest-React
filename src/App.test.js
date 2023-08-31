import { render, screen } from "@testing-library/react";
import App from "./App.js";
import { sum } from "./sum";

describe("App tests", () => {
  it("adds 1 + 2 to equal 3", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(sum(1, 2)).toBe(3);
  });
});
