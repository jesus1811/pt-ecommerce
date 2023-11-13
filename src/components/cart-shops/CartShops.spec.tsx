import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import { CartShops } from "..";

describe("<CartShops/>", () => {
  test("renders content", () => {
    const component = render(<CartShops />);

    expect(component.container).toHaveTextContent("Carrinho");
  });
});
