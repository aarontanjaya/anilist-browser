import { Global } from '@emotion/react';
import { globals } from '@/styles';
import { ReactElement, ReactNode } from 'react';
import { Source_Sans_3 } from 'next/font/google';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { apolloClient } from '@/services';
import { ApolloProvider } from '@apollo/client';
import { CollectionProvider } from '@/components/providers/CollectionProvider';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const inter = Source_Sans_3({ subsets: ['latin'] });
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

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <main className={inter.className}>
      <CollectionProvider>
        <ApolloProvider client={apolloClient}>
          <ChakraProvider theme={theme}>
            <Global styles={globals} />
            <Component {...pageProps} />
          </ChakraProvider>
        </ApolloProvider>
      </CollectionProvider>
    </main>,
  );
}
