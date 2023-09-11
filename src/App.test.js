import { renderer } from "react-test-renderer";

import App from "./App.js";
import sum from "./sum";
import { picture } from "./products";

describe("App tests", () => {
  it("adds 1 + 2 to equal 3", () => {
    renderer.create(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(sum(1, 2)).toBe(3);
    expect(picture(2022, 1)).toBe(2024);
  });
});
