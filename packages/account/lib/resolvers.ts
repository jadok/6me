import { QueryResolvers, MutationResolvers, PlaceTypeResolvers, ProductResolvers } from '@graphql-types@'
import { join } from 'path';
import { read, write } from './adapter/file';
import { ResolverContext } from './apollo';

import { Buy, Localization } from '@graphql-types@';

const PlaceTypeResolver: PlaceTypeResolvers = {
  __resolveType: (lieu: any, _context) => {
    if (lieu.latitude) {
      return 'GeoLocalization';
    }
    if (lieu.city) {
      return 'Coordonate';
    }
    return null;
  }
};


const Query: Required<QueryResolvers<ResolverContext>> = {
  products: async (_parent, _args, _context, _info) => {
    const source = await read(join(process.cwd(), 'data', 'compte.json'));
    return source;
  },

  productsPrefill: async (_parent, _args, _context, _info) => {
    const source = await read(join(process.cwd(), 'data', 'compte.json')) as Array<Buy>;
    const categories = source.reduce((acc, achat) => achat.products.reduce((accCategory, product) => {
        if (!accCategory.includes(product.category)) {
            accCategory.push(product.category);
        }
        return accCategory;
      }, acc), [] as Array<string>);
      const localizations = source.reduce((acc, achat) => {
        if (!acc.find((localization) => JSON.stringify(localization) === JSON.stringify(achat.localization))) {
          acc.push(achat.localization);
        }
        return acc;
      }, [] as Array<Localization>);
    return {
      categories,
      localizations,
    };
  },
}

// const Mutation: Required<MutationResolvers<ResolverContext>> = {
// }

export default { Query, PlaceType: PlaceTypeResolver }
