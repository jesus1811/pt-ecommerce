import { Layout, Products } from "@/components";
import { useCartStore } from "@/store";
import { useEffect } from "react";

export function Home() {
  const { loadStorage } = useCartStore();

  useEffect(() => {
    loadStorage(JSON.parse(localStorage.getItem("CART") || "[]"));
  }, [loadStorage]);
  return (
    <Layout>
      <Products />
    </Layout>
  );
}

export default Home;
