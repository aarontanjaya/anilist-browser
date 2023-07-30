import { UserLayout } from '@/components/layout';
import ListCollection from '@/components/organisms/ListCollection';
import { mqTablet } from '@/styles/mq';
import styled from '@emotion/styled';
import Head from 'next/head';
import React, { ReactElement } from 'react';

export default function Collections() {
  const Title = styled.h3({
    padding: '1rem',
    paddingBottom: '0',
    [mqTablet]: {
      padding: '2rem',
    },
  });

  return (
    <>
      <Head>
        <title>AniBrowser - My Collections</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>
          <Title>My Collections</Title>
          <ListCollection />
        </div>
      </main>
    </>
  );
}

Collections.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
