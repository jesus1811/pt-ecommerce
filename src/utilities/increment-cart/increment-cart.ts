import { IProduct } from "@/types";

export const incrementCart = (products: IProduct[], id: number): IProduct[] => {
  const updatedArray = products.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        count: (item.count || 0) + 1,
      };
    }
    return item;
  });
  return updatedArray;
};

export default incrementCart;
