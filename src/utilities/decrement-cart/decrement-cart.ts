import { IProduct } from "@/types";

export const decrementCart = (product: IProduct[], id: number): IProduct[] => {
  const updatedArray = product
    .map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: (item.count || 0) - 1,
        };
      }
      return item;
    })
    .filter((item) => !(item.id === id && item.count === 0));
  return updatedArray;
};

export default decrementCart;
