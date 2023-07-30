import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ANIME_DETAIL } from '@/services/animes';
import { Banner } from '@/components/molecules';
import { SectionContent, SectionHeader } from '@/components/organisms';
import { ReactElement } from 'react';
import { UserLayout } from '@/components/layout';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@/styles/variables';

const containerStyle = css`
  max-width: 1300px;
  margin: 0 auto;
`;
const ContainerHeader = styled.div`
  background-color: ${colors.bgContent};
`;
export default function AnimeDetail() {
  const router = useRouter();
  const { data } = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: Number(router.query.id),
    },
  });

  return (
    <>
      <Banner
        url={data?.Media?.bannerImage ? `url(${data.Media.bannerImage})` : ''}
      />
      <ContainerHeader>
        <SectionHeader
          css={containerStyle}
          data={data && data.Media ? data.Media : null}
        />
      </ContainerHeader>
      <SectionContent
        css={containerStyle}
        data={data && data.Media ? data.Media : null}
      />
    </>
  );
}

AnimeDetail.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
