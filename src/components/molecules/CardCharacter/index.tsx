import React from 'react';
import { ICharacter } from '@/types';
import { Img } from '@/components/atoms';
import styled from '@emotion/styled';
import { borders, colors } from '@/styles/variables';

export type CardCharacterProps = React.ComponentProps<'div'> & {
  data: ICharacter | null;
};

const Container = styled.div(
  {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.bgContent,
    borderRadius: borders.radius,
  },
  (props) => props.css,
);

const DetailsContainer = styled.div({
  marginLeft: '-35px',
  padding: '1rem 1.5rem',
  paddingLeft: '50px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '0.5rem',
});

const ImgStyled = styled(Img)`
  border-radius: 50%;
  object-fit: cover;
  width: 70px;
  height: 70px;
`;

const CardCharacter: React.FC<CardCharacterProps> = ({ data, ...props }) => {
  return (
    <Container {...props}>
      <ImgStyled
        src={
          data && data.node?.image && data.node.image.medium
            ? data.node.image?.medium
            : ''
        }
        alt={
          data && data.node && data.node.name && data.node.name.full
            ? data.node.name.full
            : ''
        }
        style={{
          objectFit: 'cover',
        }}
        width={70}
        height={70}
      />
      <DetailsContainer>
        <h4>{data?.node?.name?.full}</h4>
        <p>
          {data?.voiceActors && data.voiceActors[0]
            ? data.voiceActors[0].name?.full
            : ''}
        </p>
      </DetailsContainer>
    </Container>
  );
};

export default CardCharacter;
