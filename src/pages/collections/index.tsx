import { UserLayout } from '@/components/layout';
import ListCollection from '@/components/organisms/ListCollection';
import styled from '@emotion/styled';
import Head from 'next/head';
import React, { ReactElement } from 'react';

const Title = styled.h3({
  padding: '1rem',
});

const Container = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export default function Collections() {
  return (
    <>
      <Head>
        <title>AniBrowser - My Collections</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainContainer>
        <Container>
          <Title>My Collections</Title>
          <ListCollection />
        </Container>
      </MainContainer>
    </>
  );
}

Collections.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
