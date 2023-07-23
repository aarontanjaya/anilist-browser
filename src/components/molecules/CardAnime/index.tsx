import styled from '@emotion/styled';
import { IImgProps, Img } from '@/components/atoms';
import { IAnimeListItem } from '@/types';
import { borders } from '@/styles/variables';

export type CardAnimeProps = Omit<IImgProps, 'src' | 'alt'> & {
  data: IAnimeListItem | null;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 110px;
  :hover {
    cursor: pointer;
  }
`;

const TitleContainer = styled.div`
  padding: 0.5rem;
  line-height: 1.5rem;
  width: 100px;
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
  border-radius: ${borders.radius} ${borders.radius} 0 0;
`;

const CardAnime: React.FC<CardAnimeProps> = ({
  containerClassname,
  data,
  ...props
}) => {
  return (
    <Container className={containerClassname}>
      <ImgStyled
        src={data && data.coverImage ? (data.coverImage.medium as string) : ''}
        alt={data && data.title ? (data.title.english as string) : ''}
        width={100}
        height={150}
        {...props}
      />
      <TitleContainer>
        <p>{data ? data.title?.english : ''}</p>
      </TitleContainer>
    </Container>
  );
};

export default CardAnime;