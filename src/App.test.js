import { render, screen } from "@testing-library/react";
import App from "./App.js";

describe("App tests", () => {
  it("should contains the heading 1", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});