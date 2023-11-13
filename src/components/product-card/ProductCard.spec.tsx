import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { IProduct } from "@/types";

describe("<ProductCard/>", () => {
  test("renders content", () => {
    const product: IProduct = {
      id: 1,
      brand: "Apple",
      createdAt: new Date().toDateString(),
      description: "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
      name: "Apple Watch Series 7",
      photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
      price: "3200",
      updatedAt: new Date().toDateString(),
    };
    const component = render(<ProductCard product={product} />);
    expect(component.container).toHaveTextContent("Apple Watch Series 7");
  });
  test("clickme shop", () => {});
});
