import React from "react";

import { Product as ProductType } from "@graphql-types@";

export const Product = ({
  name,
  origine,
  category,
  cost: { qty, unitPrice, unit, total },
}: ProductType): JSX.Element => (
  <li className={`product category-${category} origin-${origine}`}>
    <span className="name">{name}</span>
    <div className="price">
      <span className="qty">{qty}</span>
      <span className="unit">{unit}</span>
      <span className="unit-price">{unitPrice}</span>
      <span className="total">{total}</span>
    </div>
  </li>
);
