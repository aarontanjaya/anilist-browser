import { Global } from '@emotion/react';
import { globals } from '@/styles';
import type { AppProps } from 'next/app';
import { apolloClient } from '@/services';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Global styles={globals} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
