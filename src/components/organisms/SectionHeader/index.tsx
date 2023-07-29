import React from 'react';
import { IAnime } from '@/types';
import styled from '@emotion/styled';
import DetailHeader from '../DetailHeader';
import DescriptionText from '../DescriptionText';
import { colors } from '@/styles/variables';

export type SectionHeaderProps = React.ComponentProps<'div'> & {
  data: IAnime | null;
};

const Container = styled.div(
  {
    display: 'grid',
    gridTemplateColumns: 'auto 300px',
    backgroundColor: colors.bgContent,
    alignItems: 'flex-start',
    paddingBottom: '1.5rem',
  },
  (props) => props.css,
);
const SectionHeader: React.FC<SectionHeaderProps> = ({ data, ...props }) => {
  return (
    <Container {...props}>
      <DescriptionText
        description={data && data.description ? data.description : ''}
      />
      <DetailHeader data={data} />
    </Container>
  );
};

export default SectionHeader;
