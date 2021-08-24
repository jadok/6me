import { Product } from "@graphql-types@";

export const getTotalFromProducts = (products: Product[]): number =>
  products.reduce((total: number, product) => total + product.cost.total, 0);
