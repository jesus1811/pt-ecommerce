import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductCartCard } from "./ProductCartCard";
import { IProduct } from "@/types";
describe("<ProductCartCard/>", () => {
  test("renders content", () => {
    const product: IProduct = {
      id: 1,
      brand: "Apple",
      createdAt: new Date().toDateString(),
      description: "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
      name: "Apple Watch Series 8",
      photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
      price: "3200",
      updatedAt: new Date().toDateString(),
    };

    const component = render(<ProductCartCard product={product} />);
    expect(component.container).toHaveTextContent("Apple Watch Series 8");
  });
});
