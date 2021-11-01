import React from 'react';

import { Product as ProductType } from '@graphql-types@';
import { Product } from './product';

interface ProductsProps {
  products: Array<ProductType>;
}

export const Products = ({
  products,
}: ProductsProps): JSX.Element => (
  <ul className="products">
    {products.map((product, index) => (
      <Product {...product} key={index} />
    ))}
  </ul>
);
