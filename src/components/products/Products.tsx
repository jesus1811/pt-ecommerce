import { getProducts } from "@/services";
import { useQuery, useInfiniteQuery } from "react-query";
import { Loader, ProductCard } from "..";
import { StyledProductsContainer } from "./styled";

export function Products() {
  const { data: products, isSuccess, isLoading } = useQuery(["products"], () => getProducts({ page: 1, rows: 8, orderBy: "ASC", sortBy: "name" }));

  if (!isSuccess || !products) return null;
  if (isLoading) return <Loader />;
  return (
    <StyledProductsContainer>
      {products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </StyledProductsContainer>
  );
}

export default Products;
