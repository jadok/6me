import React from 'react';
import {
  ProductDocument,
  useProductQuery,
} from '../../document/product.graphql';
import { initializeApollo } from '../../lib/apollo';

import { Buy } from '@graphql-types@';
import { splitBuysByDate } from 'utils/buy';

const Date = () => {
  const data = useProductQuery().data!;
  const dateData = splitBuysByDate(data.products as Array<Buy>);
  return (
    <div>
      <ul className="date">
        {Object.keys(dateData).map((year) => {
          const yearData = dateData[parseInt(year, 10)]
          return (
            <li key={year} className="years">
              <time>{year}</time>
              <span className="total">
                {yearData.total.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </span>
              <ul>
                {Object.keys(yearData.months).map((month) => (
                  <li key={month} className="months">
                    <time>{`${year}-${month}`}</time>
                    <span className="total">
                      {yearData.months[parseInt(month, 10)].toLocaleString('fr-FR', {
                        style: 'currency',
                        currency: 'EUR',
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
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

export default Date;
