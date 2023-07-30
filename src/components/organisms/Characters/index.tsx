import { mqDesktop, mqTablet } from '@/styles/mq';
import { ICharacter } from '@/types';
import { CardCharacter } from '@/components/molecules';
import styled from '@emotion/styled';
import React from 'react';

export type CharactersProps = React.ComponentProps<'div'> & {
  data: (ICharacter | null)[] | null;
};

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1rem',
  [mqTablet]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [mqDesktop]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const Title = styled.h3({
  paddingBottom: '1rem',
});

const Characters: React.FC<CharactersProps> = ({ data, ...props }) => {
  return (
    <div>
      <Title>Characters</Title>
      <Container {...props}>
        {data &&
          data.map((item, idx) =>
            item ? (
              <CardCharacter
                key={`cardchar-${idx}-${item.node?.name?.full}`}
                data={item}
              />
            ) : null,
          )}
      </Container>
    </div>
  );
};

export default Characters;
