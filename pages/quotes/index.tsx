import React from "react";
import {
  QuotesDocument,
  useQuotesQuery,
} from "../../document/quote.graphql";
import { initializeApollo } from "../../lib/apollo";

import { Quote as QuoteType } from "@graphql-types@";
import { Quote } from "components/quote/quote";

const Index = () => {
  const data = useQuotesQuery().data;
  return (
    <div>
      <ul className="quotes">
        {(data?.quotes as Array<QuoteType>).map((quote) => (
          <Quote {...quote} key={quote.id} />
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: QuotesDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
