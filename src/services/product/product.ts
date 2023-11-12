import axios from "axios";
import { IProductsRequest, IProduct } from "./types";

const URL = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1";

export const getProducts = async (request: IProductsRequest): Promise<IProduct[]> => {
  const response = await axios.get(`${URL}/products`, {
    params: request,
  });
  if (response.status === 200) return response.data?.products;
  return [];
};
