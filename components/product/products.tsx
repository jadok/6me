import React from "react";

import { Product as ProductType } from "@graphql-types@";
import { Product } from "./product";

interface ProductsProps {
  products: Array<ProductType>;
  deleteProduct?: (id: number) => void;
}

export const Products = ({ products, deleteProduct }: ProductsProps): JSX.Element => (
  <ul className="products">
    {products.map((product, index) => (
      <li className="product" key={index}>
        <Product {...product} />
        {deleteProduct ? <button className="delete" onClick={() => deleteProduct(index)} >X</button> : null}
      </li>
    ))}
  </ul>
);
