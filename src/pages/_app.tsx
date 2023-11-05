import { Global } from '@emotion/react';
import { globals } from '@/styles';
import { ReactElement, ReactNode, useEffect } from 'react';
import { Source_Sans_3 } from 'next/font/google';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { apolloClient } from '@/services';
import { ApolloProvider } from '@apollo/client';
import { CollectionProvider } from '@/components/providers/CollectionProvider';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const sourceSans = Source_Sans_3({ subsets: ['latin'], display: 'swap' });
const theme = extendTheme({
  fonts: {
    sourceSans: sourceSans.style.fontFamily,
  },
  styles: {
    global: () => ({
      body: {
        bg: '',
        color: '',
        fontFamily: sourceSans.style.fontFamily,
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
  useEffect(() => {
    console.log('tes');
    if ('serviceWorker' in navigator) {
      console.log('masuk');
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .then((reg) => console.log('test', reg));
    }
  }, []);
  return getLayout(
    <main className={sourceSans.className}>
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
