// import type { Product } from "shop-types";

import { PHONE } from "@/config";
import { IProduct } from "@/types";

export const messageWhatsapp = (products: IProduct[]): void => {
  const { mensajeProductos, total } = products.reduce(
    (acc, product) => {
      const productTotal = parseFloat(product.price) * (product.count || 1);
      return {
        mensajeProductos: [...acc.mensajeProductos, `🧷 ${product.name} (${product.price}$ x ${product.count || 1} = ${productTotal}$)`],
        total: acc.total + productTotal,
      };
    },
    { mensajeProductos: [] as string[], total: 0 }
  );

  const saludo = `¡Hola! Aquí tienes la lista de tus productos:\n\n${mensajeProductos.join("\n")}\n\nEl total de la compra es: ${Math.trunc(total * 10) / 10}$`;

  window.open(`https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(saludo)}`, "_blank");
};
