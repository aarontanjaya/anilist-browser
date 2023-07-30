import React from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { borders } from '@/styles/variables';
import styled from '@emotion/styled';

export interface IImgProps extends ImageProps {
  containerClassname?: string;
}

const Container = styled.div(
  { borderRadius: borders.radius, position: 'relative' },
  (props) => props.css,
);

const ImageStyled = styled(Image)`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.width ? props.width : '100%')};
`;

const Img: React.FC<IImgProps> = ({ alt, css, ...props }) => {
  return (
    <Container css={css}>
      <ImageStyled alt={alt ? alt : ''} {...props} />
    </Container>
  );
};

export default Img;
