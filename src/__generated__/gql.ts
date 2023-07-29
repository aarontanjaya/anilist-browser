/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getAnimeList($search: String, $page: Int, $perPage: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {\n        id\n        title {\n          romaji\n          english\n        }\n        type\n        genres\n        coverImage {\n          medium\n        }\n      }\n    }\n  }\n": types.GetAnimeListDocument,
    "\n  query getAnime($id: Int){\n      Media(id: $id, type: ANIME){\n        id\n        title{\n          romaji\n          english\n        }\n        type\n        genres\n        bannerImage\n        coverImage{\n          medium\n          large\n        }\n        characters(sort: ID) {\n          edges {\n            voiceActors(language: JAPANESE) {\n              image {\n                medium\n              }\n              language\n              name {\n                first\n                last\n                full\n                native\n              }\n              id\n            }\n            role\n            node {\n              image {\n                medium\n              }\n              name {\n                first\n                last\n                full\n                native\n              }\n              id\n            }\n            id\n          }\n        }\n        season\n        status\n        description\n        episodes\n        countryOfOrigin\n        popularity\n        averageScore\n      }\n  }\n": types.GetAnimeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAnimeList($search: String, $page: Int, $perPage: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {\n        id\n        title {\n          romaji\n          english\n        }\n        type\n        genres\n        coverImage {\n          medium\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAnimeList($search: String, $page: Int, $perPage: Int) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {\n        id\n        title {\n          romaji\n          english\n        }\n        type\n        genres\n        coverImage {\n          medium\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAnime($id: Int){\n      Media(id: $id, type: ANIME){\n        id\n        title{\n          romaji\n          english\n        }\n        type\n        genres\n        bannerImage\n        coverImage{\n          medium\n          large\n        }\n        characters(sort: ID) {\n          edges {\n            voiceActors(language: JAPANESE) {\n              image {\n                medium\n              }\n              language\n              name {\n                first\n                last\n                full\n                native\n              }\n              id\n            }\n            role\n            node {\n              image {\n                medium\n              }\n              name {\n                first\n                last\n                full\n                native\n              }\n              id\n            }\n            id\n          }\n        }\n        season\n        status\n        description\n        episodes\n        countryOfOrigin\n        popularity\n        averageScore\n      }\n  }\n"): (typeof documents)["\n  query getAnime($id: Int){\n      Media(id: $id, type: ANIME){\n        id\n        title{\n          romaji\n          english\n        }\n        type\n        genres\n        bannerImage\n        coverImage{\n          medium\n          large\n        }\n        characters(sort: ID) {\n          edges {\n            voiceActors(language: JAPANESE) {\n              image {\n                medium\n              }\n              language\n              name {\n                first\n                last\n                full\n                native\n              }\n              id\n            }\n            role\n            node {\n              image {\n                medium\n              }\n              name {\n                first\n                last\n                full\n                native\n              }\n              id\n            }\n            id\n          }\n        }\n        season\n        status\n        description\n        episodes\n        countryOfOrigin\n        popularity\n        averageScore\n      }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;