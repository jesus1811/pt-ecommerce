import { create } from "zustand";

import { decrementCart, incrementCart } from "@/utilities";
import { IProduct } from "@/types";

const initialCart: IProduct[] = [];

interface State {
  cart: IProduct[];
  isCart: boolean;
  openCart: () => void;
  closeCart: () => void;
  addCart: (newProduct: IProduct) => void;
  shopCart: (newProduct: IProduct) => void;
  decreaseCart: (newProduct: IProduct) => void;
  resetCart: () => void;
  loadStorage: (products: IProduct[]) => void;
  removeProduct: (idProduct: number) => void;
}

export const useCartStore = create<State>((set) => ({
  cart: initialCart,
  isCart: false,
  removeProduct: (idProduct) => {
    set(({ cart }) => {
      const newCart = cart.filter((product) => product.id !== idProduct);
      return { cart: newCart };
    });
  },

  shopCart: (newProduct) => {
    set(({ cart }) => {
      const isCart = cart.some((cart) => cart.id === newProduct.id);
      if (!isCart) {
        localStorage.setItem("CART", JSON.stringify([...cart, { ...newProduct, count: 1 }]));
        localStorage.setItem("ISCART", JSON.stringify(true));
        return { cart: [...cart, { ...newProduct, count: 1 }], isCart: true };
      }
      return { cart };
    });
  },

  addCart: (newProduct) => {
    set(({ cart }) => {
      const isCart = cart.some((cart) => cart.id === newProduct.id);

      if (!isCart) {
        localStorage.setItem("CART", JSON.stringify([...cart, { ...newProduct, count: 1 }]));
        return { cart: [...cart, { ...newProduct, count: 1 }] };
      }
      localStorage.setItem("CART", JSON.stringify(incrementCart(cart, newProduct.id)));

      return { cart: incrementCart(cart, newProduct.id) };
    });
  },

  decreaseCart: (newProduct) => {
    set(({ cart }) => {
      const isCart = cart.some((cart) => cart.id === newProduct.id);

      if (!isCart) {
        localStorage.setItem("CART", JSON.stringify([...cart, { ...newProduct, count: 1 }]));
        return { cart: [...cart, { ...newProduct, count: 1 }] };
      }
      localStorage.setItem("CART", JSON.stringify(decrementCart(cart, newProduct.id)));

      return { cart: decrementCart(cart, newProduct.id) };
    });
  },
  loadStorage: (products) => {
    set(({ cart }) => {
      return { cart: products };
    });
  },
  resetCart: () => {
    set(() => {
      return { cart: [] };
    });
  },
  openCart: () => {
    set(() => {
      return { isCart: true };
    });
  },
  closeCart: () => {
    set(() => {
      return { isCart: false };
    });
  },
}));
