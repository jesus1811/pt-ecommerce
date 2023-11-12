export type SortBy = "id" | "name" | "price";
export type OrderBy = "DESC" | "ASC";

export interface IProductsRequest {
  page: number;
  rows: number;
  sortBy: SortBy;
  orderBy: OrderBy;
}

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}
