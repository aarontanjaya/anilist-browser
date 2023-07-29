import React from 'react';
import { mqTablet } from '@/styles/mq';
import { borders, colors } from '@/styles/variables';
import { IAnime } from '@/types';
import { SummaryItem } from '@/components/molecules';
import styled from '@emotion/styled';

type SectionSummaryProps = React.ComponentProps<'div'> & {
  data: IAnime | null;
};

const Container = styled.div<SectionSummaryProps>(
  {
    backgroundColor: colors.bgContent,
    borderRadius: borders.radius,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [mqTablet]: {
      gridTemplateColumns: '1fr',
    },
  },
  (props) => props.css,
);

const SectionSummary: React.FC<SectionSummaryProps> = ({ data, ...props }) => {
  return (
    <Container data={data} {...props}>
      {data ? (
        <>
          <SummaryItem title='Episodes' content={`${data.episodes}`} />
          <SummaryItem
            title='Season'
            content={data.season ? data.season : ''}
          />
          <SummaryItem
            title='Genres'
            content={data.genres ? data.genres.join(', ') : ''}
          />{' '}
          <SummaryItem
            title='Status'
            content={data.status ? data.status : ''}
          />
          <SummaryItem title='Type' content={data.type ? data.type : ''} />
        </>
      ) : null}
    </Container>
  );
};

export default SectionSummary;
