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
      display: 'flex',
      flexDirection: 'column',
      height: 'fit-content',
      padding: '1rem',
    },
  },
  (props) => props.css,
);

const CardSummary: React.FC<SectionSummaryProps> = ({ data, ...props }) => {
  return (
    <Container data={data} {...props}>
      {data ? (
        <>
          <SummaryItem title='Episodes' textContent={`${data.episodes}`} />
          <SummaryItem
            title='Season'
            textContent={data.season ? data.season : ''}
          />
          <SummaryItem
            title='Genres'
            textContent={data.genres ? data.genres.join(', ') : ''}
          />{' '}
          <SummaryItem
            title='Status'
            textContent={data.status ? data.status : ''}
          />
          <SummaryItem title='Type' textContent={data.type ? data.type : ''} />
          <SummaryItem
            title='Origin Country'
            textContent={data.countryOfOrigin ? data.countryOfOrigin : ' '}
          />
          <SummaryItem
            title='Popularity'
            textContent={data.popularity ? data.popularity : ''}
          />
          <SummaryItem
            title='Average Score'
            textContent={data.averageScore ? data.averageScore : ''}
          />
        </>
      ) : null}
    </Container>
  );
};

export default CardSummary;
