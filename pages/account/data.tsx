import { useMemo } from "react";
import { VictoryPie } from "victory";

import { initializeApollo } from "../../lib/apollo";

import { Buy, Product } from "@graphql-types@";
import { dataToPieData } from "utils/graph";
import { useProductQuery, ProductDocument } from "document/product.graphql";

const analyzeDataByAttribute = (attribute: string, data: Array<Buy>) =>
  data.reduce(
    (dataFiltered: Record<string, number>, cur) =>
      cur.products.reduce((accP: Record<string, number>, curP: Product) => {
        const filteredAttribut = (curP as Record<string, any>)[attribute];
        if (!accP[filteredAttribut]) {
          accP[filteredAttribut] = 0;
        }
        accP[filteredAttribut] += (curP as Product).cost.total;
        return accP;
      }, dataFiltered),
    {} as Record<string, number>
  );

const Analyze = () => {
  const data = useProductQuery().data;

  const dataByCategories = useMemo(
    () =>
      dataToPieData(
        analyzeDataByAttribute("category", data?.products as Array<Buy>)
      ),
    [data]
  );
  const dataByOrigins = useMemo(
    () =>
      dataToPieData(
        analyzeDataByAttribute("origine", data?.products as Array<Buy>)
      ),
    [data]
  );
  return (
    <div>
      <fieldset>
        <legend>Filter by Category</legend>
        <VictoryPie data={dataByCategories} />
      </fieldset>
      <fieldset>
        <legend>Filter by Origine</legend>
        <VictoryPie data={dataByOrigins} />
      </fieldset>
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ProductDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Analyze;
