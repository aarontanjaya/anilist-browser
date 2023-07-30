import React from 'react';
import { IAnimeListItem } from '@/types';
import { CardAnime } from '@/components/molecules';
import styled from '@emotion/styled';
import { mqDesktop, mqMobile } from '@/styles/mq';

export type ListAnimeProps = React.ComponentProps<'div'> & {
  data: (IAnimeListItem | null)[];
  isLoading: boolean;
  enableDelete?: boolean;
  onDelete?: (id: number | null | undefined) => void;
};

const Container = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  ${mqMobile} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${mqDesktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ListAnime: React.FC<ListAnimeProps> = ({
  data,
  enableDelete = false,
  isLoading,
  onDelete,
  ...props
}) => {
  return (
    <Container {...props}>
      {data && !isLoading
        ? data.map((item, idx) => (
            <CardAnime
              showDelete={enableDelete}
              onDelete={onDelete}
              key={`card-${idx}`}
              data={item}
            />
          ))
        : Array.from(Array(10).keys()).map((val) => (
            <CardAnime.Skeleton key={`cardskeleton-${val}`} />
          ))}
    </Container>
  );
};

export default ListAnime;
