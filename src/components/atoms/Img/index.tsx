import React from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { borders } from '@/styles/variables';
import styled, { Interpolation } from '@emotion/styled';
import { Theme } from '@emotion/react';

export interface IImgProps extends ImageProps {
  containerClassname?: string;
  containerCss?: Interpolation<Theme>;
}

const Container = styled.div(
  { borderRadius: borders.radius },
  (props) => props.css,
);

const Img: React.FC<IImgProps> = ({ alt, containerCss, css, ...props }) => {
  return (
    <Container css={containerCss}>
      <Image alt={alt ? alt : ''} css={css} {...props} />
    </Container>
  );
};

export default Img;
