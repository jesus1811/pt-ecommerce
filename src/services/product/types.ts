export type SortBy = "id" | "name" | "price";
export type OrderBy = "DESC" | "ASC";

export interface IProductsRequest {
  page: number;
  rows: number;
  sortBy: SortBy;
  orderBy: OrderBy;
}
