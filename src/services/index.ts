import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${process.env.ANILIST_URL}`,
    fetchOptions: {
      method: 'POST',
    },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
});
