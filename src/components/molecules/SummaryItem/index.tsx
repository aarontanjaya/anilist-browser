import styled from '@emotion/styled';
import React from 'react';

export type SummaryItemProps = React.ComponentProps<'div'> & {
  title: string;
  textContent: React.ReactNode;
};

const Container = styled.div({
  padding: '1rem',
  lineHeight: '1.5rem',
});

const SummaryItem: React.FC<SummaryItemProps> = ({
  title,
  textContent,
  ...props
}) => {
  return (
    <Container {...props}>
      <h4>{title}</h4>
      <p>{textContent}</p>
    </Container>
  );
};

export default SummaryItem;
