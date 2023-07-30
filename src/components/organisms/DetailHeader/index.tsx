import styled from '@emotion/styled';
import { ButtonAddCollection, ImageHeader } from '@/components/molecules';
import React from 'react';
import { IAnime } from '@/types';

type DetailHeaderProps = React.ComponentProps<'div'> & {
  data: IAnime | null;
};
const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'center',
  width: 'fit-content',
});

const DetailHeader: React.FC<DetailHeaderProps> = ({ data, ...props }) => {
  return (
    <Container {...props}>
      <ImageHeader
        src={data && data.coverImage?.large ? data.coverImage.large : ''}
        alt={data && data.title && data.title.english ? data.title.english : ''}
      />
      <ButtonAddCollection data={data ? data : {}} />
    </Container>
  );
};

export default DetailHeader;
