import { Img } from '@/components/atoms';
import { mqTablet } from '@/styles/mq';
import { borders, colors } from '@/styles/variables';
import { IAnime } from '@/types';
import { AddIcon } from '@chakra-ui/icons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

export type CardCollectionProps = React.ComponentProps<'div'> & {
  name: string;
  data: IAnime[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 200px;
  background-color: ${colors.bgContent};
  border-radius: ${borders.radius};
  :hover {
    cursor: pointer;
  }
`;

const ContainerPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  :hover {
    background-color: ${colors.bgMask};
  }
`;

const ImgStyled = styled(Img)`
  border-radius: ${borders.radius};
  object-fit: cover;
  position: absolute;
`;

const ImgContainer = css`
  object-fit: cover;
  width: 100%;
  height: 150px;
  background-color: ${colors.bgMask};
  ${mqTablet} {
    height: 300px;
  }
`;

const TextContainer = styled.div`
  padding: 1rem;
`;

const TextName = styled.p`
  font-weight: bold;
`;

const TextNew = styled.p`
  font-weight: 700;
  padding-top: 1rem;
  text-align: center;
`;

const CardCollection: React.FC<CardCollectionProps> & {
  Placeholder: React.FC<React.ComponentProps<'div'>>;
} = ({ name, data, ...props }) => {
  return (
    <Container {...props}>
      <ImgStyled
        src={
          data && data[0] && data[0].coverImage
            ? (data[0].coverImage.large as string)
            : 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg'
        }
        alt={
          data && data[0] && data[0].title && data[0].title.english
            ? data[0].title.english
            : ''
        }
        fill={true}
        css={ImgContainer}
      />
      <TextContainer>
        <TextName>{name}</TextName>
        <p>{`${data.length} Anime`}</p>
      </TextContainer>
    </Container>
  );
};

const Placeholder: React.FC<React.ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <Container {...props}>
      <ContainerPlaceholder css={ImgContainer}>
        <AddIcon />
        <TextNew>Add New Collection</TextNew>
      </ContainerPlaceholder>
    </Container>
  );
};

CardCollection.Placeholder = Placeholder;

export default CardCollection;
