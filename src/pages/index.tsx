import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '@/services/animes';
import { ListAnime } from '@/components/organisms';
import { ReactElement, useEffect, useState } from 'react';
import { UserLayout } from '@/components/layout';
import styled from '@emotion/styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IAnime } from '@/types';

const Container = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
`;

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
export default function Home() {
  const [currentList, setCurrentList] = useState<IAnime[]>([]);
  const [page, setPage] = useState(1);
  const { loading, data } = useQuery(GET_ANIME_LIST, {
    variables: {
      page: page,
      perPage: 10,
      search: null,
    },
  });

  useEffect(() => {
    if (data?.Page && data.Page.media) {
      setCurrentList([...currentList, ...(data?.Page?.media as IAnime[])]);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>AniBrowser - find your favorite anime</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <InfiniteScroll
        dataLength={currentList.length}
        next={() => setPage(page + 1)}
        hasMore={
          data &&
          data.Page &&
          data.Page?.pageInfo &&
          data?.Page?.pageInfo?.hasNextPage
            ? data.Page.pageInfo.hasNextPage
            : false
        }
        loader
        style={{
          minHeight: '110vh',
        }}
      >
        <MainContainer>
          <Container>
            <ListAnime data={currentList} isLoading={loading} />
          </Container>
        </MainContainer>
      </InfiniteScroll>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
