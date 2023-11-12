import { Layout, ProductCard, Products } from "@/components";
import { getProducts } from "@/services";
import { useQuery } from "react-query";

export function Home() {
  const { data: products } = useQuery(["products"], () => getProducts({ page: 1, rows: 6, orderBy: "ASC", sortBy: "name" }));
  return (
    <Layout>
      <Products />
    </Layout>
  );
}

export default Home;
