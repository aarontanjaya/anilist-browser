import React from 'react';
import { mqTablet } from '@/styles/mq';
import { borders, colors } from '@/styles/variables';
import { IAnime } from '@/types';
import { SummaryItem } from '@/components/molecules';
import styled from '@emotion/styled';

type SectionSummaryProps = React.ComponentProps<'div'> & {
  data: IAnime | null;
};

const ContentContainer = styled.div<SectionSummaryProps>(
  {
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

const Container = styled.div(
  {
    backgroundColor: colors.bgContent,
    borderRadius: borders.radius,
    height: 'fit-content',
  },
  (props) => props.css,
);

const Title = styled.h3({
  padding: '1rem',
  paddingBottom: '0',
  [mqTablet]: {
    padding: '2rem',
  },
});

const CardSummary: React.FC<SectionSummaryProps> = ({ data, ...props }) => {
  return (
    <Container>
      <Title>Summary</Title>
      <ContentContainer data={data} {...props}>
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
            <SummaryItem
              title='Type'
              textContent={data.type ? data.type : ''}
            />
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
      </ContentContainer>
    </Container>
  );
};

export default CardSummary;
