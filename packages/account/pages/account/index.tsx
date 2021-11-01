import React from 'react';
import {
  ProductDocument,
  useProductQuery,
} from '../../document/product.graphql';
import { initializeApollo } from '../../lib/apollo';

import { Buy } from '@graphql-types@';
import { Products } from 'components/product/products';

const Index = () => {
  const data = useProductQuery().data!;
  return (
    <div>
      <ul className="buy">
        {(data.products as Array<Buy>).map(({ id, date, products, total }) => (
          <li key={id}>
            <time>{date}</time>
            <Products products={products} />
            <span className="total">{total}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ProductDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
