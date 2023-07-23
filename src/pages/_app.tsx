import { Global } from '@emotion/react';
import { globals } from '@/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globals} />
      <Component {...pageProps} />
    </>
  );
}
