import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '@/services/animes';
import { ListAnime } from '@/components/organisms';
import { ReactElement } from 'react';
import { UserLayout } from '@/components/layout';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
`;

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
export default function Home() {
  const { loading, data } = useQuery(GET_ANIME_LIST, {
    variables: {
      page: 1,
      perPage: 10,
      search: null,
    },
  });

  return (
    <>
      <Head>
        <title>AniBrowser - find your favorite anime</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainContainer>
        <Container>
          <ListAnime
            data={data && data.Page?.media ? data.Page.media : []}
            isLoading={loading}
          />
        </Container>
      </MainContainer>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
