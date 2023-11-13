import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from "./NavBar";

describe("<NavBar/>", () => {
  test("renders content", () => {
    const component = render(<NavBar />);
    expect(component.container).toHaveTextContent("Sistemas");
  });
});
