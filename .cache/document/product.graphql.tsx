/* 64ea2e19da7e906531ab0af64290fce6727d2f8c
 * This file is automatically generated by graphql-let. */

import * as Types from '../__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ProductQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Buy' }
    & Pick<Types.Buy, 'id' | 'date' | 'total'>
    & { localization: (
      { __typename?: 'Localization' }
      & Pick<Types.Localization, 'name'>
      & { place: (
        { __typename?: 'Coordonate' }
        & Pick<Types.Coordonate, 'adress' | 'city' | 'zipCode'>
      ) | (
        { __typename?: 'GeoLocalization' }
        & Pick<Types.GeoLocalization, 'latitude' | 'longitude'>
      ) }
    ), products: Array<(
      { __typename?: 'Product' }
      & Pick<Types.Product, 'name' | 'category' | 'origine'>
      & { cost: (
        { __typename?: 'UnitCostProduct' }
        & Pick<Types.UnitCostProduct, 'qty' | 'unitPrice' | 'unit' | 'total'>
      ) }
    )> }
  )> }
);

export type ProductsPrefillQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductsPrefillQuery = (
  { __typename?: 'Query' }
  & { productsPrefill: (
    { __typename?: 'ProductsPrefillData' }
    & Pick<Types.ProductsPrefillData, 'category' | 'origine'>
    & { localizations: Array<Types.Maybe<(
      { __typename?: 'Localization' }
      & Pick<Types.Localization, 'name'>
      & { place: (
        { __typename?: 'Coordonate' }
        & Pick<Types.Coordonate, 'adress' | 'city' | 'zipCode'>
      ) | (
        { __typename?: 'GeoLocalization' }
        & Pick<Types.GeoLocalization, 'latitude' | 'longitude'>
      ) }
    )>>, products: Array<Types.Maybe<(
      { __typename?: 'Product' }
      & Pick<Types.Product, 'name' | 'category' | 'origine'>
      & { cost: (
        { __typename?: 'UnitCostProduct' }
        & Pick<Types.UnitCostProduct, 'qty' | 'unitPrice' | 'nbr' | 'unit' | 'total'>
      ) }
    )>> }
  ) }
);

export type AddBuyMutationVariables = Types.Exact<{
  input: Types.BuyInput;
}>;


export type AddBuyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'addBuy'>
);


export const ProductDocument = gql`
    query product {
  products {
    id
    date
    localization {
      name
      place {
        ... on Coordonate {
          adress
          city
          zipCode
        }
        ... on GeoLocalization {
          latitude
          longitude
        }
      }
    }
    products {
      name
      category
      origine
      cost {
        qty
        unitPrice
        unit
        total
      }
    }
    total
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsPrefillDocument = gql`
    query productsPrefill {
  productsPrefill {
    category
    origine
    localizations {
      name
      place {
        ... on Coordonate {
          adress
          city
          zipCode
        }
        ... on GeoLocalization {
          latitude
          longitude
        }
      }
    }
    products {
      name
      category
      origine
      cost {
        qty
        unitPrice
        nbr
        unit
        total
      }
    }
  }
}
    `;

/**
 * __useProductsPrefillQuery__
 *
 * To run a query within a React component, call `useProductsPrefillQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsPrefillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsPrefillQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsPrefillQuery(baseOptions?: Apollo.QueryHookOptions<ProductsPrefillQuery, ProductsPrefillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsPrefillQuery, ProductsPrefillQueryVariables>(ProductsPrefillDocument, options);
      }
export function useProductsPrefillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsPrefillQuery, ProductsPrefillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsPrefillQuery, ProductsPrefillQueryVariables>(ProductsPrefillDocument, options);
        }
export type ProductsPrefillQueryHookResult = ReturnType<typeof useProductsPrefillQuery>;
export type ProductsPrefillLazyQueryHookResult = ReturnType<typeof useProductsPrefillLazyQuery>;
export type ProductsPrefillQueryResult = Apollo.QueryResult<ProductsPrefillQuery, ProductsPrefillQueryVariables>;
export const AddBuyDocument = gql`
    mutation addBuy($input: BuyInput!) {
  addBuy(input: $input)
}
    `;
export type AddBuyMutationFn = Apollo.MutationFunction<AddBuyMutation, AddBuyMutationVariables>;

/**
 * __useAddBuyMutation__
 *
 * To run a mutation, you first call `useAddBuyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBuyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBuyMutation, { data, loading, error }] = useAddBuyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBuyMutation(baseOptions?: Apollo.MutationHookOptions<AddBuyMutation, AddBuyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBuyMutation, AddBuyMutationVariables>(AddBuyDocument, options);
      }
export type AddBuyMutationHookResult = ReturnType<typeof useAddBuyMutation>;
export type AddBuyMutationResult = Apollo.MutationResult<AddBuyMutation>;
export type AddBuyMutationOptions = Apollo.BaseMutationOptions<AddBuyMutation, AddBuyMutationVariables>;