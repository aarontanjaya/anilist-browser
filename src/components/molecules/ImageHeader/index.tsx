import React from 'react';
import styled from '@emotion/styled';
import { Img } from '@/components/atoms';
import { borders } from '@/styles/variables';

export type ImageHeaderProps = React.ComponentProps<'div'> & {
  src: string;
  alt: string;
};

const Container = styled.div({
  marginTop: '-100px',
  justifyContent: 'center',
});

const ImgStyled = styled(Img)`
  border-radius: ${borders.radius};
`;

const ImageHeader: React.FC<ImageHeaderProps> = ({ src, alt, ...props }) => {
  return (
    <Container
      css={{
        justifyContent: 'center',
      }}
      {...props}
    >
      <ImgStyled
        src={src}
        alt={alt}
        style={{
          objectFit: 'cover',
        }}
        width={200}
        height={300}
      />
    </Container>
  );
};

export default ImageHeader;
