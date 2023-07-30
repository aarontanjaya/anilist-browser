import styled from '@emotion/styled';
import { IImgProps, Img } from '@/components/atoms';
import { Skeleton } from '@chakra-ui/react';
import { IAnimeListItem } from '@/types';
import { borders } from '@/styles/variables';
import { css } from '@emotion/react';
import Link from 'next/link';
import { mqTablet } from '@/styles/mq';

export type CardAnimeProps = Omit<IImgProps, 'src' | 'alt'> & {
  data: IAnimeListItem | null;
};

export type CardAnimeSkeletonProps = React.ComponentProps<'div'>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 200px;
  :hover {
    cursor: pointer;
  }
`;

const SkeletonContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  padding: 0.5rem;
  line-height: 1.5rem;
  width: 100%;
  height: 3.5rem;
  overflow: hidden;

  @supports (-webkit-line-clamp: 2) {
    text-overflow: ellipsis;
    display: -webkit-box;
    white-space: initial;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const ImgStyled = styled(Img)`
  border-radius: ${borders.radius};
  object-fit: cover;
`;

const ImgContainer = css`
  object-fit: cover;
  width: 100%;
  height: 150px;
  ${mqTablet} {
    height: 300px;
  }
`;

const skeletonStyle = css`
  margin-bottom: 0.5rem;
  border-radius: ${borders.radius};
`;

const CardAnime: React.FC<CardAnimeProps> & {
  Skeleton: React.FC<CardAnimeSkeletonProps>;
} = ({ containerClassname, data, ...props }) => {
  return (
    <Link href={`/anime/${data?.id}`}>
      <Container className={containerClassname}>
        <ImgStyled
          src={data && data.coverImage ? (data.coverImage.large as string) : ''}
          css={ImgContainer}
          alt={data && data.title ? (data.title.english as string) : ''}
          fill={true}
          {...props}
        />
        <TitleContainer>
          <p>{data ? data.title?.english : ''}</p>
        </TitleContainer>
      </Container>
    </Link>
  );
};

const CardAnimeSkeleton: React.FC<CardAnimeSkeletonProps> = ({ ...props }) => {
  return (
    <SkeletonContainer {...props}>
      <Skeleton css={skeletonStyle} height='125px' width='100x' />
      <Skeleton
        css={{
          marginBottom: '0.5rem',
        }}
        height='10px'
      />
      <Skeleton height='10px' />
    </SkeletonContainer>
  );
};

CardAnime.Skeleton = CardAnimeSkeleton;

export default CardAnime;
