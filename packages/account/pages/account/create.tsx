import React, { useState } from 'react';
import {
  ProductsPrefillDocument,
  useProductsPrefillQuery,
} from '../../document/product.graphql';
import { initializeApollo } from '../../lib/apollo';

import { ProductPrefill, Product } from '@graphql-types@';
import { Products } from 'components/product/products';
import { CreateProduct } from 'components/product/create';

const Create = () => {
  const data = useProductsPrefillQuery().data!

  const [products, setProducts] = useState<Array<Product>>([]);
  const afterSubmitProducts = (data: Record<string, string>) => {
    const product: Product = {
      name: data.name,
      origine: data.origine,
      category: data.category,
      cost: {
        unitPrice: parseFloat(data.cost_unitPrice),
        nbr: parseInt(data.cost_nbr, 10),
        qty: parseFloat(data.cost_qty),
        unit: data.cost_unite,
        total: parseFloat(data.cost_total),
      }
    };
    const newProducts = [ ...products ];
    newProducts.push(product);
    setProducts(newProducts);

  };
  return (
    <>
      <section>
        <h2>Products</h2>
        <Products products={products} />
        <CreateProduct afterSubmit={afterSubmitProducts} prefill={data.productsPrefill} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ProductsPrefillDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Create
