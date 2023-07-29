import styled from '@emotion/styled';
import React from 'react';

export type SummaryItemProps = React.ComponentProps<'div'> & {
  title: string;
  content: string;
};

const Container = styled.div({
  padding: '1rem',
  lineHeight: '1.5rem',
});

const SummaryItem: React.FC<SummaryItemProps> = ({
  title,
  content,
  ...props
}) => {
  return (
    <Container {...props}>
      <h5>{title}</h5>
      <p>{content}</p>
    </Container>
  );
};

export default SummaryItem;
