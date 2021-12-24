import React, { useState } from 'react';
import {
  ProductsPrefillDocument,
  useProductsPrefillQuery,
  useAddBuyMutation,
} from '../../document/product.graphql';
import { initializeApollo } from '../../lib/apollo';
import { ProductsPrefillData, Buy as BuyType, BuyInput, Product, Localization as LocalizationType } from '@graphql-types@';
import { BuyEdit } from 'components/buy/edit';

const Create = () => {
  const data = useProductsPrefillQuery().data!;
  const [addBuyMutation] = useAddBuyMutation();

  const addBuy = (buyData: Partial<BuyType>): Promise<any> =>
    addBuyMutation({
      variables: {
        input: buyData as BuyInput,
      },

      // //Follow apollo suggestion to update cache
      // //https://www.apollographql.com/docs/angular/features/cache-updates/#update
      // update: (cache, mutationResult) => {
      //   const { data } = mutationResult
      //   if (!data) return // Cancel updating name in cache if no data is returned from mutation.
      //   // Read the data from our cache for this query.
      //   const { viewer } = cache.readQuery({
      //     query: ViewerDocument,
      //   }) as ViewerQuery
      //   const newViewer = { ...viewer }
      //   // Add our comment from the mutation to the end.
      //   newViewer.name = data.updateName.name
      //   // Write our data back to the cache.
      //   cache.writeQuery({ query: ViewerDocument, data: { viewer: newViewer } })
      // },
    })

  return (
    <>
      <section>
        <BuyEdit addBuy={addBuy} prefill={data.productsPrefill} />
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
