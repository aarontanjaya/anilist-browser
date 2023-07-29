import styled from '@emotion/styled';
import DOMPurify from 'isomorphic-dompurify';
import React from 'react';

export type DescriptionTextProps = React.ComponentProps<'div'> & {
  description: string;
};

const Container = styled.div(
  {
    wordWrap: 'break-word',
    width: '100%',
    padding: '2rem',
  },
  (props) => props.css,
);

const DescriptionText: React.FC<DescriptionTextProps> = ({
  description,
  ...props
}) => {
  const text = DOMPurify.sanitize(description);
  return (
    <Container
      {...props}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default DescriptionText;
