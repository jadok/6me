import React from 'react';
import {
  ProductDocument,
  useProductQuery,
} from '../../document/product.graphql';
import { initializeApollo } from '../../lib/apollo';

import { Buy as BuyType } from '@graphql-types@';
import { BuyView } from 'components/buy/view';

const Index = () => {
  const data = useProductQuery().data!;
  return (
    <div>
      <ul className="buy">
        {(data.products as Array<BuyType>).map((buy) => (
          <li key={buy.id}>
            <BuyView buy={buy} />
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
