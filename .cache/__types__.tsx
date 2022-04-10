/* 9489b7047a1c1738755fd729590393865b0ef207
 * This file is automatically generated by graphql-let. */

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

/** AnonymAuthor */
export type AnonymAuthor = {
  __typename?: 'AnonymAuthor';
  pseudo: Scalars['String'];
};

export type AuthorType = PublicAuthor | AnonymAuthor;

/** Buy */
export type Buy = {
  __typename?: 'Buy';
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  localization: Localization;
  products: Array<Product>;
  total: Scalars['Float'];
};

/** BuyInput */
export type BuyInput = {
  date: Scalars['DateTime'];
  localization: LocalizationInput;
  products: Array<ProductInput>;
};

/** Coordonate */
export type Coordonate = {
  __typename?: 'Coordonate';
  adress: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
};

/** Coordonate */
export type CoordonateInput = {
  adress: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
};


/** GeoLocalization */
export type GeoLocalization = {
  __typename?: 'GeoLocalization';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** GeoLocalization */
export type GeoLocalizationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** Localization */
export type Localization = {
  __typename?: 'Localization';
  place: PlaceType;
  name: Scalars['String'];
};

/** LocalizationInput */
export type LocalizationInput = {
  place: CoordonateInput;
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBuy: Scalars['ID'];
};


export type MutationAddBuyArgs = {
  input: BuyInput;
};

export type PlaceType = Coordonate | GeoLocalization;

/** Product */
export type Product = {
  __typename?: 'Product';
  category: Scalars['String'];
  cost: UnitCostProduct;
  name: Scalars['ID'];
  origine: Scalars['String'];
};

/** ProductInput */
export type ProductInput = {
  category: Scalars['String'];
  cost: UnitCostProductInput;
  name: Scalars['ID'];
  origine: Scalars['String'];
};

/** ProductsPrefillData */
export type ProductsPrefillData = {
  __typename?: 'ProductsPrefillData';
  category: Array<Maybe<Scalars['String']>>;
  origine: Array<Maybe<Scalars['String']>>;
  localizations: Array<Maybe<Localization>>;
  products: Array<Maybe<Product>>;
};

/** PublicAuthor */
export type PublicAuthor = {
  __typename?: 'PublicAuthor';
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  products: Array<Buy>;
  productsPrefill: ProductsPrefillData;
  quotes?: Maybe<Array<Quote>>;
};


export type QueryProductsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryQuotesArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

/** Quote */
export type Quote = {
  __typename?: 'Quote';
  author: AuthorType;
  id: Scalars['ID'];
  medium: Scalars['String'];
  source?: Maybe<Scalars['String']>;
  quote: Scalars['String'];
};

/** UnitCostProduct */
export type UnitCostProduct = {
  __typename?: 'UnitCostProduct';
  unitPrice: Scalars['Float'];
  qty: Scalars['Float'];
  nbr: Scalars['Int'];
  total: Scalars['Float'];
  unit: Scalars['String'];
};

/** UnitCostProduct */
export type UnitCostProductInput = {
  unitPrice: Scalars['Float'];
  qty: Scalars['Float'];
  nbr: Scalars['Int'];
  total: Scalars['Float'];
  unit: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AnonymAuthor: ResolverTypeWrapper<AnonymAuthor>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AuthorType: ResolversTypes['PublicAuthor'] | ResolversTypes['AnonymAuthor'];
  Buy: ResolverTypeWrapper<Buy>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  BuyInput: BuyInput;
  Coordonate: ResolverTypeWrapper<Coordonate>;
  CoordonateInput: CoordonateInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  GeoLocalization: ResolverTypeWrapper<GeoLocalization>;
  GeoLocalizationInput: GeoLocalizationInput;
  Localization: ResolverTypeWrapper<Omit<Localization, 'place'> & { place: ResolversTypes['PlaceType'] }>;
  LocalizationInput: LocalizationInput;
  Mutation: ResolverTypeWrapper<{}>;
  PlaceType: ResolversTypes['Coordonate'] | ResolversTypes['GeoLocalization'];
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  ProductsPrefillData: ResolverTypeWrapper<ProductsPrefillData>;
  PublicAuthor: ResolverTypeWrapper<PublicAuthor>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Quote: ResolverTypeWrapper<Omit<Quote, 'author'> & { author: ResolversTypes['AuthorType'] }>;
  UnitCostProduct: ResolverTypeWrapper<UnitCostProduct>;
  UnitCostProductInput: UnitCostProductInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AnonymAuthor: AnonymAuthor;
  String: Scalars['String'];
  AuthorType: ResolversParentTypes['PublicAuthor'] | ResolversParentTypes['AnonymAuthor'];
  Buy: Buy;
  ID: Scalars['ID'];
  Float: Scalars['Float'];
  BuyInput: BuyInput;
  Coordonate: Coordonate;
  CoordonateInput: CoordonateInput;
  DateTime: Scalars['DateTime'];
  GeoLocalization: GeoLocalization;
  GeoLocalizationInput: GeoLocalizationInput;
  Localization: Omit<Localization, 'place'> & { place: ResolversParentTypes['PlaceType'] };
  LocalizationInput: LocalizationInput;
  Mutation: {};
  PlaceType: ResolversParentTypes['Coordonate'] | ResolversParentTypes['GeoLocalization'];
  Product: Product;
  ProductInput: ProductInput;
  ProductsPrefillData: ProductsPrefillData;
  PublicAuthor: PublicAuthor;
  Query: {};
  Int: Scalars['Int'];
  Quote: Omit<Quote, 'author'> & { author: ResolversParentTypes['AuthorType'] };
  UnitCostProduct: UnitCostProduct;
  UnitCostProductInput: UnitCostProductInput;
  Boolean: Scalars['Boolean'];
};

export type AnonymAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnonymAuthor'] = ResolversParentTypes['AnonymAuthor']> = {
  pseudo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorType'] = ResolversParentTypes['AuthorType']> = {
  __resolveType: TypeResolveFn<'PublicAuthor' | 'AnonymAuthor', ParentType, ContextType>;
};

export type BuyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Buy'] = ResolversParentTypes['Buy']> = {
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  localization?: Resolver<ResolversTypes['Localization'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoordonateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coordonate'] = ResolversParentTypes['Coordonate']> = {
  adress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GeoLocalizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeoLocalization'] = ResolversParentTypes['GeoLocalization']> = {
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocalizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Localization'] = ResolversParentTypes['Localization']> = {
  place?: Resolver<ResolversTypes['PlaceType'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBuy?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationAddBuyArgs, 'input'>>;
};

export type PlaceTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaceType'] = ResolversParentTypes['PlaceType']> = {
  __resolveType: TypeResolveFn<'Coordonate' | 'GeoLocalization', ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['UnitCostProduct'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  origine?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsPrefillDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsPrefillData'] = ResolversParentTypes['ProductsPrefillData']> = {
  category?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  origine?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  localizations?: Resolver<Array<Maybe<ResolversTypes['Localization']>>, ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicAuthor'] = ResolversParentTypes['PublicAuthor']> = {
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  products?: Resolver<Array<ResolversTypes['Buy']>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'skip' | 'take'>>;
  productsPrefill?: Resolver<ResolversTypes['ProductsPrefillData'], ParentType, ContextType>;
  quotes?: Resolver<Maybe<Array<ResolversTypes['Quote']>>, ParentType, ContextType, RequireFields<QueryQuotesArgs, 'skip' | 'take'>>;
};

export type QuoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quote'] = ResolversParentTypes['Quote']> = {
  author?: Resolver<ResolversTypes['AuthorType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  medium?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quote?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnitCostProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnitCostProduct'] = ResolversParentTypes['UnitCostProduct']> = {
  unitPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nbr?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AnonymAuthor?: AnonymAuthorResolvers<ContextType>;
  AuthorType?: AuthorTypeResolvers<ContextType>;
  Buy?: BuyResolvers<ContextType>;
  Coordonate?: CoordonateResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  GeoLocalization?: GeoLocalizationResolvers<ContextType>;
  Localization?: LocalizationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PlaceType?: PlaceTypeResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductsPrefillData?: ProductsPrefillDataResolvers<ContextType>;
  PublicAuthor?: PublicAuthorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Quote?: QuoteResolvers<ContextType>;
  UnitCostProduct?: UnitCostProductResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
