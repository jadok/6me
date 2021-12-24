import { QueryResolvers, MutationResolvers, PlaceTypeResolvers, ProductResolvers } from '@graphql-types@'
import { join } from 'path';
import { read, write } from './adapter/file';
import { ResolverContext } from './apollo';

import { Buy, Localization, Product } from '@graphql-types@';
import { getTotalFromProducts } from './business';

const PlaceTypeResolver: PlaceTypeResolvers = {
  __resolveType: (lieu: any, _context) => {
    if (lieu.latitude) {
      return 'GeoLocalization';
    }
    if (lieu.zipCode) {
      return 'Coordonate';
    }
    return null;
  }
};


const Query: Required<QueryResolvers<ResolverContext>> = {
  products: async (_parent, _args, _context, _info) => {
    return await read(join(process.cwd(), 'data', 'compte.json'));
  },

  productsPrefill: async (_parent, _args, _context, _info) => {
    const source = await read(join(process.cwd(), 'data', 'compte.json')) as Array<Buy>;
    const productPrefillData = (['category', 'origine'] as Array<keyof Product>).reduce((accPrefill, keyAttribut: keyof Product) => {
      accPrefill[keyAttribut] = source.reduce((acc, achat) => achat.products.reduce((accAttribut, product: Product) => {
        if (!accAttribut.includes(product[keyAttribut] as string)) {
            accAttribut.push(product[keyAttribut] as string);
        }
        return accAttribut;
      }, acc), [] as Array<string>);
      return accPrefill;
    }, {} as Record<string, Array<string>>);
      const localizations = source.reduce((acc, achat) => {
        if (!acc.find((localization) => JSON.stringify(localization) === JSON.stringify(achat.localization))) {
          acc.push(achat.localization);
        }
        return acc;
      }, [] as Array<Localization>);
    return {
      ...productPrefillData,
      localizations,
    };
  },
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  addBuy: async (_parent, _args, _context, _info) => {
    const source = await read(join(process.cwd(), 'data', 'compte.json')) as Array<Buy>;
    const lastId = parseInt(source.slice(-1)[0].id, 0) + 1;
    const total = getTotalFromProducts(_args.input.products);

    source.push({
      ..._args.input,
      total,
      id: lastId.toString(),
    })

    await write(join(process.cwd(), 'data', 'compte.json'), source.sort((p1: Buy, p2: Buy) => p1.date - p2.date));
    return lastId.toString();
  },
}

export default { Query, Mutation, PlaceType: PlaceTypeResolver }
