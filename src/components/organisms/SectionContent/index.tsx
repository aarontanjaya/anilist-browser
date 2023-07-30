import { mqTablet } from '@/styles/mq';
import { IAnime } from '@/types';
import CardSummary from '../CardSummary';
import Characters from '../Characters';
import styled from '@emotion/styled';
import React from 'react';

export type SectionContentProps = React.ComponentProps<'section'> & {
  data: IAnime | null;
};

const Container = styled.section(
  {
    width: '100%',
    padding: '2rem',
  },
  (props) => props.css,
);

const SummaryCharacterContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  [mqTablet]: {
    gridTemplateColumns: '300px 1fr',
  },
});

const SectionContent: React.FC<SectionContentProps> = ({ data, ...props }) => {
  return (
    <Container {...props}>
      <SummaryCharacterContainer>
        <CardSummary data={data} />
        <Characters
          data={
            data && data.characters && data.characters.edges
              ? data.characters.edges
              : null
          }
        />
      </SummaryCharacterContainer>
    </Container>
  );
};

export default SectionContent;
