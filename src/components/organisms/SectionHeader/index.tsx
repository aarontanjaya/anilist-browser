import React from 'react';
import { IAnime } from '@/types';
import styled from '@emotion/styled';
import DetailHeader from '../DetailHeader';
import DescriptionText from '../DescriptionText';

export type SectionHeaderProps = React.ComponentProps<'section'> & {
  data: IAnime | null;
};

const Container = styled.section(
  {
    display: 'grid',
    gridTemplateColumns: 'auto 300px',
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
