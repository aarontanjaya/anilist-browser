import React from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { borders } from '@/styles/variables';
import styled from '@emotion/styled';

export interface IImgProps extends ImageProps {
  containerClassname?: string;
}

const Container = styled.div`
  border-radius: ${borders.radius};
`;

const Img: React.FC<IImgProps> = ({ alt, containerClassname, ...props }) => {
  return (
    <Container className={containerClassname}>
      <Image alt={alt ? alt : ''} {...props} />
    </Container>
  );
};

export default Img;
