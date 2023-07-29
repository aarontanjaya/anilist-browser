import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ANIME_DETAIL } from '@/services/animes';
import { Banner } from '@/components/molecules';
import { SectionHeader, SectionSummary } from '@/components/organisms';

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
      <SectionSummary data={data && data.Media ? data.Media : null} />
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
