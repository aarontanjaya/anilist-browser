import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '@/services/animes';
import { ListAnime } from '@/components/organisms';
import { Pagination } from '@/components/molecules';
import { ReactElement } from 'react';
import { UserLayout } from '@/components/layout';
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
      <main>
        <div>
          <ListAnime
            data={data && data.Page?.media ? data.Page.media : []}
            isLoading={loading}
          />
          <Pagination page={1} onPageChange={() => null} />
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
