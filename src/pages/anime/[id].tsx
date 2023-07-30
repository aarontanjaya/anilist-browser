import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ANIME_DETAIL } from '@/services/animes';
import { Banner } from '@/components/molecules';
import { SectionContent, SectionHeader } from '@/components/organisms';
import { ReactElement } from 'react';
import { UserLayout } from '@/components/layout';

export default function AnimeDetail() {
  const router = useRouter();
  const { data } = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: Number(router.query.id),
    },
  });

  return (
    <div>
      <Banner
        url={data?.Media?.bannerImage ? `url(${data.Media.bannerImage})` : ''}
      />
      <SectionHeader data={data && data.Media ? data.Media : null} />
      <SectionContent data={data && data.Media ? data.Media : null} />
    </div>
  );
}

AnimeDetail.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
