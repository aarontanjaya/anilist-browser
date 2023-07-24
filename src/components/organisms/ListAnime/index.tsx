import React from 'react';
import { IAnimeListItem } from '@/types';
import { CardAnime } from '@/components/molecules';
import styled from '@emotion/styled';

export type ListAnimeProps = React.ComponentProps<'div'> & {
  data: (IAnimeListItem | null)[];
  isLoading: boolean;
};

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ListAnime: React.FC<ListAnimeProps> = ({ data, isLoading, ...props }) => {
  return (
    <Container {...props}>
      {data && !isLoading
        ? data.map((item, idx) => <CardAnime key={`card-${idx}`} data={item} />)
        : Array.from(Array(10).keys()).map((val) => (
            <CardAnime.Skeleton key={`cardskeleton-${val}`} />
          ))}
    </Container>
  );
};

export default ListAnime;
