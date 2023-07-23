import React from 'react';
import { IAnimeListItem } from '@/types';
import { CardAnime } from '@/components/molecules';
import styled from '@emotion/styled';

export type ListAnimeProps = React.ComponentProps<'div'> & {
  data: (IAnimeListItem | null)[];
};

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const ListAnime: React.FC<ListAnimeProps> = ({ data, ...props }) => {
  return (
    <Container {...props}>
      {data
        ? data.map((item, idx) => <CardAnime key={`card-${idx}`} data={item} />)
        : null}
    </Container>
  );
};

export default ListAnime;
