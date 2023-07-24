import { Global } from '@emotion/react';
import { globals } from '@/styles';
import type { AppProps } from 'next/app';
import { apolloClient } from '@/services';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '',
        color: '',
      },
    }),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Global styles={globals} />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
